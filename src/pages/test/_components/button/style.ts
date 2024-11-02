import styled from "styled-components";
import { TestButtonProps } from "./TestButton";

export const TestButton = styled.button<TestButtonProps>`
  border-radius: 15px;
  border: 1px solid #ced4da;
  width: 100%;
  padding: 1.5rem 0;
  background-color: ${({ $isActive }) =>
    $isActive ? "#b2d1a1" : "transparent"};
  cursor: pointer;
  &:hover {
    background-color: #d4e7c5; // hover 효과
  }
`;

export const ButtonText = styled.h1`
  color: #343a40;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 150% */
  letter-spacing: -0.5px;
`;
