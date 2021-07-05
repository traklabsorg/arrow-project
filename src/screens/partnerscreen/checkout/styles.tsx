import styled from "styled-components";
import { color } from "../../../constants/colorscheme/ColorScheme";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledCheckoutSection = styled.div`
  height: 100%;
  padding: 10vw 10vw;
  .checkout-section {
    display: flex;
    flex-direction: column;
    .row-1 {
      text-align: center;
      .heading {
        font-style: normal;
        font-weight: 700;
        font-size: 2.5em;
        @media ${device.laptop} {
          font-size: 1.875em;
        }
        @media ${device.mobileL} {
          font-size: 1.25em;
        }
      }
      .highlight {
        color: ${color.light.ruby};
      }
    }
    .row-2 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10%;
      .partner-item-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          /* width: 18.75em;
          height: 12.5em; */
          width: 30%;
        }
        .svg-heading {
          font-weight: 800;
          font-size: 1.25em;
          line-height: 2.75em;
          text-align: center;
          color: #f0256f;
        }
        .description {
          font-weight: 500;
          font-size: 1.125em;
          text-align: center;
          color: #000000;
          padding: 2%;
          .bold-desc {
            font-weight: bold;
          }
        }
        @media ${device.laptop} {
          img {
            width: 20%;
          }
          .description {
            font-size: 1em;
            .bold-desc {
              font-size: 1em;
            }
          }
          .svg-heading {
            font-weight: 800;
            font-size: 1em;
            text-align: center;
            color: #f0256f;
          }
        }
        @media ${device.mobileL} {
          img {
            width: 20%;
          }
          .description {
            font-size: 0.625em;
            .bold-desc {
              font-size: 0.9em;
            }
          }
          .svg-heading {
            font-weight: 800;
            font-size: 1em;
            text-align: center;
            color: #f0256f;
          }
        }
      }
      @media ${device.laptop} {
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      @media ${device.mobileL} {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        img {
          width: 30%;
        }
      }
    }
  }
`;
