// Input.tsx
import React from "react";
import * as S from "./style";

interface InputProps {
  width?: string;
  label: string;
  essential: boolean;
  hint: string;
}

const Input: React.FC<InputProps> = ({
  width = "340px",
  label,
  essential = true,
  hint,
}) => {
  return (
    <S.InputContainer>
      <S.InputTitleWrapper>
        <S.InputTitle>{label}</S.InputTitle>
        {essential && <S.EssentialIcon>*</S.EssentialIcon>}
      </S.InputTitleWrapper>
      {hint && <S.InputHint>{hint}</S.InputHint>}
      <S.InputWrap width={width}>
        <S.TextInput type="text" />
      </S.InputWrap>
    </S.InputContainer>
  );
};

export default Input;
