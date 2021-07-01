import React, { ReactElement } from "react";
import { StyledDeviceSection } from "./styles";
import deviceImage from "../../../assets/device/device.png";
import HeadingComponent from "../../../components/heading";
import { color } from "../../../constants/colorscheme/ColorScheme";
interface Props {}

export default function DeviceSection({}: Props): ReactElement {
  return (
    <StyledDeviceSection>
      <div className="arrow-down"></div>
      <div className="device-container">
        <div className="brand">
          <HeadingComponent
            heading={"How quick?"}
            title={"This quick. Blinked and missed it?"}
            subTitle={"Click again to see just how fast Arrow works."}
            color={color.light.white}
          />
        </div>
        <div className="device">
          <img src={deviceImage} alt="Device" />
          <img src={deviceImage} alt="Device" />
        </div>
      </div>
    </StyledDeviceSection>
  );
}
