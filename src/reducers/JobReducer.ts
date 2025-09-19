import type { Job } from "../models/Job";

export interface State {
  selectedJob: Job | null;
  query: string;
  region: string[];
  occupation: string[];
  savedJobs: Job[]; // ändrat till array
}

export type Action =
  | { type: "SET_SELECTED_JOB"; payload: Job }
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_REGION"; payload: string[] }
  | { type: "SET_OCCUPATION"; payload: string[] }
  | { type: "ADD_SAVED_JOB"; payload: Job }
  | { type: "REMOVE_SAVED_JOB"; payload: string }; // t.ex. id

export const initialState: State = {
  selectedJob: null,
  query: "",
  region: [],
  occupation: [],
  savedJobs: [],
};

export const jobReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_SELECTED_JOB":
      return { ...state, selectedJob: action.payload };

    case "SET_QUERY":
      return { ...state, query: action.payload };

    case "SET_REGION":
      return { ...state, region: action.payload };

    case "SET_OCCUPATION":
      return { ...state, occupation: action.payload };

    case "ADD_SAVED_JOB":
      if (state.savedJobs.some((j) => j.id === action.payload.id)) {
        return state;
      }
      return { ...state, savedJobs: [...state.savedJobs, action.payload] };

    case "REMOVE_SAVED_JOB":
      return {
        ...state,
        savedJobs: state.savedJobs.filter((j) => j.id !== action.payload),
      };

    default:
      return state;
  }
};
