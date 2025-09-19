import { useJobContext } from "../context/JobContext";
import { ResultCard } from "../components/ResultCard";
import { DigiLinkInternal } from "@digi/arbetsformedlingen-react";
import { LinkVariation } from "@digi/arbetsformedlingen";
import "../styles/SavedPage.scss";
import "../styles/ResultCard.scss";

export const SavedJobsPage = () => {
  const { state } = useJobContext();

  const noSavedJobs = state.savedJobs.length === 0;

  return (
    <>
      <div className="saved-page-container">
        <DigiLinkInternal afHref="#/result" className="back-btn" afVariation={LinkVariation.LARGE}>
          Sökresultat
        </DigiLinkInternal>

        {!noSavedJobs ? (
          <>
            <h2>Sparade jobb</h2>
            <div className="job-card">
              <ul className="saved-job-list">
                {state.savedJobs.map((job) => (
                  <ResultCard key={job.id} job={job} />
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <p>Du har inte sparat några annonser än.</p>
          </>
        )}
      </div>
    </>
  );
};
