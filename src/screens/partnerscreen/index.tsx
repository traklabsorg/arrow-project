import React, { ReactElement } from "react";
import CheckoutSection from "./checkout";
import OnlineSection from "./online";
import PartnerSection from "./partner";
import { StyledPartnerScreen } from "./styles";

interface Props {}

export default function PartnerScreen({}: Props): ReactElement {
  return (
    <StyledPartnerScreen>
      <PartnerSection />
      <CheckoutSection />
      <OnlineSection />
    </StyledPartnerScreen>
  );
}
