# 📌 Rättningsrapport – fed24d-case-af-jobtech-group-5-1

## 🎯 Uppgiftens Krav:
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://data.arbetsformedlingen.se/data/platsannonser/)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/job-ads/jobsearch/jobsearch-api/-/blob/main/docs/GettingStartedJobSearchSE.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): [Search job ads (jobtechdev.se)](https://jobsearch.api.jobtechdev.se/)

## Uppgift 

Använd endpoint **/search** för att söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: [Historical job ads (jobtechdev.se)](https://historical.api.jobtechdev.se/)

Om möjligt, använd en grafisk presentation av era resultat genom t.ex. stapeldiagram eller linjegrafer.

**Observera**
Er slutprodukt ska ej innehålla Arbetsförmedlingens logga eller färger. Anpassa gärna efter eget tycke och smak så att ni har en färgpalett och en god tanke bakom. 

## Betygskriterier 

### Need-to-have (G) 
- Ni har hämtat data på ett strukturerat sätt med hjälp av antingen fetch eller axios. 
- Ni har skapat en tjänst som ni använder för att hämta data. 
- Ni använder react-koncept vi har pratat om för att göra datan tillgänglig (context, state, routing et.c.). 
- Ni använder den syntax, namngivningsstandard samt skrivsätt som vi har lärt er.  
- Ni använder designsystemet för presentation. 

### Nice-to-have (Extra bonus) 
- Styled components (som drar nytta av designsystemet) 
- Grafisk presentation av datat 
- Användning av custom hook där det finns möjlighet
- Använd endpoint /complete för att lägga till autocomplete-funktion och få förslag på begrepp vid fritextsökning

## 🔍 ESLint-varningar:


## 🏆 **Betyg: G**
📌 **Motivering:** Uppgiften uppfyller G‑kraven: data hämtas strukturerat via fetch i en tydligt kapslad tjänst (custom hook useJobs), React‑koncept (context, reducer/state, routing) används korrekt, designsystemet används konsekvent och AF:s logga/färger är ersatta av egen profil. Koden är till största delen idiomatisk TypeScript/React och appen har extra funktionalitet som sparade jobb i localStorage.

💡 **Förbättringsförslag:**  
- Semantik och tillgänglighet: I ResultCard returneras <li> inuti en <div>, vilket bryter listsemantiken. Låt <li> vara direkt barn till <ul> och flytta card‑wrappen in i li (eller gör kortet till <li> och ta bort ytterdiven). Undvik klick på hela li; använd länk/knapp till detaljsidan.
- Deep link/refresh: SingleJobPage förlitar sig på state.selectedJob. Vid direktlänk/refresh (result/:id) blir sidan tom. Hämta annonsen baserat på :id (t.ex. via /search?ids= eller dedikerad endpoint) när selectedJob saknas.
- Laddning/empty state: useJobs saknar loading/error‑tillstånd. Nu visas spinner när hits.length === 0, även när sökningen gav 0 träffar. Lägg till loading och error i hooken, visa "Inga annonser matchade" när 0 träffar utan fel, och felmeddelande vid nätverksfel (kontrollera res.ok innan res.json()).
- Paginering: Återställ currentPage till 1 när q/region/occupation ändras. Annars kan offset hamna utanför ny resultatuppsättning och ge tom vy.
- Ansök‑länk: applyHref byggs från application_details.url || employer.url, men rendern i aside kräver employer.url. Byt villkor till if (applyHref) och använd den i länken.
- XSS‑skydd: Ni använder dangerouslySetInnerHTML för annonsbeskrivning och artiklar. Sanera HTML (t.ex. DOMPurify) innan render.
- Header‑logga: MutationObserver som byter bild i DigiHeader är skört. Försök använda exponerade slots/attribut i komponenten eller lägg en egen logga i headern och dölj standardsymbolen via dokumenterade CSS‑variabler i stället för att manipulera shadow‑DOM.
- Typning: Ersätt any i event‑handlers (onAfOnSubmitSearch, onAfSubmitFilter) med korrekta CustomEvent‑typer eller egna typer med detail‑shape. Det förbättrar DX och minskar buggrisk.
- SEO/metadata: Rätta og:url (har "https://https://...") och fixa og/canonical‑URL. JSON‑LD innehåller en avslutande komma efter author‑arrayn vilket gör den ogiltig.
- UX: Visa feedback när ett jobb sparas/avmarkeras, och överväg att disable/markera "Spara"‑knappen när jobbet redan är sparat.
- Nice‑to‑have för högre betyg: Lägg till grafisk presentation (t.ex. fördelning per län/yrkesgrupp med Recharts/Chart.js) och autocomplete via /complete‑endpoint (debounce + visning av förslag).

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| Moa Magnfors | 64 | 51.2% | 0.33 | 0.4 |
| Anna Biehl | 48 | 38.4% | 0.33 | 0.35 |
| Sokol Hatija | 13 | 10.4% | 0.33 | 0.24 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
