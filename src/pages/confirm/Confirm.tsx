import { Container } from "@components/common/container/style";
import { Wrapper } from "@components/common/wrapper/style";
import HintText2 from "@components/common/hintText/HintText2";

const Confirm: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <HintText2
          headline="이제 직접 소통해봐요."
          paragraph="이제부터는 ‘팀장’만 작성할 수 있어요.
팀원들과 상의해서 우리 팀은 어떤 팀인지 정해봐요."
        />
      </Wrapper>
    </Container>
  );
};

export default Confirm;
