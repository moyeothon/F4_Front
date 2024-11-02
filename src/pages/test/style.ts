import styled from "styled-components";

export const TestContainer = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  gap: 1rem;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  margin-top: 2.5%;
  white-space: pre-line;
  color: #343a40;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
  letter-spacing: -0.5px;
  margin-bottom: 1.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
