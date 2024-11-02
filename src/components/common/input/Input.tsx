// Input.tsx
import React from "react";
import * as S from "./style";

interface InputProps {
  label: string;
  essential?: boolean;
  hint: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  essential = true,
  hint,
  value,
  onChange,
}) => {
  return (
    <S.InputContainer>
      <S.InputTitleWrapper>
        <S.InputTitle>{label}</S.InputTitle>
        {essential && <S.EssentialIcon>*</S.EssentialIcon>}
      </S.InputTitleWrapper>
      {hint && <S.InputHint>{hint}</S.InputHint>}
      <S.InputWrap>
        <S.TextInput type="text" value={value} onChange={onChange} />
      </S.InputWrap>
    </S.InputContainer>
  );
};

export default Input;
