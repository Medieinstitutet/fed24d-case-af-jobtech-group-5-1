import type { Job } from "../models/Job";

export interface State {
  query: string;
  region: string;
  occupation: string;
  jobs: Job[];
}

export type Action =
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_REGION"; payload: string }
  | { type: "SET_OCCUPATION"; payload: string };

export const initialState: State = {
  query: "",
  region: "",
  occupation: "",
  jobs: [],
};

export function jobReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_REGION":
      return { ...state, region: action.payload };
    case "SET_OCCUPATION":
      return { ...state, occupation: action.payload };
    default:
      return state;
  }
}
