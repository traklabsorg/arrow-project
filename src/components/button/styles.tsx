import styled from "styled-components";
import { color } from "../../constants/colorscheme/ColorScheme";
import { device } from "../../constants/screensize/ScreenSize";

type StyledButtonType = {
  color?: string;
};

export const StyledButton = styled.button<StyledButtonType>`
  background: ${(props) => props.color};
  cursor: pointer;
  height: 2.5rem;
  text-align: center;
  padding: 0 1em;
  border: none;
  border-radius: 15px;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background-color: ${color.light.black};
  }
  @media ${device.laptop} {
    height: 2.5em;
    font-size: 0.9em;
  }
  @media ${device.mobileL} {
  }
`;
