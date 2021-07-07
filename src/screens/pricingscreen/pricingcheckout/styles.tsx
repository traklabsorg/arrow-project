import styled from "styled-components";
import { color } from "../../../constants/colorscheme/ColorScheme";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledPriceCheckoutSection = styled.div`
  padding: 5vh 10vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .price-checkout-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price-card-checkout-container {
      background: #ffffff;
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.3);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      width: 46%;
      height: 23vw;
      align-items: flex-start;
      justify-content: space-evenly;
      padding: 5vh;
      .price-card-checkout-heading {
        font-size: 1.9em;
        font-weight: 700;
        line-height: 44px;
        color: ${color.light.black};
      }
      .price-card-checkout-desc {
        font-size: 1.2em;
        color: ${color.light.black};
        .highlight-desc {
          color: ${color.light.ruby};
        }
      }
      .button-container {
        position: relative;
        top: 15%;
      }
      @media ${device.laptop} {
        box-shadow: none;
        border-radius: 0;
        .price-card-checkout-heading {
          font-size: 1.75em;
          text-align: left;
          line-height: 30px;
        }
        .price-card-checkout-desc {
          font-size: 1em;
        }
      }
      @media ${device.mobileL} {
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        height: 100%;
        flex-direction: column;
        .price-card-checkout-heading {
          font-size: 1.5em;
        }
        .price-card-checkout-desc {
          font-size: 1.1em;
        }
      }
    }
    @media ${device.laptop} {
      background: #ffffff;
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.3);
      border-radius: 20px;
      height: 55%;
      padding: 5vh 2vh;
      justify-content: center;
      align-items: center;
    }
    @media ${device.mobileL} {
      flex-direction: column;
      box-shadow: none;
      border-radius: 0px;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
`;
