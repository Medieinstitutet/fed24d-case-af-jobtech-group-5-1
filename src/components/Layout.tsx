import { Outlet } from "react-router";
import { Footer } from "./FooterComponent";

export const Layout = () => {

    return (
        <>
            <header></header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}