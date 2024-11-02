import { Container } from "@components/common/container/style";
import { Wrapper } from "@components/common/wrapper/style";
import HintText2 from "@components/common/hintText/HintText2";
import { ResultCard } from "./_components/ResultCard";
import Button from "@components/common/button/Button";

const FIRST_MOCK_TEXT: string[] = [
  "모든 인원이 커뮤니케이션을 좋아하는 팀이에요. 작업할 때 매우 소통을 중요하게 여기는 팀입니다. 실시간 커뮤 툴을 병행해서 사용하는 것이 좋을 것 같아요.",
  "대부분이 빠른 피드백을 선호하는 애자일 방식을 선호해요.",
];

const SECOND_MOCK_TEXT: string[] = [
  "정기적으로 학습한 내용을 공유하는 시간을 가지는 게 좋을 것 같아요. 특히 A와 B는 최신 기술을 도입하는 데에, C와 D는 기존 알던 기술을 활용하는 데에 가치를 두고 있으니, 토론해보는 게 좋을 듯 해요!",
  "A, C는 온라인을 B, D는 오프라인 만남을 주로 선호하고 있어요. 프로젝트 기간동안 서로에게 무리가 없도록 일정을 잘 조율하는 것이 매우 중요해요.",
];

const Result: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <HintText2
          headline="AI가 분석한 팀의 성향입니다."
          paragraph="각 팀원들이 답변한 내용을 토대로 팀의 성향을 진단해줘요.
        우리 팀 성향이 맞는지 확인해보고, 팀원들과 상의해볼까요?"
        />
        <Wrapper>
          <ResultCard
            title="AI가 진단한 팀의 성향 요약"
            contents={FIRST_MOCK_TEXT}
          />
          <ResultCard title="팀 방향성 조언" contents={SECOND_MOCK_TEXT} />
        </Wrapper>
      </Wrapper>

      <Button name="다음" link={`/confirm`} $width="100%" />
    </Container>
  );
};

export default Result;
