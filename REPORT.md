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
📌 **Motivering:** Ni uppfyller samtliga G-krav: data hämtas strukturerat via fetch i en tydlig tjänst (custom hook useJobs), global state hanteras med Context + reducer, routing är korrekt konfigurerad (hash router), namngivning/struktur är genomgående bra och designsystemet används konsekvent (Digi-komponenter) med egen färgpalett och utbytt logotyp. Helheten är välbyggd och användbar.

💡 **Förbättringsförslag:**  
- Detaljsida för annons: sidan är beroende av state.selectedJob. Vid sidladdning/direktlänk blir annonsen tom. Hämta annons via route-param id i SingleJobPage som fallback.
- Sök/Autocomplete: använd /complete-endpointen för sökförslag och lägg till debounce i fritextsökningen.
- Grafisk presentation: lägg till stapel-/linjediagram (t.ex. annonser per län eller över tid via Historical API) för att få bonuspoäng.
- Fel- och tomtillstånd: visa tydliga felmeddelanden vid nätverksfel, och skeleton/empty-state när inga träffar finns.
- Pagination: ni sätter afInitActivePage till 1 men komponenten styrs inte av currentPage. Säkerställ att aktiv sida synkas (t.ex. key:a komponenten på filter/state eller använd kontrollerat läge om tillgängligt). Återställ currentPage till 1 när filter/sök ändras.
- Tillgänglighet: lägg aria-pressed på spara-knappen för att indikera togglat tillstånd och komplettera ikonknapp med screenreader-text. Se över tabb-ordning och länkar som ser ut som knappar.
- Länkar i footer: byt href="#" till riktiga länkar eller knappar för bättre a11y och UX.
- Säkerhet/HTML: description.text_formatted renderas via dangerouslySetInnerHTML. Överväg att sanera HTML (ex. DOMPurify) innan render.
- Meta/SEO: og:url har dubbla https och JSON-LD innehåller en avslutande komma som gör den ogiltig. Rätta dessa och överväg att lägga till SearchAction.
- Kodstädning: det verkar finnas två versioner av formatDateTime i koden. Samla till en och gör "igår"-logiken robust över månadsgränser.
- Event-typer: undvik any i onAfOnSubmitSearch/onAfSubmitFilter. Typa Digi-event korrekt (CustomEvent<T>) för bättre TS-stöd.
- Nätverk: använd AbortController för att avbryta pågående fetch vid snabba filterändringar och överväg enkel caching för sidpaginering.

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
