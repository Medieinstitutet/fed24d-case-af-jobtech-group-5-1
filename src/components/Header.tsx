import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
  DigiHeaderNotification,
  DigiHeaderAvatar,
  DigiIconBellFilled,
} from "@digi/arbetsformedlingen-react";
import compass from "../assets/compass.png";
import "../index.css";

export const Header = () => {
  return (
  <DigiHeader className="header"
    afSystemName=""
    afHideSystemName={true}
    afMenuButtonText="Meny"
  >
      <a slot="header-logo" href="/" className="brand-logo" aria-label="Startsida">
        <img src={compass} alt="Karriärkompassen" className="brand-img" />
        <span className="brand-name">Karriärkompassen</span>
      </a>

      <div slot="header-content">
        <DigiHeaderNotification afNotificationAmount={2}>
          <a href="/">
            <DigiIconBellFilled />
            Notiser
          </a>
        </DigiHeaderNotification>
      </div>

      <div slot="header-navigation">
        <DigiHeaderNavigation
          afCloseButtonText="Stäng"
          afCloseButtonAriaLabel="Stäng meny"
          afNavAriaLabel="Huvudmeny"
        >
          <DigiHeaderNavigationItem afCurrentPage={true}>
            <a href="/">Mina bokningar</a>
          </DigiHeaderNavigationItem>
          <DigiHeaderNavigationItem>
            <a href="/">Grupper</a>
          </DigiHeaderNavigationItem>
          <DigiHeaderNavigationItem>
            <a href="/">Kontakt</a>
          </DigiHeaderNavigationItem>
        </DigiHeaderNavigation>
      </div>
    </DigiHeader>
  );
};

export default Header;
