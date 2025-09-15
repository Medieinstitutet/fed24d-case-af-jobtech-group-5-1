import { InfoCardHeadingLevel, InfoCardSize, InfoCardType, InfoCardVariation } from "@digi/arbetsformedlingen";
import {  DigiInfoCard } from "@digi/arbetsformedlingen-react";
import "../styles/HomePage.scss";

export const HomePage = () => {
  return (
    <>
      {/* <header>
        <DigiNavigationSidebarButton 
          afText="Meny"
          className="menu">
        </DigiNavigationSidebarButton>
      </header> */}

      {/* <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.PRIMARY}
        afFullWidth={false}
        className='my-class'
      >
        En knapp
      </DigiButton> */}

      {/* <div className="HomePage-div">
        <DigiFormInputSearch
          afLabel="Etikett"
          afVariation={FormInputSearchVariation.LARGE}
          afType={FormInputType.SEARCH}	
          afButtonText="Sök"
          className="search"
        >
        </DigiFormInputSearch>
      </div> */}

      {/* <DigiFormFilter
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
      /> */}


      {/* <DigiNavigationPagination
        afTotalPages={6}
        afInitActive-page={1}
        afCurrentResultStart={1}
        afCurrentResultEnd={25}
        afTotalResults={10}
        afResultName="annonser"
        className="pagination"
      >
      </DigiNavigationPagination> */}

      {/* <DigiLink
        afHref="/"
        afVariation={LinkVariation.SMALL}
      >	 
        Jag är en länk
      </DigiLink> */}

      <section className="top-section">
        <h2>Är du på jakt efter drömjobbet inom "bla bla bla"?</h2>
        <h3>Då har du kommit till rätt ställe!</h3>
        <h4>Hos oss på Karriärkompassen kan du söka bland alla aktuella jobbannonser från norr till söder.</h4>
        <a href="">Till annonserna ➝</a>
      </section>

      <section className="info-card-container">
        <DigiInfoCard
          afHeading="5 cv-tips för att säkra drömjobbet"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afLinkHref="/artiklar/5-cv-tips"	
          afLinkText="Läs mer"	
          afVariation={InfoCardVariation.PRIMARY}	
          afSize={InfoCardSize.STANDARD}
          className="info-card"
        >
          <p>
          Fem konkreta justeringar som gör ditt CV tydligare, 
          snyggare och mer träffsäkert – på under en timme.
          </p>
        </DigiInfoCard>

        <DigiInfoCard
          afHeading="Omvandla dina svagheter till styrkor"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afLinkHref="/artiklar/omvandla-svagheter-till-styrkor"	
          afLinkText="Läs mer"	
          afVariation={InfoCardVariation.PRIMARY}	
          afSize={InfoCardSize.STANDARD}
          className="info-card"
        >
          <p>
          Lär dig ramverket som gör en “svaghet” till ett 
          plus i intervjun – med färdiga svarsexempel.
          </p>
        </DigiInfoCard>

        <DigiInfoCard
          afHeading="Så lyckas du på intervjun"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afLinkHref="/artiklar/lyckas-på-intervju"	
          afLinkText="Läs mer"	
          afVariation={InfoCardVariation.PRIMARY}	
          afSize={InfoCardSize.STANDARD}
          className="info-card"
        >
          <p>
          Förberedelse på 30 minuter som ger lugn, 
          struktur och starka svar.
          </p>
        </DigiInfoCard>

        <DigiInfoCard
          afHeading="Löneförhandling - steg för steg"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afLinkHref="/artiklar/löneförhandling"	
          afLinkText="Läs mer"	
          afVariation={InfoCardVariation.PRIMARY}	
          afSize={InfoCardSize.STANDARD}
          className="info-card"
        >
          <p>
          Så förbereder du din siffra, ditt spann och dina 
          alternativ – utan att det känns obekvämt.
          </p>
        </DigiInfoCard>
      </section>
    </>
  );
};
