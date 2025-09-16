import { Outlet } from "react-router";
import { Footer } from "./FooterComponent";
import Header from "./Header";
import "../styles/Layout.scss";

export const Layout = () => {

    return (
        <div className="page">
            <header>
                <Header />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}