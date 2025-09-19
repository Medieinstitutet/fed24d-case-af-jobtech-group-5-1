import { DigiLayoutBlock, DigiTypography, DigiLinkInternal } from "@digi/arbetsformedlingen-react";
import { LayoutBlockVariation, LinkVariation } from "@digi/arbetsformedlingen";
import "../styles/NotFoundPage.scss";
import compass from "../assets/compass.png";

export default function NotFoundPage() {
  return (
    <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} className="not-found">
        <DigiTypography>
            <div className="notFound-card">
                <div className="notFound-text">
                    <h1>Hoppsan hoppsan – sidan finns inte</h1>
                    <p>Antingen har länken ändrats eller så skrev du fel adress.</p>
                    <div className="notFound-actions">
                        <DigiLinkInternal afHref="#/" afVariation={LinkVariation.LARGE} className="notFound-btn">
                            Till startsidan
                        </DigiLinkInternal>
                    </div>
                </div>

                <img className="notFound-logo" src={compass} alt="Karriärkompassen" />
            </div>
        </DigiTypography>
    </DigiLayoutBlock>
  );
}
