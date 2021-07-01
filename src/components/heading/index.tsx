import React from "react";
import { StyledHeadingComponent } from "./styles";

interface Props {
  color: string;
  heading?: string;
  title?: string;
  subTitle?: string;
  titleColor?: string;
}

function HeadingComponent({ color, heading, title, subTitle, titleColor }: Props) {
  return (
    <StyledHeadingComponent color={color} titleColor={titleColor}>
      <div className="heading">
        <div className="title">{heading}</div>
        <div className="sub-title">
          {title}
          <div className="bold-subtitle">{subTitle}</div>
        </div>
      </div>
    </StyledHeadingComponent>
  );
}

export default HeadingComponent;
