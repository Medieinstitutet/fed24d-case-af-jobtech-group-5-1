import type { Job } from "../models/Job";

export interface State {
  selectedJob: Job | null;
  query: string;
  region: string[];
  occupation: string[];
}

export type Action =
  | { type: "SET_SELECTED_JOB"; payload: Job }
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_REGION"; payload: string[] }
  | { type: "SET_OCCUPATION"; payload: string[] };

export const initialState: State = {
  selectedJob: null,
  query: "",
  region: [],
  occupation: [],
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
    default:
      return state;
  }
};
