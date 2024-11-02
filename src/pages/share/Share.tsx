import * as S from "./style";
import { Container } from "@components/common/container/style";
import { Wrapper } from "@components/common/wrapper/style";
import ActivatedProfile from "@components/invite/profile/ActivatedProfile";
import { InputContainer } from "@components/common/inputContainer/InputContainer";
import Button from "@components/common/button/Button";

const Share = () => {
  return (
    <Container>
      <S.Title>Sync Up 결과</S.Title>
      <Wrapper>
        <InputContainer label="팀명" defaultText="F4!" isDisabled={true} />
        <InputContainer
          label="우리팀만의 규칙"
          defaultText="입력된 규칙 1
입력된 규칙 2
          "
          isTextArea={true}
          isDisabled={true}
          //   $background="#E1F0DA"
        />
        <InputContainer
          label="우리팀의 목표"
          defaultText="입력된 값"
          isDisabled={true}
        />
      </Wrapper>
      <S.ProfileContainer>
        <S.Label>우리 팀 정보</S.Label>
        <ActivatedProfile
          name="김은혜"
          position="팀장"
          part="프론트엔드"
          imgSrc="https://github.com/gracekim527.png"
          $background="transparent"
          $borderColor="#E1F0DA"
        />
        <ActivatedProfile
          name="박세호"
          position="팀원"
          part="프론트엔드"
          $background="transparent"
          $borderColor="#E1F0DA"
        />
        <ActivatedProfile
          name="이석원"
          position="팀원"
          part="백엔드"
          $background="transparent"
          $borderColor="#E1F0DA"
        />
        <ActivatedProfile
          name="김현수"
          position="팀원"
          part="백엔드"
          $background="transparent"
          $borderColor="#E1F0DA"
        />
      </S.ProfileContainer>
      <Button
        $width="100%"
        name="공유하기"
        onClick={() => console.log("출력")}
      ></Button>
    </Container>
  );
};

export default Share;
