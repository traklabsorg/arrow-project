import React, { ReactElement } from "react";
import { StyledPriceCard } from "./styles";
import Button from "../../../../components/button/index";
import { color } from "../../../../constants/colorscheme/ColorScheme";
interface Props {
  type?: string;
  price?: string;
  range?: string;
  btn?: string;
}

export default function PriceCard({
  type,
  price,
  range,
  btn,
}: Props): ReactElement {
  return (
    <StyledPriceCard>
      <div className="price-card-container">
        <div className="price-type">{type}</div>
        <div className="price-wrapper">
          <div className="price">${price}</div>
          <div className="monthly-text">Monthly</div>
        </div>
        <div className="transaction-wrapper">
          <div className="transaction-text">Transactions</div>
          <div className="range">{range}</div>
        </div>
        <div className="btn-container">
          <Button color={color.light.ruby} text={btn} />
        </div>
      </div>
    </StyledPriceCard>
  );
}
