import styled, { css } from "styled-components";
import { color } from "../../../constants/colorscheme/ColorScheme";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledShop = styled.div`
  height: 100vh;
  padding: 10vw 10vw;
  position: relative;
  .shop-container {
    background: #ffffff;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.3);
    border-radius: 70px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .column-one {
      width: 45%;
      padding: 0vw 5vw;
      .heading {
        font-style: normal;
        font-weight: 700;
        font-size: 2.1875em;
        line-height: 2.5em;
      }
      .highlight {
        color: ${color.light.ruby};
      }
    }
    .column-two {
      width: 50%;
      padding: 0vw 2vw;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      .navigation-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    @media ${device.laptop} {
      .column-one,
      .column-two {
        width: 100%;
        .navigation-container {
          height: 50%;
          justify-content: space-around;
          flex-direction: column;
        }
      }
      flex-direction: column;
    }
    @media ${device.mobileL} {
      text-align: center;
      box-shadow: none;
    }
  }
`;
