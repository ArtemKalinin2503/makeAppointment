import React from "react";
import Header from "../../components/header";
import PanelNavigation from "../../components/panelNavigation";
import {
  StyledWrapperPage,
  StyledSectionLeft,
  StyledSectionRight,
} from "./qualityOfservice.styled";

const QualityOfservice: React.FC = () => {
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

export default QualityOfservice;
