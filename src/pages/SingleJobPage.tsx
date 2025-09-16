import { LayoutBlockVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiTypography } from "@digi/arbetsformedlingen-react";
import { useJobContext } from "../context/JobContext";
import "../styles/SingleJobPage.scss";

export const SingleJobPage = () => {
  const { state } = useJobContext();
  const job = state.selectedJob;

  if (!job) return <p>Laddar annons...</p>;

  return (
    <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <div className="intro">
          <h1>{job.headline}</h1>
          <h2>{job.employer.workplace}</h2>
          <h3>Kommun: {job.occupation.label}</h3>
          <h3>Kommun: {job.workplace_address.municipality}</h3>
          {job.working_hours_type?.label && <p>Omfattning: {job.working_hours_type.label}</p>}
          {job.duration?.label && <p>Varaktighet: {job.duration.label}</p>}
          {job.employment_type?.label && <p>Anställningsform: {job.employment_type.label}</p>}
          {job.number_of_vacancies != null && job.number_of_vacancies > 1 && (
            <p>Antal tjänster: {job.number_of_vacancies}</p>
          )}
        </div>
        <h2>Om jobbet</h2>
        <blockquote dangerouslySetInnerHTML={{ __html: job.description.text_formatted }} />
        <h2>Om anställningen</h2>
        {job.salary_type?.label && (
          <>
            <h3>Lön</h3>
            <p>
              <strong>Lönetyp: </strong>
              {job.salary_type.label}
            </p>
          </>
        )}
        {job.description?.conditions && (
          <>
            <h3>Anställningsvillkor</h3>
            <p>{job.description.conditions}</p>
          </>
        )}
        {job.employer?.workplace && (
          <>
            <h3>Var ligger arbetsplatsen?</h3>
            <p>
              Arbetsplatsen ligger i kommunen <strong>{job.workplace_address.municipality}</strong> i{" "}
              <strong>{job.workplace_address.region}</strong>
            </p>
          </>
        )}
        {job.employer?.name && (
          <>
            <h2>Arbetsgivaren</h2>
            <p>{job.employer.name}</p>
            {job.employer.url && (
              <a
                href={job.employer.url.startsWith("http") ? job.employer.url : `https://${job.employer.url}`}
                target="_blank"
                rel="noopener noreferrer">
                {job.employer.url}
              </a>
            )}
          </>
        )}
      </DigiTypography>
    </DigiLayoutBlock>
  );
};
