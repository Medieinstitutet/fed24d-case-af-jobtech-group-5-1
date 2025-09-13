import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
} from "@digi/arbetsformedlingen-react";
import compass from "../assets/compass.png";
import "../index.css"; // Styling globalt

export const Header = () => {
  return (
    <DigiHeader
      className="header"
      afSystemName="Karriärkompassen"
      afHideSystemName={false}
      afMenuButtonText="Meny"
    >
      {/* Logotyp + namn till vänster */}
      <a slot="header-logo" aria-label="Startsida" href="/" className="brand">
        <img src={compass} alt="Karriärkompassen" className="brand__img" />
        <span className="brand__name"></span>
      </a>

      {/* Navigation / hamburgermeny */}
      <div slot="header-navigation">
        <DigiHeaderNavigation
          afCloseButtonText="Stäng"
          afCloseButtonAriaLabel="Stäng meny"
          afNavAriaLabel="Huvudmeny"
        >
          <DigiHeaderNavigationItem afCurrentPage={true}>
            <a href="/">Hem</a>
          </DigiHeaderNavigationItem>
          <DigiHeaderNavigationItem>
            <a href="/search">Sök jobb</a>
          </DigiHeaderNavigationItem>
          <DigiHeaderNavigationItem>
            <a href="/contact">Kontakt</a>
          </DigiHeaderNavigationItem>
        </DigiHeaderNavigation>
      </div>
    </DigiHeader>
  );
};

export default Header;
