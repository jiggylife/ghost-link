import React, { FC } from "react";
import { useRouter } from "next/navigation";
import styled, { keyframes } from "styled-components";

import colors from "@/lib/colors";

interface Props {
  text: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
}

const Button: FC<Props> = ({ text, onClick, isLoading, icon }) => {
  const router = useRouter();
  return (
    <ButtonStyled
      onClick={() => (onClick ? onClick() : router.push("/message"))}
    >
      {isLoading ? (
        <div className="loader" />
      ) : (
        <>
          {text} {icon}
        </>
      )}
    </ButtonStyled>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const ButtonStyled = styled.button`
  min-width: 140px;
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

  .loader {
    border: 3px solid ${colors.white100};
    border-top: 3px solid ${colors.black200};
    border-radius: 50%;
    width: 23px;
    height: 23px;
    animation: ${spin} 0.6s linear infinite;
  }
`;

export default Button;
