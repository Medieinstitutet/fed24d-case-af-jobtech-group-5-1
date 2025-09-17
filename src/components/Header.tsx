import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
} from "@digi/arbetsformedlingen-react";
import compass from "../assets/compass.png";
import "../index.css";

import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";

function SwapAfLogo() {
  useEffect(() => {
    const host = document.querySelector('digi-header.header');
    if (!host) return;

    const swap = () => {
      host.querySelectorAll('digi-logo .digi-logo__img').forEach((el) => {
        const box = el as HTMLElement;
        if (box.querySelector('.brand-img')) return; 
        box.innerHTML = '';                         
        const img = document.createElement('img');  
        img.src = compass;
        img.alt = 'Karriärkompassens logga som föreställer en kompass';
        img.className = 'brand-img';
        img.style.height = '44px';
        img.style.width = 'auto';
        box.appendChild(img);
      });
    };

    requestAnimationFrame(() => requestAnimationFrame(swap));
    const mo = new MutationObserver(swap);
    mo.observe(host, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);
  return null;
}

export const Header = () => {

  const location = useLocation();

  const isHome = location.pathname === "/";
  const isResult  = location.pathname.startsWith("/result");

  return (
    <>
    <SwapAfLogo />

    <DigiHeader
      className="header"
      afSystemName="Karriärkompassen"
      afMenuButtonText="Meny"
    >
      <div slot="header-logo" aria-hidden="true" />

      <div slot="header-navigation">
        <DigiHeaderNavigation
          afCloseButtonText="Stäng"
          afCloseButtonAriaLabel="Stäng meny"
          afNavAriaLabel="Huvudmeny"
          className="nav"
        >
          <DigiHeaderNavigationItem afCurrentPage={isHome}>
            <NavLink to="/" end>Hem</NavLink>
          </DigiHeaderNavigationItem>
          <DigiHeaderNavigationItem afCurrentPage={isResult}>
            <NavLink to="/result">Sök jobb</NavLink>
          </DigiHeaderNavigationItem>
        </DigiHeaderNavigation>
      </div>
    </DigiHeader>
    </>
  );
};

export default Header;
