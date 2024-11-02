import { Container } from "@components/common/container/style";
import { Wrapper } from "@components/common/wrapper/style";
import HintText2 from "@components/common/hintText/HintText2";
import { InputContainer } from "./_components/inputContainer/InputContainer";
import Button from "@components/common/button/Button";

const Confirm: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper>
          <HintText2
            headline="이제 직접 소통해봐요."
            paragraph="이제부터는 ‘팀장’만 작성할 수 있어요.
팀원들과 상의해서 우리 팀은 어떤 팀인지 정해봐요."
          />
        </Wrapper>
        <Wrapper>
          <InputContainer label="팀명" defaultText="팀명을 적어주세요!" />
          <InputContainer
            label="우리팀만의 규칙"
            defaultText="1. 매일 데일리 스크럼 진행하기
2. 본인의 의견 확실하게 밝히기
3. 시간 나면 온라인 모각코 같이 진행하기"
            isTextArea={true}
          />
          <InputContainer
            label="우리팀의 목표"
            defaultText="팀 목표를 적어주세요!"
          />
        </Wrapper>
      </Wrapper>
      <Button name="동기화 끝내기" link={`/next`} $width="100%" />
    </Container>
  );
};

export default Confirm;
