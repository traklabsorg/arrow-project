import React, { ReactElement } from "react";
import { StyledLink } from "./styles";

interface Props {
  color: string;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  hoverColor? :string;
}

function CustomLink({ color, text, className, hoverColor, onClick }: Props) {
  return (
    <StyledLink className={className} color={color} hoverColor={hoverColor}>
      {text}
    </StyledLink>
  );
}

export default CustomLink;
