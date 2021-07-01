import React, { ReactElement } from "react";
import { StyledCompanyCard } from "./styles";

interface Props {
  companyLogo: string;
}

export default function CompanyCard({ companyLogo }: Props): ReactElement {
  return (
    <StyledCompanyCard>
      <img alt="company" src={companyLogo}></img>
    </StyledCompanyCard>
  );
}
