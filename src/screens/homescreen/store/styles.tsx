import styled, { css } from "styled-components";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledStoreSection = styled.div`
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
  }
  .column-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .items {
        img {
            width: 75%
        }
        @media ${device.laptop} {
        img {
            width: 70%
        }
      }
      @media ${device.mobileL} {
        img {
            width: 55%
        }
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
    .column-one {
      text-align: center;
    }
    flex-direction: column;
    height: 100%;
  }
`;
