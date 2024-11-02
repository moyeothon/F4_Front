import * as S from "./style";

interface TestButtonProps {
  text: string;
}

export const TestButton = ({ text }: TestButtonProps) => {
  return (
    <S.TestButton>
      <S.ButtonText>{text}</S.ButtonText>
    </S.TestButton>
  );
};
