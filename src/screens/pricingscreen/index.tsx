import React, { ReactElement } from "react";
import PricingSection from "./pricing";
import PriceCheckoutSection from "./pricingcheckout";
import { StyledPrice } from "./styles";
interface Props {}

export default function PriceScreen({}: Props): ReactElement {
  return (
    <StyledPrice>
      <PricingSection />
      <PriceCheckoutSection />
    </StyledPrice>
  );
}
