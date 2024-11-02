import styled from "styled-components";

export const ResultCard = styled.div`
  border-radius: 20px;
  background-color: #e9ecef;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export const ResultTitle = styled.h1`
  color: #99bc85;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.1px;
`;

export const ResultContentWrapper = styled.ul`
  width: 100%;
  list-style: square;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 0.5rem;
`;

export const ResultContent = styled.li``;
