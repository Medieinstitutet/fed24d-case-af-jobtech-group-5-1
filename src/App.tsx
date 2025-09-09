import { DigiButton } from '@digi/arbetsformedlingen-react';
import { ButtonVariation } from '@digi/arbetsformedlingen'; // observera att import av enums sker via @digi/arbetsformedlingen

export function App() {
  return (
    <DigiButton className="my-class" afVariation={ButtonVariation.PRIMARY} onAfOnClick={() => console.log('Hallå världen!')}>
      Skicka
    </DigiButton>
  );
}
export default App;
