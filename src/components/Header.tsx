import { DigiHeader, DigiHeaderNavigation, DigiHeaderNavigationItem, DigiHeaderNotification, DigiIconBellFilled, DigiHeaderAvatar } from "@digi/arbetsformedlingen-react";
import "../index.css";
import compass from "../assets/compass.png";

export const Header = () => {
    return (
        <>
            <DigiHeader className="header"

                afSystemName=""
                afHideSystemName={true}
                afMenuButtonText="Meny"
            >
                <div slot="header-logo" aria-label="" className="brand-logo">
                    <img src={compass} alt="Karriärkompassen" className="brand-img" />
                    <span className="brand-name">Karriärkompassen</span>
                </div>
                <div slot="header-content">
                    <DigiHeaderNotification afNotificationAmount={8}>
                        <a href="/">
                            <DigiIconBellFilled></DigiIconBellFilled>
                            Notiser
                        </a>
                    </DigiHeaderNotification>
                    <DigiHeaderAvatar
                        afSrc=""
                        afAlt=""
                        afName=""
                        afSignature="KALIA"
                        afIsLoggedIn={true}
                        afHideSignature={true}
                    ></DigiHeaderAvatar>
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
        </>
    );

};
export default Header;