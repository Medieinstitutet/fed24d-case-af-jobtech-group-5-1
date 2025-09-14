import { LayoutBlockVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiTypography } from "@digi/arbetsformedlingen-react";
import { useJobContext } from "../context/JobContext";

export const SingleJobPage = () => {
  const { state } = useJobContext();
  const job = state.selectedJob;

  if (!job) return <p>Laddar annons...</p>;

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
