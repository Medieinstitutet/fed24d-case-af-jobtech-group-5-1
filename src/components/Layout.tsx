import { Outlet } from "react-router";
import { Footer } from "./FooterComponent";
import { Header } from "./Header";

export const Layout = () => {

    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}