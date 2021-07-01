import React, { ReactElement } from "react";
import { StyledShop } from "./styles";
import deviceImage from "../../../assets/device/device.png";
import HeadingComponent from "../../../components/heading";
import { color } from "../../../constants/colorscheme/ColorScheme";
import Button from "../../../components/button";
interface Props {}

export default function ShopSection({}: Props): ReactElement {
  return (
    <StyledShop>
      <div className="shop-container">
        <div className="column-one">
          <span className="heading">Arrow makes shopping</span>
          <span className="heading highlight"> easy </span>
          <span className="heading"> – and easier for your store</span>
        </div>
        <div className="column-two">
          <div>
            <HeadingComponent
              color={color.light.black}
              title={
                "Frictionless payments for customers can unlock more sales for you."
              }
              subTitle={"Find out how Arrow can help your business!"}
            />
          </div>
          <div className="navigation-container">
            <Button text={"Sign me up!"} color={color.light.ruby} />
            <Button text={"I run an online store!"} color={color.light.black} />
          </div>
        </div>
      </div>
    </StyledShop>
  );
}
