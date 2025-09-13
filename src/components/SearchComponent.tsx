import { regions, occupation } from "../services/mappedData";
import { useJobContext } from "../context/JobContext";
import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormFilter, DigiFormInputSearch } from "@digi/arbetsformedlingen-react";

export const SearchComponent = () => {
  const { dispatch } = useJobContext();

  return (
    <>
      <div className="HomePage-div">
        <DigiFormInputSearch
          afLabel="Sök jobb"
          afVariation={FormInputSearchVariation.LARGE}
          afType={FormInputType.SEARCH}
          afButtonText="Sök"
                  className="search"
          onAfOnSubmitSearch={(e: any) => {
            dispatch({ type: "SET_QUERY", payload: e.detail }); 
          }}
        />
      </div>

      <DigiFormFilter
        afFilterButtonText="Ort"
        afSubmitButtonText="Filtrera"
        afName="Välj län"
        afListItems={regions.map((r) => ({ id: r.code, label: r.name }))}
        className="filter"
        onAfSubmitFilter={(e: any) => dispatch({ type: "SET_REGION", payload: e.detail.checked[0] })}
      />

      <DigiFormFilter
        afFilterButtonText="Yrke"
        afSubmitButtonText="Filtrera"
        afName="Välj yrkesgrupp"
        afListItems={occupation.map((o) => ({ id: o.code, label: o.name }))}
        className="filter"
        onAfSubmitFilter={(e: any) => dispatch({ type: "SET_OCCUPATION", payload: e.detail.checked[0] })}
      />
    </>
  );
};
