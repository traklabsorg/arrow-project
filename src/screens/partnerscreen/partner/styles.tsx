import styled, { css } from "styled-components";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledPartnerSection = styled.div`
  padding: 5vh 10vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .column-one {
    padding: 0.625em 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 46%;
    .navigation-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media ${device.laptop} {
        height: 40%;
        font-size: 0.9375em;
        flex-direction: column;
        justify-content: space-around;
      }
      @media ${device.mobileL} {
        height: 35%;
      }
    }
  }
  .column-two {
    display: flex;
    flex-wrap: wrap;
    width: 46%;
    .partnerDesk {
      width: 46vw;
      @media ${device.laptop} {
        display: none;
      }
    }
    .partnerLap {
      display: none;
      @media ${device.laptop} {
        width: 100%;
        display: flex;
      }
      @media ${device.mobileL} {
        display: none;
      }
    }
    .partnerMob {
      display: none;
      @media ${device.mobileL} {
        width: 100%;
        display: flex;
      }
    }
  }
  @media ${device.laptop} {
    .column-one {
      width: 100%;
    }
    .column-two {
      width: 100%;
      justify-content: center;
    }
    justify-content: space-evenly;
    flex-direction: column;
    text-align: center;
  }
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
