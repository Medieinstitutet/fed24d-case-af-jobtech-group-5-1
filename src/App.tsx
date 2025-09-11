import { RouterProvider } from 'react-router';
import { router } from './Router';

export function App() {
  return (


    <>
        <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
