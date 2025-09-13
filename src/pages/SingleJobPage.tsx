import { LayoutBlockVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiTypography } from "@digi/arbetsformedlingen-react";
import { useJobContext } from "../context/JobContext";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Job } from "../models/Job";
import { BASE_URL } from "../services/getJobs";

export const SingleJobPage = () => {
  const { state } = useJobContext();
  const { id } = useParams();
const jobId = String(id);
const [localJob, setLocalJob] = useState<Job | null>(null);

const jobFromContext = state.jobs.find(j => String(j.id) === jobId);
const job = jobFromContext || localJob;

useEffect(() => {
  if (!jobFromContext && !localJob) {
    fetch(`${BASE_URL}id=${jobId}`)
      .then(res => res.json())
      .then(data => setLocalJob(data))
      .catch(() => setLocalJob(null));
  }
}, [jobId, jobFromContext, localJob]);

if (!job || !job.employer || !job.workplace_address) {
  return <p>Laddar annons...</p>;
}

  return (
    <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h1>{job.headline}</h1>
        <h2>{job.employer.workplace}</h2>
        <h3>Kommun: {job.workplace_address.municipality}</h3>
        {job.working_hours_type?.label && <p>Omfattning: {job.working_hours_type.label}</p>}
        {job.duration?.label && <p>Varaktighet: {job.duration.label}</p>}
        {job.employment_type?.label && <p>Anställningsform: {job.employment_type.label}</p>}
        {job.number_of_vacancies != null && job.number_of_vacancies > 1 && (
          <p>Antal tjänster: {job.number_of_vacancies}</p>
        )}
        <blockquote>{job.description.text}</blockquote>
      </DigiTypography>
    </DigiLayoutBlock> 
  );
};
 