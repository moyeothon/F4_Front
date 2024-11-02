import React from "react";
import styled from "styled-components";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  essential: boolean;
  options: Option[];
  selectedOption: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  essential,
  options,
  selectedOption,
  onChange,
  placeholder,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <TitleWrapper>
        <InputTitle>{label}</InputTitle>
        {essential && <EssentialIcon>*</EssentialIcon>}
      </TitleWrapper>
      <SelectBox value={selectedOption} onChange={handleSelectChange}>
        <option value="">{placeholder || "Select an option"}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectBox>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SelectBox = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  background: #fff;
  padding: 10px;
  color: #343a40;
  outline: none;
  color: #495057;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px; /* 100% */
  letter-spacing: -0.1px;
`;

const InputTitle = styled.label`
  color: #343a40;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.1px;
`;

const EssentialIcon = styled.span`
  color: #f5535e;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.1px;
`;
