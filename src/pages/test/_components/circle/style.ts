import styled from "styled-components";

interface CircleProps {
  $activePage: boolean;
}

export const CircleContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
`;

export const Circle = styled.div<CircleProps>`
  width: 30px;
  height: 30px;
  background-color: ${({ $activePage }) =>
    $activePage ? "#99BC85" : "#D4E7C5"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
