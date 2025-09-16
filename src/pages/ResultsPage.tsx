import { ResultsComponent } from "../components/ResultsComponent";
import { SearchComponent } from "../components/SearchComponent";
import { SelectedFilters } from "../components/SelectedFilter";
import { useJobContext } from "../context/JobContext";
import "../styles/ResultsPage.scss";

export const ResultsPage = () => {
  const { state } = useJobContext();
  const hasSearch = state.query.length > 0 || state.region.length > 0 || state.occupation.length > 0;

  return (
    <>
      <div className="wrapper">
        <SearchComponent />
        <SelectedFilters />
        {hasSearch ? (
          <ResultsComponent />
        ) : (
          <p className="placeholder-text">Gör en sökning eller filtrera i listorna för att hitta ditt nästa jobb!</p>
        )}
      </div>
    </>
  );
};
