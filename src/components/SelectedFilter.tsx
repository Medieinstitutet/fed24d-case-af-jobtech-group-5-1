import { regions, occupation } from "../services/mappedData";
import { useJobContext } from "../context/JobContext";
import "../styles/SelectedFilter.scss";

export const SelectedFilters = () => {
  const { state, dispatch } = useJobContext();

  const handleResetQuery = () => {
    dispatch({ type: "SET_QUERY", payload: "" });
  };

  const selectedRegionNames = state.region.map((code) => {
    const found = regions.find((r) => r.code === code);
    return found ? found.name : code;
  });

  const selectedOccupationNames = state.occupation.map((code) => {
    const found = occupation.find((o) => o.code === code);
    return found ? found.name : code;
  });

  return (
    <div className="selected-filters">
      {state.query && (
        <div className="filter-item">
          <strong>Search:</strong> {state.query}{" "}
          <button className="reset-filter-btn" onClick={handleResetQuery}>
            ×
          </button>
        </div>
      )}
      {selectedRegionNames.length > 0 && (
        <div className="filter-group">
          <strong>{selectedRegionNames.length > 1 ? "Valda orter:" : "Vald ort:"}</strong>{" "}
          {selectedRegionNames.join(", ")}
          <button className="reset-filter-btn" onClick={() => dispatch({ type: "SET_REGION", payload: [] })}>
            ×
          </button>
        </div>
      )}

      {selectedOccupationNames.length > 0 && (
        <div className="filter-group">
          <strong>{selectedOccupationNames.length > 1 ? "Valda yrkesgrupper:" : "Vald yrkesgrupp:"}</strong>{" "}
          {selectedOccupationNames.join(", ")}
          <button className="reset-filter-btn" onClick={() => dispatch({ type: "SET_OCCUPATION", payload: [] })}>
            ×
          </button>
        </div>
      )}
    </div>
  );
};
