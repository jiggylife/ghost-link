import React, { FC } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import colors from "@/lib/colors";

interface Props {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<Props> = ({ text, icon, onClick }) => {
  const router = useRouter();
  return (
    <ButtonStyled
      onClick={() => (onClick ? onClick() : router.push("/message"))}
    >
      {text} {icon}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  width: auto;
  padding: 10px 1rem;
  background: ${colors.black200};
  color: ${colors.white100};
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;
  transition: all 0.4s ease-in-out;
  border: 1px solid ${colors.black200};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: transparent;
    color: ${colors.black200};
    transform: scale(1.01);
  }
`;

export default Button;
