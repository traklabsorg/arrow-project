import React, { ReactElement } from "react";
import DeviceSection from "./Device";
import ShopSection from "./shop";
import { StyledHomeScreen } from "./styles";
import WelcomeSection from "./Welcome/WelcomeSection";

interface Props {}

export default function HomeScreen({}: Props): ReactElement {
  return (
    <StyledHomeScreen>
      <WelcomeSection />
      <DeviceSection />
      <ShopSection />
    </StyledHomeScreen>
  );
}
