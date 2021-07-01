import styled, { css } from "styled-components";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledHeader = styled.div`
  padding: 0vh 10vw;
  .header-container {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    font-style: normal;
    font-weight: bold;
    .sub-menu-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .un-hide {
        display: none;
      }
      @media ${device.laptop} {
        width: 100px;
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
      font-size: 15px;
    }
    @media ${device.mobileL} {
      font-size: 10px;
    }
  }
`;
