import styled from "styled-components";

interface InputWrapProps {
  width?: string;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const InputTitle = styled.label`
  color: #343a40;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.1px;
`;

export const EssentialIcon = styled.span`
  color: #f5535e;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.1px;
`;

export const InputHint = styled.p`
  color: #868e96;

  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.1px;
`;

export const InputWrap = styled.div<InputWrapProps>`
  width: ${({ width }) => width || "340px"};
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  background: #fff;

  @media (max-width: 360px) {
    width: 280px;
  }
`;

export const DateInputWrap = styled.div`
  width: 102px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  background: #fff;

  @media (max-width: 360px) {
    width: 82px;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  color: #495057;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.1px;
  outline: none;
  padding: 10px 12px;
  border-radius: 8px;
`;

// DateInput.tsx
export const DateInputContainer = styled.div`
  display: flex;
  gap: 17px;
`;
