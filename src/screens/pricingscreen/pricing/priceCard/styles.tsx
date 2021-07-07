import styled from "styled-components";
import { color } from "../../../../constants/colorscheme/ColorScheme";
import { device } from "../../../../constants/screensize/ScreenSize";

export const StyledPriceCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);
  border-radius: 15px;

  .price-card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10%;
    width: 14vw;
    height: 100%;
    .price-type {
      font-weight: 600;
      font-size: 1em;
      line-height: 27px;
      text-align: center;
    }
    .price-wrapper {
      .price {
        font-style: normal;
        font-weight: bold;
        font-size: 2.3vw;
        line-height: 60px;
        text-align: center;
        color: ${color.light.ruby};
      }
      .monthly-text {
        font-weight: 600;
        font-size: 0.8rem;
        line-height: 19px;
        text-align: center;
        color: ${color.light.lightGray};
      }
      @media ${device.mobileL} {
        display: flex;
        flex-direction: row-reverse;
      }
    }
    .transaction-wrapper {
      .transaction-text {
        font-weight: bold;
        font-size: 0.9em;
        line-height: 3vh;
        text-align: center;
        color: ${color.light.lightGray};
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 8px 0px;
      }
      .range {
        font-weight: bold;
        font-size: 0.9em;
        line-height: 25px;
        text-align: center;
        color: ${color.light.black};
        margin-bottom: 6px;
      }
      @media ${device.mobileL} {
        display: flex;
        flex-direction: row-reverse;
      }
    }
    .btn-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media ${device.laptop} {
      flex-direction: row;
      padding: 2%;
      width: 100%;
      .btn-container {
        width: 20%;
      }
      .transaction-wrapper {
        .transaction-text {
          display: none;
        }
      }
      .price-wrapper {
        flex-direction: row;
        .monthly-text {
          display: none;
        }
        @media ${device.mobileL} {
          flex-direction: row-reverse;
          .monthly-text {
            display: flex;
          }
        }
      }
    }
    @media ${device.mobileL} {
      flex-direction: column;
      .price-type {
        justify-content: flex-start;
      }
    }
  }
  @media ${device.laptop} {
    width: 100%;
    margin: 1% 0;
    height: 8vw;
  }
  @media ${device.mobileL} {
    /* width: 100%;
    margin: 1% 0;
    height: 16vh; */
  }
`;
