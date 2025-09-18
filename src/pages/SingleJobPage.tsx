import { LayoutBlockVariation, LinkVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiLinkExternal, DigiLinkInternal, DigiTypography } from "@digi/arbetsformedlingen-react";
import { useJobContext } from "../context/JobContext";
import { useNavigate } from "react-router";
import "../styles/SingleJobPage.scss";

export const SingleJobPage = () => {
  const { state } = useJobContext();
  const job = state.selectedJob;
  const navigate = useNavigate();

  if (!job) return <p>Laddar annons...</p>;

  const mappedMustHave = {
    languages: job.must_have.languages[0]?.label || null,
    work_experiences: job.must_have.work_experiences[0]?.label || null,
    education: job.must_have.education[0]?.label || null,
    education_level: job.must_have.education_level[0]?.label || null,
  };

  const hasMustHaveData =
    mappedMustHave.languages ||
    mappedMustHave.work_experiences ||
    mappedMustHave.education ||
    mappedMustHave.education_level;

  const formatText = (text: string) => {
    if (!text) return "";
    return `<p>${text.replace(/\n\n+/g, "</p><p>").replace(/\n/g, "<br/>")}</p>`;
  };

  const normalizeUrl = (url?: string | null): string | undefined => {
    if (!url) return undefined;
    const u = url.trim();
    if(!u) return undefined;
    return /^https?:\/\//i.test(u) ? u : `https://${u}`; 
  };

  const applyHref = normalizeUrl(job.application_details?.url ?? job.employer?.url);

  return (
    <div className="job-ad-container">
      <div className="back-btn">
        <DigiLinkInternal
          onAfOnClick={() => navigate(-1)}
          afVariation={LinkVariation.LARGE}
        >
          Sökresultat
        </DigiLinkInternal>
      </div>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} className="job-ad">
        <div className="job-ad-grid">
          {/* Vänster */}
          <DigiTypography afVariation={TypographyVariation.SMALL} className="job-main">
            {job.logo_url && <img src={job.logo_url} alt="Företagslogotyp" className="company-logo" />}
            <h1>{job.headline}</h1>
            <h2>{job.employer.workplace}</h2>
            <h3>{job.occupation.label}</h3>
            <h3>Kommun: {job.workplace_address.municipality}</h3>
            <div className="short-info">
              {job.working_hours_type?.label && <p>Omfattning: {job.working_hours_type.label}</p>}
              {job.duration?.label && <p>Varaktighet: {job.duration.label}</p>}
              {job.employment_type?.label && <p>Anställningsform: {job.employment_type.label}</p>}
              {job.number_of_vacancies != null && job.number_of_vacancies > 1 && (
                <p>Antal tjänster: {job.number_of_vacancies}</p>
              )}
            </div>

            {hasMustHaveData && (
              <div className="qualifications">
                <h2>Kvalifikationer</h2>
                {mappedMustHave.work_experiences && (
                  <>
                    <h3>Arbetslivserfarenhet</h3>
                    <p>{mappedMustHave.work_experiences}</p>
                  </>
                )}
                {mappedMustHave.education && (
                  <>
                    <h3>Utbildning</h3>
                    <p>{mappedMustHave.education}</p>
                  </>
                )}
                {mappedMustHave.education_level && (
                  <>
                    <h3>Utbildningsnivå</h3>
                    <p>{mappedMustHave.education_level}</p>
                  </>
                )}
                {mappedMustHave.languages && (
                  <>
                    <h3>Språk</h3>
                    <p>{mappedMustHave.languages}</p>
                  </>
                )}
              </div>
            )}
            <div className="main-content-job-ad">
              <h2>Om jobbet</h2>
              <blockquote dangerouslySetInnerHTML={{ __html: formatText(job.description.text_formatted) }} />
            </div>
            <div className="about-employment">
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
            </div>
            <div className="employer">
              {job.employer?.name && (
                <>
                  <h2>Arbetsgivaren</h2>
                  <p>{job.employer.name}</p>
                </>
              )}
            </div>
            {job.employer.url && (
              <DigiLinkExternal
                afHref={job.employer.url.startsWith("http") ? job.employer.url : `https://${job.employer.url}`}
                rel="noopener noreferrer"
                afTarget="_blank"
                afVariation={LinkVariation.SMALL}
              >
                {job.employer.url}
              </DigiLinkExternal>
            )}
          </DigiTypography>

          {/* Höger */}
          <aside className="job-aside">
            <DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY} className="apply-card">
              <DigiTypography>
                <h2>Sök jobbet</h2>
                <p>Ansök via arbetsgivarens webbplats.</p>
                {job.employer?.url && (
                  <DigiLinkExternal
                    afHref={applyHref}
                    afTarget="_blank"
                    rel="noopener noreferrer"
                    afVariation={LinkVariation.LARGE}
                    className="apply-btn"
                  >
                    Ansök här
                  </DigiLinkExternal>
                )}
              </DigiTypography>
            </DigiLayoutBlock>
          </aside>
        </div>
      </DigiLayoutBlock>
    </div>
  );
};
