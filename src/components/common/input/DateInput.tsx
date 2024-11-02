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
          <S.TextInput
            type="number"
            maxLength={4}
            onChange={(e) => {
              localStorage.setItem("year", e.target.value);
            }}
            placeholder="YYYY"
          />
        </S.DateInputWrap>
        <S.DateInputWrap>
          <S.TextInput
            type="number"
            maxLength={2}
            onChange={(e) => {
              localStorage.setItem("month", e.target.value);
            }}
            placeholder="MM"
          />
        </S.DateInputWrap>
        <S.DateInputWrap>
          <S.TextInput
            type="number"
            maxLength={2}
            onChange={(e) => {
              localStorage.setItem("day", e.target.value);
            }}
            placeholder="DD"
          />
        </S.DateInputWrap>
      </S.DateInputContainer>
    </S.InputContainer>
  );
};

export default DateInput;
