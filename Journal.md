# Gruppkontrakt- lista på överenskommelser

I denna fil skriver ni, efter överenskommelse och diskussion:

## När ni träffas gemensamt & hur ni gör det - kamera på/avTeams/Discord eller bara chatt? Det är OK att vara kreativ. Man måste inte följa alla konventioner, men sätt regler för gruppen och var öppen med hur du känner och vill jobba! Då är allas förväntningar på samma nivå. Förmodligen finns det någon annan som känner precis likadant, men det är ju svårt att veta om ingen säger någonting.

- Vi kommer att hålla dagliga möten och hålla kontakt via Teams. Gärna kameror på.

- Under dessa möten önskar vi också att titta på koden tillsammans och göra pull-request för att merga. Om det inte passar så ska man vara minst två personer göra pull-request tillsammans.

## Hur ni meddelar förhinder. Hur ni hanterar förhinder, sjukdom, om deltagande och inspirationen tryter.

- Om någon får förhinder ska vi helst höra av oss om det senast dagen innan eller vid akuta fall får man bara avbryta mötet. Vi jobbar vidare ändå de som kan delta och de bestämmelser som görs redovisas i teams, så att alla lätt kan följa med i planeringen.

## Vilket språkbruk ni har (se nedan).

- En vänlig ton, common sense, inte för strikt utan en mer avslappnad stämning. Ta paus om det blir för mycket, tänk på att lägga in raster för att hålla humöret uppe.

## Vad är ambitionsnivån.

- Hög alla i gruppen vill lyckas och har en hög inställning till uppgiften. Det ska bli jättekul men samtidigt en utmaning.


## Hur ni skriver commit-meddelanden och hur ofta ni gör commits.

- Vi skriver på engelska och använder co-authoring commits, conventional commits som beskriver vad vi har gjort. Commita ofta om vi har kodat.
  Vi har en mall för hur man skriver commits och bransches som vi vill ska efterföljas.

## Hur, när och vem gör code reviews/merges - när får man merge:a in i branschen? (föreslår att ni inte väljer "när du är klar", utan ni bör testa/kontrollera att det även fungerar på någon annans dator).

- Vi ska ha en “develop” branch och jobba i enskilda brancher. Vi ska göra merge tillsammans/minst 2 stycken.

## Vad är respektfull kommunikation för dig?

- Först fråga och efter ta beslut om du kan ändra andras del av kod. Lyssna på andras åsikter och ta inte något personligt.

## Hur vill du bli bemött? Hur vill du bemöta andra?

Artigt, öppensinnat och inte dömande.

## Underskrivet av

@mainforce
@Biehlen
@koliwewe


# Mall för commits

## Commits

Types:
API relevant changes
feat Commits, that adds or remove a new feature
fix Commits, that fixes a bug
refactor Commits, that rewrite/restructure your code, however does not change any API behaviour
perf Commits, are special refactor commits, that improve performance
style Commits, that do not affect the meaning white-space, formatting, missing semi-colons, etc
test Commits, that add missing tests or correcting existing tests
docs Commits, that affect documentation only
build Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
ops Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
chore Miscellaneous commits e.g. modifying .gitignore

following with
-issue (what issue it's regarding).

- Exemple commit: ":emoji: feat(Cookiebar) :add the amazing button"

if issue is complete add this to the end:
#123 <-(Number of issue that's resolved)

