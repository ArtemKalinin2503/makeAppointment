import React from "react";
import Header from "../../components/header";
import PanelNavigation from "../../components/panelNavigation";
import {
  StyledSectionLeft,
  StyledSectionRight,
  StyledWrapperPage,
} from "./themes.styled";

const ThemesPage: React.FC = () => {
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

export default ThemesPage;
