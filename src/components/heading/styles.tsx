import styled, { css } from "styled-components";
import { device } from "../../constants/screensize/ScreenSize";

type StyledHeadingComponent = {
  color?: string;
  titleColor?: string;
};

export const StyledHeadingComponent = styled.div<StyledHeadingComponent>`
  margin-bottom: 0.625em;
  color: ${(props) => props.color};
  .heading {
    .title {
      font-size: 3vw;
      font-weight: 800;
      margin-bottom: 1.5em;
      letter-spacing: 1px;
      @media ${device.laptop} {
        letter-spacing: 0.8px;
        font-size: 1.875em;
      }
      @media ${device.mobileL} {
        letter-spacing: 0.5px;
        font-size: 1.375em;
      }
    }
    .sub-title {
      font-style: normal;
      font-size: 1.1vw;
      letter-spacing: 1px;
      color: ${(props) => (props.titleColor ? props.titleColor : props.color)};
      @media ${device.laptop} {
        font-size: 0.75em;
      }
      @media ${device.mobileL} {
        font-size: 0.75em;
      }
      .bold-subtitle {
        font-weight: 700;
        @media ${device.laptop} {
          font-size: 0.75em;
        }
        @media ${device.mobileL} {
          font-size: 0.75em;
        }
      }
    }
  }
`;
