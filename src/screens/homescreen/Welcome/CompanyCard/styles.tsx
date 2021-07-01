import styled, { css } from "styled-components";
import { device } from "../../../../constants/screensize/ScreenSize";

export const StyledCompanyCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8vw;
  height: 8vw;
  margin: 15px;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    box-shadow: 0px 4px 20px rgba(255, 0, 0, 0.4);
  }
  @media ${device.laptop} {
    width: 15vw;
    height: 15vw;
    margin: 10px;
  }
  @media ${device.mobileL} {
    width: 20vw;
    height: 20vw;
    margin: 8px;
  }
`;
