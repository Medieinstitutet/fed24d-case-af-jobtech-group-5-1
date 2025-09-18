import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ResultsPage } from "./pages/ResultsPage";
import { SingleJobPage } from "./pages/SingleJobPage";
import { ArticlePage } from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import { SavedJobsPage } from "./pages/SavedJobsPage";

export const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "result",
                element: <ResultsPage />,
            },
            {
                path: "result/:id",
                element: <SingleJobPage />,
            },
            {
                path: "artiklar/:slug",
                element: <ArticlePage />,
            },
            { 
                path: "*", 
                element: <NotFoundPage /> 
            },
            {
                path: "sparade-jobb",
                element: <SavedJobsPage />,
            }
        ],
    },
]);