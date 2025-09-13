import { DigiLink } from "@digi/arbetsformedlingen-react";
import { LinkVariation } from "@digi/arbetsformedlingen";
import { formatDateTime } from "../utils/formatDateTime"; 
import type { Job } from "../models/Job";
import "../styles/ResultCard.scss";

export const ResultCard = ({ job }: { job: Job }) => {
  return (
    <div className="job-list">
    <li className="oneObject">
      <DigiLink afHref={`/result/${job.id}`} afVariation={LinkVariation.LARGE}>
        {job.headline}
      </DigiLink>
      <h4>{`${job.employer?.workplace} – ${job.workplace_address?.municipality}`}</h4>
      <p>{job.occupation?.label}</p>
      <p>{formatDateTime(job.publication_date)}</p>
    </li>
    </div>
  );
};
 