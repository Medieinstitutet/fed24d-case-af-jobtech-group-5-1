import { ResultCard } from "./ResultCard";
import "../styles/ResultCard.scss";
import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";

export const ResultsComponent = () => {
  return (
    <div className="job-list">
      <ResultCard />
      <DigiNavigationPagination
        afTotalPages={6}
        afInitActive-page={1}
        afCurrentResultStart={1}
        afCurrentResultEnd={25}
        afTotalResults={10}
        afResultName="annonser"
        className="pagination"
      />
    </div>
  );
};
