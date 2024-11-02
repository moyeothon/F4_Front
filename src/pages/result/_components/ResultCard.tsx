import * as S from "./style";

interface ResultCardProps {
  title: string;
  contents: string[];
}

export const ResultCard = ({ title, contents }: ResultCardProps) => {
  return (
    <S.ResultCard>
      <S.ResultTitle>{title}</S.ResultTitle>
      <S.ResultContentWrapper>
        {contents.map((content, index) => (
          <S.ResultContent key={index}>{content}</S.ResultContent>
        ))}
      </S.ResultContentWrapper>
    </S.ResultCard>
  );
};
