import * as S from "./style";

interface InputContainerProps {
  label: string;
  defaultText: string;
  isTextArea?: boolean;
  isDisabled?: boolean;
  $background?: string;
  localStorageKey: string; // 추가: 로컬 스토리지 키
}

export const InputContainer = ({
  label,
  defaultText,
  isTextArea,
  isDisabled = false,
  $background = "transparent",
  localStorageKey, // 추가: 로컬 스토리지 키 받기
}: InputContainerProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    localStorage.setItem(localStorageKey, e.target.value); // 로컬 스토리지에 값 저장
  };

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
          onChange={handleChange} // 여기서 로컬 스토리지에 값 저장
        />
      ) : (
        <S.Input
          placeholder={defaultText}
          disabled={isDisabled}
          style={{
            background: $background,
          }}
          onChange={handleChange} // 여기서 로컬 스토리지에 값 저장
        />
      )}
    </S.InputWrapper>
  );
};
