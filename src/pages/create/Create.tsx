import styled from "styled-components";
import Button from "@components/common/button/Button";
import HintText from "@components/common/hintText/HintText1";
import TeamButton from "@components/create/TeamButton";

const Container = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 120px;
`;

const ButtonLayout = styled.div`
  position: relative;
  bottom: 10px;
`;

const Create: React.FC = () => {
  return (
    <>
      <Container>
        <HintText
          width="240px"
          headline="동기화 할 팀원의 수를 선택해주세요. "
          paragraph="팀을 생성하신 분에게 자동으로 '팀장'역할이 부여돼요."
        />
        <TeamButton />
      </Container>

      <ButtonLayout>
        <Button type="submit" link="/invite" name="팀 동기화 시작하기" />
      </ButtonLayout>
    </>
  );
};

export default Create;
