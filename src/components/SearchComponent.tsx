import { regions, occupation } from "../services/mappedData";
import { useJobContext } from "../context/JobContext";
import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormFilter, DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import "../styles/SearchComponent.scss";

export const SearchComponent = () => {
  const { dispatch, state } = useJobContext();

  return (
    <>
      <div className="HomePage-div">
        <DigiFormInputSearch
          afLabel="Sök jobb"
          afVariation={FormInputSearchVariation.LARGE}
          afType={FormInputType.SEARCH}
          afButtonText="Sök"
          className="search"
          afValue={state.query}
          onAfOnSubmitSearch={(e: any) => {
            dispatch({ type: "SET_QUERY", payload: e.detail });
          }}
        />
      </div>
      <div className="forms">
        <DigiFormFilter
          afFilterButtonText="Ort"
          afSubmitButtonText="Filtrera"
          afName="Välj län"
          afListItems={regions.map((r) => ({ id: r.code, label: r.name }))}
          afCheckItems={state.region}
          className="filter"
          onAfSubmitFilter={(e: any) => dispatch({ type: "SET_REGION", payload: e.detail.checked || [] })}
        />

        <DigiFormFilter
          afFilterButtonText="Yrke"
          afSubmitButtonText="Filtrera"
          afName="Välj yrkesgrupp"
          afListItems={occupation.map((o) => ({ id: o.code, label: o.name }))}
          afCheckItems={state.occupation}
          className="filter"
          onAfSubmitFilter={(e: any) => dispatch({ type: "SET_OCCUPATION", payload: e.detail.checked || [] })}
        />
      </div>
    </>
  );
};
