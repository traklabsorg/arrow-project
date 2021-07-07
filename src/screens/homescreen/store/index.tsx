import React, { ReactElement } from "react";
import HeadingComponent from "../../../components/heading";
import { color } from "../../../constants/colorscheme/ColorScheme";
import { StyledStoreSection } from "./styles";
import textFriend from "../../../assets/items/text.svg";
import drinkLogo from "../../../assets/items/drink.svg";
import catLogo from "../../../assets/items/cat.svg";
interface Props {}

export default function StoreSection({}: Props): ReactElement {
  return (
    <StyledStoreSection>
      <div className="column-one">
        <div className="heading">
          <HeadingComponent
            heading={"Shop better, shop faster"}
            title={
              "The average shopper takes up to 3 minutes on every checkout page. Arrow cuts this time by up to 99%, giving you time to:"
            }
            color={color.light.ruby}
            titleColor={color.light.black}
          />
        </div>
      </div>
      <div className="column-two">
        <div className="items">
          <img src={drinkLogo} alt="Drink" />
          <div className="item-text">Drink up</div>
        </div>
        <div className="items">
          <img src={textFriend} alt="Drink" />
          <div className="item-text">Text a friend</div>
        </div>
        <div className="items">
          <img src={catLogo} alt="Cat" />
          <div className="item-text">Pet a pet</div>
        </div>
      </div>
    </StyledStoreSection>
  );
}
