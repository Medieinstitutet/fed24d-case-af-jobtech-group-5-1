import { useState } from "react";
import { useJobContext } from "../context/JobContext";
import { ResultCard } from "./ResultCard";
import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { useJobs } from "../services/getJobs";
import { getPaginationData } from "../utils/pagination";

export const ResultsComponent = () => {
  const { state } = useJobContext();
  const limit = 25;
  const [currentPage, setCurrentPage] = useState(1);

  const totalResults = 500; 

    const offset = limit * (currentPage - 1);

          const jobs = useJobs({
    offset,
    limit,
    q: state.query,
    region: state.region,
    occupation: state.occupation,
  });

  const { totalPages, currentResultStart, currentResultEnd } = getPaginationData(
    currentPage,
    limit,
    totalResults,
    jobs.length
  );

  const handlePageChange = (event: CustomEvent<number>) => {
    setCurrentPage(event.detail);
  };

  return (
    <div className="job-list">
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job) => <ResultCard key={job.id} job={job} />)
        ) : (
          <p>Inga jobb hittades</p>
        )}
      </ul>

      <DigiNavigationPagination
        afTotalPages={totalPages}
        afInitActivePage={1}
        afCurrentResultStart={currentResultStart}
        afCurrentResultEnd={currentResultEnd}
        afTotalResults={totalResults}
        afResultName="annonser"
        className="pagination"
        onAfOnPageChange={handlePageChange}
      />
    </div>
  );
};
