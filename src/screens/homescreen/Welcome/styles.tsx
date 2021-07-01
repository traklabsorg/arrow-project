import styled, { css } from "styled-components";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledWelcomeSection = styled.div`
  padding: 5vh 10vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .column-one {
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 46%;
    .navigation-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .underline {
        margin-top: 10px;
        cursor: pointer;
        text-decoration-line: underline;
      }
      @media ${device.laptop} {
        height: 40%;
        font-size: 15px;
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
