import React, { ReactElement } from "react";
import HeadingComponent from "../../../components/heading";
import { color } from "../../../constants/colorscheme/ColorScheme";
import { StyledPartnerSection } from "./styles";
import partnerDesk from "../../../assets/partner/partnerdesk.png";
import partnerLap from "../../../assets/partner/partnerlap.png";
import partnerMob from "../../../assets/partner/partnermob.png";
import Button from "../../../components/button";

interface Props {}

export default function PartnerSection({}: Props): ReactElement {
  return (
    <StyledPartnerSection>
      <div className="column-one">
        <div className="heading">
          <HeadingComponent
            heading={"Why partner with Arrow?"}
            title={
              "No more passwords. No more getting your wallet to look at your cards. No more filling out forms. Shop and pay from wherever you are – in one single tap."
            }
            color={color.light.black}
          />
        </div>
        <div className="navigation-container">
          <Button text={"Show me more"} color={color.light.ruby} />
        </div>
      </div>
      <div className="column-two">
        <img className="partnerDesk" src={partnerDesk} alt="Desktop" />
        <img className="partnerLap" src={partnerLap} alt="Laptop" />
        <img className="partnerMob" src={partnerMob} alt="Mobile" />
      </div>
    </StyledPartnerSection>
  );
}
