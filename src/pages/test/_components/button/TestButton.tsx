import * as S from "./style";

export interface TestButtonProps {
  text: string;
  $isActive?: boolean; // 클릭 상태에 따른 색상 적용을 위한 prop
  onClick: () => void; // 클릭 핸들러
}

export const TestButton = ({
  text,
  $isActive = false,
  onClick,
}: TestButtonProps) => {
  return (
    <S.TestButton text={text} $isActive={$isActive} onClick={onClick}>
      <S.ButtonText>{text}</S.ButtonText>
    </S.TestButton>
  );
};
