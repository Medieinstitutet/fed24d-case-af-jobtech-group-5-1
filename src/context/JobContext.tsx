import type { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";
import { useJobs } from "../services/getJobs";
import { jobReducer, initialState } from "../reducers/JobReducer";
import type { State, Action } from "../reducers/JobReducer";

const JobContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);

  const jobs = useJobs({
    offset: 0,
    limit: 25,
    q: state.query,
    region: state.region,
    occupation: state.occupation,
  });

  return <JobContext.Provider value={{ state: { ...state, jobs }, dispatch }}>{children}</JobContext.Provider>;
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) throw new Error("useJobContext must be used within a JobProvider");
  return context;
};
