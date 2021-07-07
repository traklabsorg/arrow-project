import styled from "styled-components";
import { color } from "../../../constants/colorscheme/ColorScheme";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledPriceSection = styled.div`
  padding: 5vh 10vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .pricing-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .column-1 {
      display: flex;
      flex-direction: column;
      width: 64%;
      align-items: center;
      .price-heading {
        font-weight: 800;
        font-size: 2.6vw;
        line-height: 2em;
        text-align: center;
        color: ${color.light.black};
        .highlight {
          color: ${color.light.ruby};
        }
      }
      .price-desc {
        font-weight: normal;
        font-size: 1.4vw;
        line-height: 1.5625em;
        text-align: center;
        color: ${color.light.gray};
      }
      @media ${device.laptop} {
        width: 100%;
        .price-desc {
          font-size: 1.6vw;
        }
      }
      @media ${device.mobileL} {
        .price-heading {
          font-size: 1.5em;
        }
        .price-desc {
          font-size: 1em;
        }
        width: 100%;
      }
    }
    .column-2 {
      .price-row-card {
        display: flex;
        width: 70vw;
        justify-content: space-between;
        align-items: center;
        margin: 2% 0;
        @media ${device.laptop} {
          flex-direction: column;
        }
      }
      .enterprise-container {
        background: #ffffff;
        box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);
        border-radius: 15px;
        height: 6.6vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .enterprise-card-wrapper {
          justify-content: space-around;
          align-items: center;
          display: flex;
          width: 100%;
          .enterprise-type {
            font-weight: 600;
            font-size: 1.2em;
            line-height: 27px;
            text-align: center;
          }
          .enterprise {
            font-style: normal;
            font-weight: bold;
            line-height: 60px;
            font-size: 1.3vw;
            text-align: center;
            color: ${color.light.ruby};
          }
          .range {
            font-weight: bold;
            font-size: 1.25em;
            line-height: 25px;
            text-align: center;
            color: ${color.light.black};
            margin-bottom: 6px;
          }
          .text-1 {
            font-size: 1.25em;
            line-height: 25px;
            text-align: center;
            color: ${color.light.black};
            margin-bottom: 6px;
          }
          .btn-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          @media ${device.laptop} {
            .enterprise-type {
              font-size: 1em;
            }
            .enterprise {
              font-size: 1em;
            }
            .text-1 {
              font-size: 1em;
            }
            .range {
              font-size: 1em;
            }
            .transact-text {
              display: none;
            }
            .pricing-text {
              display: none;
            }
            .btn-container {
              width: 25%;
            }
          }
        }
        @media ${device.laptop} {
          height: 8vw;
        }
      }
    }
  }
`;
