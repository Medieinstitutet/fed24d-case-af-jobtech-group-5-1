export type Article = { 
    slug: string, 
    title: string, 
    teaser: string, 
    bodyHtml: string; };

export const articles: Article[] = [
    {
      slug: "5-cv-tips",
      title: "5 cv-tips för att säkra drömjobbet",
      teaser: "Fem konkreta justeringar som gör ditt CV tydligare, snyggare och mer träffsäkert – på under en timme.",
      bodyHtml:
        `<ol>
        <li><strong>Skräddarsy rubriker och sammanfattning</strong><p>Byt “Arbetslivserfarenhet” mot “Erfarenhet som [din roll]” och skriv en 3–4 raders profil som matchar annonsens krav.</p></li>
        <li><strong>Visa resultat – inte bara uppgifter</strong><p>Skriv uppgift → insats → effekt: “Införde ny rutin som minskade svarstid med 35%”.</p></li>
        <li><strong>Gör det skannbart</strong><p>Använd 3–5 punkter per jobb, konsekventa datum (MM–ÅÅ) och max 2 typsnitt.</p></li>
        <li><strong>Lyft rätt kompetenser</strong><p>Ha en tydlig färdighetssektion. Gruppera (Tekniskt / Kommunikation / Ledarskap).</p></li>
        <li><strong>Trimma längden</strong><p>&lt;5 års erfarenhet = 1 sida, annars 2. Lista äldre roller kort.</p></li>
      </ol>
      <p><em>Bonus:</em> Döp filen proffsigt: <code>Förnamn_Efternamn_CV.pdf</code>.</p>`
    },
    {
      slug: "omvandla-svagheter-till-styrkor",
      title: "Omvandla dina svagheter till styrkor",
      teaser: "Lär dig ramverket som gör en “svaghet” till ett plus i intervjun – med färdiga svarsexempel.",
      bodyHtml:
        `<p><strong>Ramverket (4 steg):</strong> Identifiera → Reframa → Visa åtgärder → Ge bevis.</p>
        <ul>
            <li><strong>Tidsplanering:</strong> “Jag överskattade tiden. Nu tidsblockar jag och utvärderar varje vecka — levererar före deadline.”</li>
            <li><strong>Prestationsnervositet:</strong> “Tog kurs, repade med kollegor, använder visuellt stöd. Publikbetyg: 3,6 → 4,5/5.”</li>
            <li><strong>Detaljfokus:</strong> “Sätter ‘good-enough’-check och ber om tidig feedback. Ledtid −20%.”</li>
        </ul>
        <p><strong>Så här säger du i intervjun:</strong></p>
        <p>“En utvecklingspunkt för mig har varit X. För att hantera det gör jag Y och mäter Z. Det har lett till [konkret effekt].”</p>`
    },
    {
        slug: "lyckas-på-intervju",
        title: "Omvandla dina svagheter till styrkor",
        teaser: "Lär dig ramverket som gör en “svaghet” till ett plus i intervjun – med färdiga svarsexempel.",
        bodyHtml:
            `<ol>
                <li><strong>Läs annonsen som en checklista</strong> – skriv ned topp 5 kraven och matcha dem med egna exempel.</li>
                <li><strong>Öva STAR-svar</strong> (Situation, Task, Action, Result) – 3–4 korta stories du kan återanvända.</li>
                <li><strong>Elevator pitch</strong> (20–30 sek) – vem du är, vad du gjort, varför den här rollen.</li>
                <li><strong>Frågor att ställa</strong>
                <ul>
                    <li>Vad definierar “lyckas efter 6 månader”?</li>
                    <li>Teamets största utmaning just nu?</li>
                    <li>Hur ser onboarding ut?</li>
                </ul>
                </li>
                <li><strong>Efteråt</strong> – skicka tackmail med 2–3 punkter du tar med dig och hur du kan bidra.</li>
            </ol>`
    },
    {
        slug: "löneförhandling",
        title: "Omvandla dina svagheter till styrkor",
        teaser: "Lär dig ramverket som gör en “svaghet” till ett plus i intervjun – med färdiga svarsexempel.",
        bodyHtml:
            `<ul>
                <li><strong>Research:</strong> Marknadslön via statistik/rapporter/nätverk. Sätt målsiffra, accept-spann och walk-away.</li>
                <li><strong>Värdeankare:</strong> Knyt till resultat: “Sänkte kostnader 12%/år – därför ligger jag på X–Y.”</li>
                <li><strong>Timing:</strong> Förhandla när ni är överens om <em>rollen</em>.</li>
                <li><strong>Helhet:</strong> Fråga om pension, semester, bonus, utbildning, utrustning, distans.</li>
                <li><strong>Formulering:</strong> “Utifrån ansvar och min dokumenterade effekt ligger min förväntan på X–Y. Hur ser ert spann ut?”</li>
            </ul>`
    }
  ];