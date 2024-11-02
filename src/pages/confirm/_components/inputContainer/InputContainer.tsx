import * as S from "./style";

interface InputContainerProps {
  label: string;
  defaultText: string;
  isTextArea?: boolean;
}

export const InputContainer = ({
  label,
  defaultText,
  isTextArea,
}: InputContainerProps) => {
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      {isTextArea ? (
        <S.TextArea placeholder={defaultText} />
      ) : (
        <S.Input placeholder={defaultText} />
      )}
    </S.InputWrapper>
  );
};
