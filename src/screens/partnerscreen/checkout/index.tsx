import React, { ReactElement } from "react";
import { StyledCheckoutSection } from "./styles";
import form from "../../../assets/partner/form.svg";
import order from "../../../assets/partner/order.svg";
import bag from "../../../assets/partner/bag.svg";
import HeadingComponent from '../../../components/heading/index';
import { color } from "../../../constants/colorscheme/ColorScheme";
interface Props {}

function CheckoutSection({}: Props): ReactElement {
  return (
    <StyledCheckoutSection>
      <div className="checkout-section">
        <div className="row-1">
          <span className="heading">Why online sellers</span>
          <span className="heading highlight"> love </span>
          <span className="heading">Arrow Checkout.</span>
        </div>
        <div className="row-2">
          <div className="partner-item-container">
            <img src={form} alt="Fill form" />
            <div className="svg-heading">No more forms to fill</div>
            <div className="description">
              <span className="bold-desc">
                Check out and pay with one click
              </span>{" "}
              in any Arrow-enabled store online.
            </div>
          </div>
          <div className="partner-item-container">
            <img src={order} alt="Place order" />
            <div className="svg-heading">Track all your orders</div>
            <div className="description">
              Arrow helps
              <span className="bold-desc">
                {" "}keep tabs on all your purchases{" "}
              </span>{" "}
              in one convenient place.
            </div>
          </div>
          <div className="partner-item-container">
            <img src={bag} alt="Checkout" />
            <div className="svg-heading">Check out safely</div>
            <div className="description">
              <span className="bold-desc">Your data is stored and encrypted – </span>only for your
              shopping purposes.
            </div>
          </div>
        </div>
      </div>
    </StyledCheckoutSection>
  );
}

export default CheckoutSection;
