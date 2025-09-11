import { ButtonSize, ButtonVariation, FormInputSearchVariation, FormInputType, LinkVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiFormFilter, DigiFormInputSearch, DigiLink, DigiNavigationPagination, DigiNavigationSidebarButton } from "@digi/arbetsformedlingen-react";
import "../styles/HomePage.scss";

export const HomePage = () => {
  return (
    <>
      <header>
        <DigiNavigationSidebarButton 
          afText="Meny"
          className="menu">
        </DigiNavigationSidebarButton>
      </header>

      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.PRIMARY}
        afFullWidth={false}
        className='my-class'
      >
        En knapp
      </DigiButton>

      <div className="HomePage-div">
        <DigiFormInputSearch
          afLabel="Etikett"
          afVariation={FormInputSearchVariation.LARGE}
          afType={FormInputType.SEARCH}	
          afButtonText="Sök"
          className="search"
        >
        </DigiFormInputSearch>
      </div>

      <DigiFormFilter
        afFilterButtonText="Ort"
        afSubmitButtonText="Filtrera"
        afName="Välj"
        afListItems={[{"id":"omr1","label":"Område 1"},{"id":"omr2","label":"Område 2"},{"id":"omr3","label":"Område 3"}]}
        className="filter"
      />

      <DigiFormFilter
        afFilterButtonText="Yrke"
        afSubmitButtonText="Filtrera"
        afName="Välj"
        afListItems={[{"id":"omr1","label":"Område 1"},{"id":"omr2","label":"Område 2"},{"id":"omr3","label":"Område 3"}]}
        className="filter"
      />


      <DigiNavigationPagination
        afTotalPages={6}
        afInitActive-page={1}
        afCurrentResultStart={1}
        afCurrentResultEnd={25}
        afTotalResults={10}
        afResultName="annonser"
        className="pagination"
      >
      </DigiNavigationPagination>

      <DigiLink
        afHref="/"
        afVariation={LinkVariation.SMALL}
      >	 
        Jag är en länk
      </DigiLink>
    </>
  );
};
