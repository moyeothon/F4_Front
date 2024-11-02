import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  link?: string; // 링크를 위한 prop
  name: string; // 버튼의 텍스트를 위한 prop
  type?: "button" | "submit"; // 기본 버튼 타입
  $width?: string; // 버튼의 넓이
  onClick?: () => void; // 클릭 핸들러
}

const Btn = styled.button<ButtonProps>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #343a40;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  background: #99bc85;
  cursor: pointer;
  border: none;
  margin: 10px auto;

  @media (max-width: 360px) {
    width: 280px;
  }
`;

const Button: React.FC<ButtonProps> = ({
  link,
  name,
  type = "button",
  $width,
  onClick,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick(); // onClick이 존재하면 호출
    }
    if (link) {
      navigate(link);
    }
  };

  return (
    <Btn
      link={link}
      name={name}
      type={type}
      onClick={handleClick}
      $width={$width}
    >
      {name}
    </Btn>
  );
};

export default Button;
