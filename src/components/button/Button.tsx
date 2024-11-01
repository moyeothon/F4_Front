// Button.tsx

import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 350px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #343a40;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
  border-radius: 10px;
  background: #99bc85;
  cursor: pointer;
  border: none;
  margin: 10px auto;

  @media (max-width: 360px) {
    width: 280px;
  }
`;

interface ButtonProps {
  link: string;
  name: string;
  type: string;
}

const Button: React.FC<ButtonProps> = ({ link, name, type }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <Btn type="button" onClick={handleClick}>
      {name}
    </Btn>
  );
};

export default Button;
