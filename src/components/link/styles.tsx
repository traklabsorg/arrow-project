import styled, { css } from "styled-components";
import { color } from "../../constants/colorscheme/ColorScheme";
import { device } from "../../constants/screensize/ScreenSize";

type StyledLinkType = {
  color?: string;
  hoverColor?: string;
};

export const StyledLink = styled.div<StyledLinkType>`
  cursor: pointer;
  text-align: center;

  color: ${(props) => props.color};
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : color.light.black};
  }
  @media ${device.laptop} {
    font-size: 0.9375em;
  }
  @media ${device.mobileL} {
    font-size: 0.625em;
  }
`;
