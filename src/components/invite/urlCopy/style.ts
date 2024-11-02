import styled from "styled-components";

// UrlCopy.tsx
export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 350px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #ced4da;
  background: #e9ecef;
  padding: 10px 12px;

  @media (max-width: 360px) {
    width: 280px;
  }
`;

export const Url = styled.p`
  color: #495057;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 116.667% */
  letter-spacing: -0.5px;
`;

export const Icon = styled.button`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
