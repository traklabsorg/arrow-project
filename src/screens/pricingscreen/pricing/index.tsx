import React, { ReactElement } from "react";
import Button from "../../../components/button";
import { color } from "../../../constants/colorscheme/ColorScheme";
import { pricing } from "../../../constants/pricing/pricing";
import PriceCard from "./priceCard";
import { StyledPriceSection } from "./styles";
interface Props {}

export default function PricingSection({}: Props): ReactElement {
  return (
    <StyledPriceSection>
      <div className="pricing-container">
        <div className="column-1">
          <div className="price-heading">
            Pricing for <span className="heading highlight">Sellers</span>
          </div>
          <div className="price-desc">
            Arrow Checkout and Login are completely free to use for buyers. If
            you’re a seller using Arrow Checkout, we simply charge a small
            transaction fee for the payments processed through Arrow Checkout.
          </div>
        </div>
        <div className="column-2">
          <div className="price-row-card">
            {pricing &&
              pricing.map((item, i) => {
                if (i < 4) {
                  return (
                    <>
                      <PriceCard
                        type={item.type}
                        price={item.price}
                        range={item.range}
                        btn={item.btn}
                      />
                    </>
                  );
                }
              })}
          </div>
          <div className="enterprise-container">
            <div className="enterprise-card-wrapper">
              <div className="enterprise-type">Enterprise</div>
              <div className="enterprise">
                Custom <span className="pricing-text">Pricing</span>
              </div>
              <div>
                <span className="text-1">More than</span>{" "}
                <span className="range">7500</span>
                <span className="text-1 transact-text"> transactions</span>
              </div>
              <div className="btn-container">
                <Button color={color.light.ruby} text="Contact us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledPriceSection>
  );
}
