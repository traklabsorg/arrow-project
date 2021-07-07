import styled, { css } from "styled-components";
import { color } from "../../../constants/colorscheme/ColorScheme";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledStoreSection = styled.div`
  padding: 5vh 10vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
    .items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 1%;
      width: 13vw;
      height: 9vw;
      .item-text {
        font-weight: 800;
        font-size: 1.625em;
        line-height: 2.1875em;
        color: ${color.light.ruby};
      }
      img {
        width: 75%;
      }
      @media ${device.laptop} {
        width: 20vw;
        .item-text {
          font-size: 1.3em;
          line-height: 2em;
        }
        img {
          width: 70%;
        }
      }
      @media ${device.mobileL} {
        margin: 5%;
        width: 40vw;
        height: 100%;
        .item-text {
          font-size: 1em;
          line-height: 1.5em;
        }
        img {
          width: 40%;
        }
      }
    }
    @media ${device.mobileL} {
      flex-direction: column;
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
