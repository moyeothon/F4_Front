import Button from "@components/common/button/Button";
import HintText2 from "@components/common/hintText/HintText2";
import ActivatedProfile from "@components/invite/profile/ActivatedProfile";
import DeactivatedProfile from "@components/invite/profile/DeactivatedProfile";
import UrlCopy from "@components/invite/urlCopy/UrlCopy";
import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 360px) {
    width: 280px;
  }
`;

export const Section = styled.div`
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProfileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 0 20px 0;
`;

const Invite: React.FC = () => {
  return (
    <Container>
      <Section>
        <HintText2
          headline="팀원 초대하기"
          paragraph="URL을 공유하여 팀원을 초대해보세요!"
        />
        <UrlCopy />
      </Section>

      <Section>
        <HintText2
          headline="팀원 정보 입력하기"
          paragraph="다른 팀원이 나를 알 수 있도록 프로필을 등록해주세요!
프로필 등록을 하지 않으면 다음을 진행할 수 없어요."
        />
        <ProfileList>
          <ActivatedProfile
            name="김은혜"
            position="팀장"
            part="프론트엔드"
            imgSrc="https://github.com/gracekim527.png"
          />
          <DeactivatedProfile />
          <DeactivatedProfile />
          <DeactivatedProfile />
          <DeactivatedProfile />
          <DeactivatedProfile />
        </ProfileList>
      </Section>
      <Button link="" name="팀원들과 동기화하기" />
    </Container>
  );
};

export default Invite;
