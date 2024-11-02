import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.1px;
  padding: 0.2rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 8px;
  border: 1px solid #ced4da;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  border-radius: 8px;
  border: 1px solid #ced4da;
  padding: 0.5rem;
`;
