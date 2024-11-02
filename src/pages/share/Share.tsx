import * as S from "./style";
import { Container } from "@components/common/container/style";
import { Wrapper } from "@components/common/wrapper/style";
import ActivatedProfile from "@components/invite/profile/ActivatedProfile";
import useDownloadScreenshot from "@hooks/useDownloadScreenShot";

const Share = () => {
  useDownloadScreenshot("root", "/create");
  return (
    <Container>
      <S.Title>Sync Up 결과</S.Title>
      <Wrapper>
        <S.InputWrapper>
          <S.InputLabel>팀명</S.InputLabel>
          <S.Input>{localStorage.getItem("team_name")}</S.Input>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputLabel>우리팀 규칙</S.InputLabel>
          <S.Input>{localStorage.getItem("team_rules")}</S.Input>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputLabel>우리팀 목표</S.InputLabel>
          <S.Input>{localStorage.getItem("team_goal")}</S.Input>
        </S.InputWrapper>
      </Wrapper>
      <S.ProfileContainer>
        <S.Label>우리 팀 정보</S.Label>
        {/* <ActivatedProfile
          name="김은혜"
          position="팀장"
          part="프론트엔드"
          imgSrc="/images/nemo.png"
          $background="transparent"
          $borderColor="#E1F0DA"
        /> */}
        <ActivatedProfile
          name="박세호"
          position="팀원"
          part="프론트엔드"
          $background="transparent"
          $borderColor="#E1F0DA"
          imgSrc="/images/sara.png"
        />
        {/* <ActivatedProfile
          name="이석원"
          position="팀원"
          part="백엔드"
          $background="transparent"
          $borderColor="#E1F0DA"
          imgSrc="/images/idea.png"
        /> */}
        <ActivatedProfile
          name="김현수"
          position="팀원"
          part="백엔드"
          $background="transparent"
          $borderColor="#E1F0DA"
          imgSrc="/images/sir.png"
        />
      </S.ProfileContainer>
    </Container>
  );
};

export default Share;
