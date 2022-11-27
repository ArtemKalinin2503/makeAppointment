import React from "react";
import Header from "../../components/header";
import PanelNavigation from "../../components/panelNavigation";
import { StyledSectionLeft, StyledSectionRight, StyledWrapperPage } from "./time.styled";

const TimePage: React.FC = () => {
  return (
    <StyledWrapperPage>
      <StyledSectionLeft>
        <PanelNavigation />
      </StyledSectionLeft>
      <StyledSectionRight>
        <Header />
      </StyledSectionRight>
    </StyledWrapperPage>
  );
};

export default TimePage;
