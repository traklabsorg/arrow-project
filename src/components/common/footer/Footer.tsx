import React, { ReactElement } from "react";
import { color } from "../../../constants/colorscheme/ColorScheme";
import { StyledFooter } from "./styles";
import arrowFooter from "../../../assets/logo/arrowfooter.svg";
import facebookLogo from "../../../assets/logo/facebook.svg";
import instagramLogo from "../../../assets/logo/instagram.svg";
import linkedInLogo from "../../../assets/logo/linkedin.svg";
import CustomLink from "../../link/CustomLink";
interface Props {}

function Footer({}: Props): ReactElement {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div>
            <img alt="Arrow" src={arrowFooter}></img>
          </div>
          <div className="footer-link-container">
            <div>
              <CustomLink
                hoverColor={color.light.ruby}
                text={"About"}
                color={color.light.white}
              />
              <CustomLink
                hoverColor={color.light.ruby}
                text={"Contact us"}
                color={color.light.white}
              />
            </div>
            <div>
              <CustomLink
                hoverColor={color.light.ruby}
                text={"Careers"}
                color={color.light.white}
              />
              <CustomLink
                hoverColor={color.light.ruby}
                text={"Partner with us"}
                color={color.light.white}
              />
            </div>
            <div>
              <CustomLink
                hoverColor={color.light.ruby}
                text={"FAQ"}
                color={color.light.white}
              />
              <CustomLink
                hoverColor={color.light.ruby}
                text={"Terms"}
                color={color.light.white}
              />
            </div>
          </div>
        </div>
        <div className="social-links">
          <div>
            <img src={facebookLogo} alt="Facebook" />
          </div>
          <div>
            <img src={instagramLogo} alt="Instagram" />
          </div>
          <div>
            <img src={linkedInLogo} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
