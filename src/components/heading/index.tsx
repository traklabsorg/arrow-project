import React from "react";
import { StyledHeadingComponent } from "./styles";

interface Props {
  color: string;
  heading?: string;
  title?: string;
  subTitle?: string;
}

function HeadingComponent({ color, heading, title, subTitle }: Props) {
  return (
    <StyledHeadingComponent color={color}>
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
