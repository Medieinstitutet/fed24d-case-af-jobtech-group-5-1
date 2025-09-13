import { Outlet } from "react-router";
import Header from "./Header";

export const Layout = () => {

    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <Outlet />
            </main>

            <footer></footer>
        </>
    );
}