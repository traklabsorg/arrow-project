import React, { ReactElement } from "react";
import { StyledPriceCheckoutSection } from "./styles";
import { color } from "../../../constants/colorscheme/ColorScheme";
import Button from "../../../components/button";
interface Props {}

export default function PriceCheckoutSection({}: Props): ReactElement {
  return (
    <StyledPriceCheckoutSection>
      <div className="price-checkout-container">
        <div className="price-card-checkout-container">
          <div className="price-card-checkout-heading">Go with Arrow</div>
          <div className="price-card-checkout-desc">
            Unlock{" "}
            <span className="highlight-desc">easy checkouts for customers</span>{" "}
            – and more sales for you!{" "}
          </div>
          <div className="button-container">
            <Button color={color.light.ruby} text={"Sign up!"}></Button>
          </div>
        </div>
        <div className="price-card-checkout-container">
          <div className="price-card-checkout-heading">Spread the word</div>
          <div className="price-card-checkout-desc">
            Are you a web developer or marketing agency? Help
            <span className="highlight-desc">
               {" "}create faster, smoother checkouts for your clients
            </span>{" "}
            with Arrow.
          </div>
          <div className="button-container">
            <Button color={color.light.black} text={"Partner with us"}></Button>
          </div>
        </div>
        <div className="card-2"></div>
      </div>
    </StyledPriceCheckoutSection>
  );
}
