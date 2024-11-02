import React from "react";
import styled, { css } from "styled-components";

interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  options: Option[];
  selectedOption: string;
  onChange: (value: string) => void;
}

interface LabelProps {
  isSelected: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <Container>
      <TitleWrapper>
        <InputTitle>{label}</InputTitle>
        <EssentialIcon>*</EssentialIcon>
      </TitleWrapper>
      <RadioGroupContainer>
        {options.map((option) => (
          <Label
            key={option.value}
            isSelected={selectedOption === option.value}
          >
            <RadioInput
              type="radio"
              name="radioGroup"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </Label>
        ))}
      </RadioGroupContainer>
    </Container>
  );
};

export default RadioGroup;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RadioGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const Label = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #495057;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px; /* 100% */
  letter-spacing: -0.1px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  background: #fff;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: #bfd8af;
      border-color: #868e96;
      color: #495057;
      font-weight: 600;
    `}
`;

const RadioInput = styled.input`
  margin-right: 8px;
  accent-color: #6c757d;
  cursor: pointer;
  opacity: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const InputTitle = styled.label`
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
