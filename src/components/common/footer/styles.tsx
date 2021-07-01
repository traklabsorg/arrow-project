import styled, { css } from "styled-components";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledFooter = styled.div`
  padding: 3vh 10vw;
  background-color: black;
  .footer-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .footer-wrapper {
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: bold;
      width: 80%;
      @media ${device.laptop} {
        justify-content: stretch;
        width: 100%;
      }
      @media ${device.mobileL} {
        flex-direction: column;
      }
      .footer-link-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        line-height: 30px;
        @media ${device.mobileL} {
          justify-content: center;
          flex-direction: column;
        }
      }
    }
    .social-links {
      display: flex;
      img {
        padding: 0 10px;
      }
      @media ${device.laptop} {
        img {
          width: 42px;
          height: 20px;
        }
      }
    }
    @media ${device.laptop} {
      flex-direction: column;
    }
    @media ${device.mobileL} {
      flex-direction: column;
    }
  }
`;
