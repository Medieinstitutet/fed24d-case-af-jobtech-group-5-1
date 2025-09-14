import { useJobContext } from "../context/JobContext";
import { useNavigate } from "react-router";
import type { Job } from "../models/Job";
import { formatDateTime } from "../utils/formatDateTime";
import "../styles/ResultCard.scss";
import { useEffect, useState } from "react";

export const ResultCard = ({ job }: { job: Job }) => {
  const { dispatch, state } = useJobContext();
  const navigate = useNavigate();
  const [navigateReady, setNavigateReady] = useState(false);

  useEffect(() => {
    if (navigateReady && state.selectedJob?.id === job.id) {
      navigate(`/result/${job.id}`);
    }
  }, [navigateReady, state.selectedJob]);

  const handleClick = () => {
    dispatch({ type: "SET_SELECTED_JOB", payload: job });
    setNavigateReady(true);
  };

  return (
    <div className="job-list">
      <li className="oneObject" onClick={handleClick}>
        <h3>{job.headline}</h3>
        <h4>{`${job.employer?.workplace} – ${job.workplace_address?.municipality}`}</h4>
        <p>{job.occupation?.label}</p>
        <p>{formatDateTime(job.publication_date)}</p>
      </li>
    </div>
  );
};
