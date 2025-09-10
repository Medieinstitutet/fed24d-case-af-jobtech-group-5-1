import { DigiButton } from '@digi/arbetsformedlingen-react';
import { ButtonVariation } from '@digi/arbetsformedlingen'; // observera att import av enums sker via @digi/arbetsformedlingen
import { RouterProvider } from 'react-router';
import { router } from './Router';

export function App() {
  return (


    <>
        <RouterProvider router={router}></RouterProvider>

        <DigiButton className="my-class" afVariation={ButtonVariation.PRIMARY} onAfOnClick={() => console.log('Hallå världen!')}>
          Skicka
        </DigiButton>
    </>
  );
}
export default App;
