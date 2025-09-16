import type { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";
import { jobReducer, initialState } from "../reducers/JobReducer";
import type { State, Action } from "../reducers/JobReducer";

interface JobContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);
  return <JobContext.Provider value={{ state, dispatch }}>{children}</JobContext.Provider>;
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) throw new Error("useJobContext must be used within a JobProvider");
  return context;
};
