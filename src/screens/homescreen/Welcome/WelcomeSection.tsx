import React, { ReactElement } from "react";
import CompanyCard from "./CompanyCard/CompanyCard";
import HeadingComponent from "../../../components/heading";
import { color } from "../../../constants/colorscheme/ColorScheme";
import { StyledWelcomeSection } from "./styles";
import { companies } from "../../../constants/companies/companies";
import Button from "../../../components/button";

interface Props {}

export default function WelcomeSection({}: Props): ReactElement {
  return (
    <StyledWelcomeSection>
      <div className="column-one">
        <div className="heading">
          <HeadingComponent
            heading={"Welcome to your world of quick checkouts"}
            title={
              "No more passwords or filling out forms. Shop and pay from wherever you are – in one single tap."
            }
            color={color.light.black}
          />
        </div>
        <div className="navigation-container">
          <Button text={"Show me more"} color={color.light.ruby} />
          <div className="underline">Get Arrow for your store</div>
        </div>
      </div>
      <div className="column-two">
        {companies.map((company) => (
          <CompanyCard companyLogo={company.companyLogo} />
        ))}
      </div>
    </StyledWelcomeSection>
  );
}
