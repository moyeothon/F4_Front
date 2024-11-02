import * as S from "./style";

interface InputContainerProps {
  label: string;
  defaultText: string;
  isTextArea?: boolean;
  isDisabled?: boolean;
  $background?: string;
}

export const InputContainer = ({
  label,
  defaultText,
  isTextArea,
  isDisabled = false,
  $background = "transparent",
}: InputContainerProps) => {
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      {isTextArea ? (
        <S.TextArea
          placeholder={defaultText}
          disabled={isDisabled}
          style={{
            background: $background,
          }}
        />
      ) : (
        <S.Input
          placeholder={defaultText}
          disabled={isDisabled}
          style={{
            background: $background,
          }}
        />
      )}
    </S.InputWrapper>
  );
};
