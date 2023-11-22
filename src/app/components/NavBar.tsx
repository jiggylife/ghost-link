import React, { FC } from "react";
import styled from "styled-components";

import Logo from "@/svgs/Logo";
import colors from "@/lib/colors";

import Button from "./Button";

const NavBar: FC = () => (
  <NavBarStyled>
    <Logo className="cursor-pointer" />
    <Button text="Say something anonymously" />
  </NavBarStyled>
);

const NavBarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90dvw;
  margin: 2.5rem auto;
  padding: 6px 12px;
  border: 1px solid ${colors.grey100};
  border-radius: 100px;
`;

export default NavBar;
