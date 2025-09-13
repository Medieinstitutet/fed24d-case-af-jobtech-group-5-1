import { FooterCardVariation, FooterVariation } from "@digi/arbetsformedlingen"
import { DigiFooter, DigiFooterCard, DigiIconAccessibilityUniversal, DigiIconEnvelope, DigiIconGlobe, DigiIconSign } from "@digi/arbetsformedlingen-react"
import compass from "../assets/compass.png";

export const Footer = () => {

    return (
        <>
            <DigiFooter afVariation={FooterVariation.SMALL} className="footer">
                <div slot="content-top">
                    <div>
                    <DigiFooterCard afType={FooterCardVariation.ICON}>
                        <ul>
                        <li>
                            <a href="#">
                            <DigiIconAccessibilityUniversal></DigiIconAccessibilityUniversal>
                            Tillgänglighetsredogörelse
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <DigiIconSign></DigiIconSign>
                            Teckenspråk
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <DigiIconGlobe></DigiIconGlobe>
                            Other languages
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <DigiIconEnvelope></DigiIconEnvelope>
                            Mejla vår funktionbrevlåda
                            </a>
                        </li>
                        </ul>
                    </DigiFooterCard>
                    </div>
                <div>
                    <DigiFooterCard afType={FooterCardVariation.BORDER}>
                        <a href="#">Om tjänsten</a>
                        <p>Systemversion: Sep 2025 <br/> Ansvarig: Grupp 5</p>
                    </DigiFooterCard>
                    </div>
                    <div>
                    <DigiFooterCard afType={FooterCardVariation.BORDER}>
                        <a href="#">Kontakt</a>
                        <p>Telefon: 0770-00 0000 <br/> Öppettider: Vardagar 08:00-16:30</p>
                    </DigiFooterCard>
                    </div>
                </div>
                <div slot="content-bottom-left">
                    <div slot="content-bottom-left" className="brand">
                    <img src={compass} alt="Karriärkompassen" className="brand__img" />
                    <span className="brand__name">Karriärkompassen</span>
                    </div>

                    </div>
                    <div slot="content-bottom-right">
                        <p>Följ oss på</p>
                        <a href="#">Facebook</a>
                        <a href="#">Youtube</a>
                        <a href="#">Linkedin</a>
                        <a href="#">Instagram</a>
                    </div>
                </DigiFooter>
        </>
    )
}