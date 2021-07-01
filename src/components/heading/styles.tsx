import styled, { css } from "styled-components";
import { device } from "../../constants/screensize/ScreenSize";

type StyledHeadingComponent = {
  color?: string;
};

export const StyledHeadingComponent = styled.div<StyledHeadingComponent>`
  color: ${(props) => props.color};
  margin-bottom: 10px;
  .heading {
    .title {
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 25px;
      letter-spacing: 1px;
      @media ${device.laptop} {
        letter-spacing: 0.8px;
        font-size: 30px;
      }
      @media ${device.mobileL} {
        letter-spacing: 0.5px;
        font-size: 22px;
      }
    }
    .sub-title {
      font-style: normal;
      font-size: 14px;
      letter-spacing: 1px;
      @media ${device.laptop} {
        font-size: 12px;
      }
      @media ${device.mobileL} {
        font-size: 12px;
      }
      .bold-subtitle {
        font-weight: 700;
        @media ${device.laptop} {
          font-size: 12px;
        }
        @media ${device.mobileL} {
          font-size: 12px;
        }
      }
    }
  }
`;
