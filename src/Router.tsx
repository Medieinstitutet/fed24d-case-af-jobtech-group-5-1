import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ResultsPage } from "./pages/ResultsPage";
import { SingleJobPage } from "./pages/SingleJobPage";
import { ArticlePage } from "./pages/ArticlePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
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
        ],
    },
]);