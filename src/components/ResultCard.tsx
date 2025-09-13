import { useJobContext } from "../context/JobContext";
import { DigiLink } from "@digi/arbetsformedlingen-react";
import { LinkVariation } from "@digi/arbetsformedlingen";
import { formatDateTime } from "../services/formatDateTime.ts";

export const ResultCard = () => {
  const { state } = useJobContext();
  const jobs = state.jobs;

  return (
    <>
      <div className="job-list">
        {jobs.length ? (
          <ul>
            {jobs.map((job) => (
              <li key={job.id} className="oneObject">
                <DigiLink afHref={`/result/${job.id}`} afVariation={LinkVariation.LARGE}>
                  {job.headline}
                </DigiLink>
                <h4>{`${job.employer.workplace} – ${job.workplace_address.municipality}`}</h4>
                <p>{job.occupation.label}</p>
                <p> {formatDateTime(job.publication_date)}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Inga jobb hittades</p>
        )}
      </div>
    </>
  );
};
