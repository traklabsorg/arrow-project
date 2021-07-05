import React, { ReactElement } from "react";
import { StyledOnline } from "./styles";
import deviceImage from "../../../assets/device/device.png";
import HeadingComponent from "../../../components/heading";
import { color } from "../../../constants/colorscheme/ColorScheme";
import Button from "../../../components/button";
interface Props {}

export default function OnlineSection({}: Props): ReactElement {
  return (
    <StyledOnline>
      <div className="online-container">
        <div className="column-one">
          <span className="heading">I want to be a </span>
          <span className="heading highlight"> Partner / Affiliate </span>
          <span className="heading"> with Arrow!</span>
          <div className="descr">
            Send us your details and our team will reach out to you as soon as
            we can!
          </div>
        </div>
        <div className="column-two">
          <div className="navigation-container">
            <Button text={"Sing me up!"} color={color.light.black} />
          </div>
        </div>
      </div>
    </StyledOnline>
  );
}
