import { RouterProvider } from "react-router";
import { router } from "./Router";
import { JobProvider } from "./context/JobContext";

export function App() {
  return (
    <>
      <JobProvider>
        <RouterProvider router={router}></RouterProvider>
      </JobProvider>
    </>
  );
}
export default App;
