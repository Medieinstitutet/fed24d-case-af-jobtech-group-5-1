import { InfoCardHeadingLevel, InfoCardSize, InfoCardType, InfoCardVariation, LinkVariation } from "@digi/arbetsformedlingen";
import {  DigiInfoCard, DigiLinkInternal } from "@digi/arbetsformedlingen-react";
import "../styles/HomePage.scss";

export const HomePage = () => {
  return (
    <>
      <section className="top-section">
        <h2>Är du på jakt efter drömjobbet?</h2>
        <h3>Då har du kommit till rätt ställe!</h3>
        <h4>Vi på Karriärkompassen samlar aktuella jobbannonser från hela landet och gör det enkelt att hitta rätt.</h4>
        <h4 className="h4-info">Öppna annonsen, läs kraven och ta kontakt via de uppgifter som arbetsgivaren själv har lämnat.</h4>
      
        <DigiLinkInternal
            afHref="#/result"
            afVariation={LinkVariation.LARGE}
            className="top-section-link">
            Till annonserna
          </DigiLinkInternal>
      </section>

      <section className="info-card-container">
        <h4>Artiklar och tips</h4>
        <DigiInfoCard
          afHeading="5 cv-tips för att säkra drömjobbet"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afLinkHref="#/artiklar/5-cv-tips"	
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
          afLinkHref="#/artiklar/omvandla-svagheter-till-styrkor"	
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
          afLinkHref="#/artiklar/lyckas-på-intervju"	
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
          afLinkHref="#/artiklar/löneförhandling"	
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
