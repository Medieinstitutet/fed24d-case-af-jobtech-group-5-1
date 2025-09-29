# 📌 Rättningsrapport – fed24d-case-af-jobtech-group-5-1

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6VsM7MHT)
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://jobtechdev.se/sv/components/jobsearch)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/education/education-api/-/blob/main/GETTING_STARTED.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): Search job ads (jobtechdev.se) 

## Uppgift 

Använd endpoint https://jobsearch.api.jobtechdev.se/ för att använda/söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: Historical job ads (jobtechdev.se)

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

## 🔍 ESLint-varningar:


## 🏆 **Betyg: G**
📌 **Motivering:** Uppfyller G-kraven: data hämtas strukturerat via fetch i en egen tjänst/hook (useJobs), global state hanteras med Context + reducer, routing är implementerad (hash-router för GitHub Pages), och designsystemet används konsekvent med egen färgpalett och utbytt logotyp. Kodbasen är överlag prydlig, typed med TypeScript och har bra komponentstruktur.

💡 **Förbättringsförslag:**  
- Deep-linking: SingleJobPage bygger på selectedJob i Context. Vid uppdatering eller direktlänk till /result/:id saknas data. Lägg till fetch av enskild annons via id (egen hook/useJobById) och fallbacka på den när selectedJob är null.
- Laddning/empty state: ResultsComponent visar spinner när jobs.length === 0, även om sökningen gav 0 träffar. Inför isLoading/isError i useJobs och visa tydligt “Inga annonser matchade din sökning” när färdigladdat men 0 resultat.
- Återställ pagination: Nollställ currentPage till 1 när query/region/occupation ändras (useEffect) så att man inte hamnar på en tom sida efter filterbyte.
- Fel- och avbrottshantering: Kontrollera res.ok före res.json(), fånga och exponera felmeddelanden, och använd AbortController för att avbryta pågående fetch vid snabba filterändringar.
- Typsäkerhet för events: Ersätt any i onAfOnSubmitSearch/onAfSubmitFilter/onAfOnPageChange med korrekta typer för CustomEvent och definiera e.detail-typerna (t.ex. egen interface) så kompilatorn hjälper till.
- Duplicerad util: formatDateTime verkar finnas i två varianter. Konsolidera till en funktion och använd samma format överallt.
- Säkerhet/HTML: job.description.text_formatted renderas med dangerouslySetInnerHTML. Överväg att sanera HTML (t.ex. DOMPurify) innan render.
- Header-logga: MutationObserver-hacket för att byta logga fungerar men är skört. Om komponenten stödjer slot/prop för logga, använd det i stället för DOM-manipulation.
- Meta/SEO: og:url har "https://https://" (dubbelt https). JSON-LD har en trailing comma vilket gör den ogiltig. Rätta båda.
- Datakällor för filter: Region- och yrkeskoder är hårdkodade. Bonus: hämta taxonomi dynamiskt från Jobtechs API så hålls listorna uppdaterade.
- Tillgänglighet: Lägg till aria-label på Spara/Ta bort-knapparna i ResultCard och säkerställ fokusmarkeringar. Visa antal träffar även textuellt för skärmläsare.
- UI: Visa ansökningsknapp även när endast application_details.url finns (ni normaliserar redan, villkoret i sidan kan förenklas till att bygga och använda applyHref).

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
