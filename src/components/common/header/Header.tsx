import React, { ReactElement } from "react";
import { StyledHeader } from "./styles";
import arrowLogo from "../../../assets/logo/arrow.svg";
import subMenuLogo from "../../../assets/logo/submenu.svg";
import { color } from "../../../constants/colorscheme/ColorScheme";
import CustomLink from "../../link/CustomLink";

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <StyledHeader>
      <div className="header-container">
        <img alt="Arrow" src={arrowLogo}></img>
        <CustomLink
          className="hide"
          text={"Shop with Arrow"}
          color={color.light.grey}
        />
        <CustomLink
          className="hide"
          text={"Sell with Arrow"}
          color={color.light.grey}
        />
        <div className="sub-menu-container">
          <CustomLink text={"Log in"} color={color.light.ruby} />
          <img className="un-hide" alt="Arrow" src={subMenuLogo}></img>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
