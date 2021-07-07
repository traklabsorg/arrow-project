import styled, { css } from "styled-components";
import { color } from "../../../constants/colorscheme/ColorScheme";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledHeader = styled.div`
  padding: 0vh 10vw;
  .header-container {
    font-size: 1.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    font-style: normal;
    font-weight: bold;
    .hover-highlight {
      padding: 0 1.25em;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      &:hover {
        background: ${color.light.ruby};
      }
    }
    .sub-menu-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .un-hide {
        display: none;
      }
      @media ${device.laptop} {
        font-size: 1.2em;
        .un-hide {
          display: block;
        }
      }
    }
    @media ${device.laptop} {
      .hide {
        display: none;
      }
      .un-hide {
        display: block;
      }
      justify-content: space-between;
      font-size: 1em;
    }
    @media ${device.mobileL} {
      font-size: 1.2em;
    }
  }
`;
