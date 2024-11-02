import styled from "styled-components";

export const Title = styled.label`
  width: 100%;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  /* letter-spacing: -0.1px; */
  /* padding: 0.2rem; */
  text-align: left;
`;

export const Label = styled.label`
  width: 100%;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.1px;
  padding: 0.2rem;
  text-align: left;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.1px;
  padding: 0.2rem;
`;

export const Input = styled.div`
  width: 100%;
  height: 3rem;
  border-radius: 8px;
  border: 1px solid #e1f0da;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
`;
