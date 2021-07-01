import styled, { css } from "styled-components";
import { device } from "../../../constants/screensize/ScreenSize";

export const StyledDeviceSection = styled.div`
  height: 100vh;
  background: linear-gradient(90deg, #f0256f 48.96%, #b12170 100%);
  padding: 0 10vw;
  position: relative;
  .arrow-down {
    width: 0;
    height: 0;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-top: 60px solid #fff;
    position: absolute;
    left: 15vw;
    @media ${device.laptop} {
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 50px solid #fff;
    }
    @media ${device.mobileL} {
      border-left: 40px solid transparent;
      border-right: 40px solid transparent;
      border-top: 40px solid #fff;
    }
  }
  .device-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .brand {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45%;
    }
    .device {
      width: 55%;
      display: flex;
      img {
        width: 55%;
      }
    }
    @media ${device.laptop} {
      width: 100%;
      flex-direction: column;
      .brand {
        text-align: center;
        height: 40%;
        width: 100%;
      }
      .device {
        min-width: 60vw;
      }
    }
    @media ${device.mobileL} {
      .device {
        min-width: 80vw;
      }
    }
  }
`;
