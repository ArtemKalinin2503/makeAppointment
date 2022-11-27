import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../hooks/users/useGetUsers";
import { UsersProps, UsersPropsArr } from "./types";
import PanelNavigation from "../../components/panelNavigation";
import {
  StyledSectionLeft,
  StyledSectionRight,
  StyledUserItem,
  StyledWrapperPage,
} from "./users.styled";
import Header from "../../components/header";

const Users: React.FC<{ users?: UsersProps[] }> = ({ users }) => {

  const { data } = useQuery<UsersPropsArr>(GET_USERS);
  
  return (
    <StyledWrapperPage>
      <StyledSectionLeft>
        <PanelNavigation />
      </StyledSectionLeft>
      <StyledSectionRight>
        <Header />
        {data?.movies?.map((user) => (
          <StyledUserItem key={user.id}>{user.name}</StyledUserItem>
        ))}
      </StyledSectionRight>
    </StyledWrapperPage>
  );
};

export default Users;
