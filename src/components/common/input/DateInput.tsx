// DateInput.tsx
import React from "react";
import * as S from "./style";

const DateInput: React.FC = () => {
  return (
    <S.InputContainer>
      <S.InputTitleWrapper>
        <S.InputTitle>생년월일</S.InputTitle>
        <S.EssentialIcon>*</S.EssentialIcon>
      </S.InputTitleWrapper>

      <S.DateInputContainer>
        <S.DateInputWrap>
          <S.TextInput type="number" maxLength={4} />
        </S.DateInputWrap>
        <S.DateInputWrap>
          <S.TextInput type="number" maxLength={2} />
        </S.DateInputWrap>
        <S.DateInputWrap>
          <S.TextInput type="number" maxLength={2} />
        </S.DateInputWrap>
      </S.DateInputContainer>
    </S.InputContainer>
  );
};

export default DateInput;
