import React from "react";
import { NavLink } from "react-router-dom";
import { StyledSectionLeft } from "./panelNavigation.styled";

const PanelNavigation: React.FC = () => {
  return (
    <StyledSectionLeft>
      <nav>
        <ul>
          <li>
            <NavLink to="/users">Пользователи</NavLink>
          </li>
          <li>
            <NavLink to="/organizations">Организации</NavLink>
          </li>
          <li>
            <NavLink to="/divisions">Подразделения</NavLink>
          </li>
          <li>
            <NavLink to="/themes">Темы</NavLink>
          </li>
          <li>
            <NavLink to="/days">Дни</NavLink>
          </li>
          <li>
            <NavLink to="/time">Время</NavLink>
          </li>
          <li>
            <NavLink to="/makeAppointment">Запись на прием</NavLink>
          </li>
          <li>
            <NavLink to="/qualityOfservice">Качество обслуживания</NavLink>
          </li>
        </ul>
      </nav>
    </StyledSectionLeft>
  );
};

export default PanelNavigation;
