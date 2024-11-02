import Button from "@components/common/button/Button";
import HintText2 from "@components/common/hintText/HintText2";
import DeactivatedProfile from "@components/invite/profile/DeactivatedProfile";
import UrlCopy from "@components/invite/urlCopy/UrlCopy";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { instance } from "@apis/instance";
import { useEffect } from "react";

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
  let { team, count } = useParams();
  if (team === undefined) {
    team = "";
  }
  if (count === undefined) {
    count = "1";
  }
  localStorage.setItem("team_id", team);
  localStorage.setItem("member_count", count);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await instance.get(
        `/teams/${localStorage.getItem("team_id")}/profiles/`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

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
          {Array.from(
            { length: Number(localStorage.getItem("member_count")) },
            (_, index) => (
              <DeactivatedProfile key={index} />
            )
          )}
        </ProfileList>
      </Section>
      <Button link="/result" name="팀원들과 동기화하기" />
    </Container>
  );
  // TODO - 미등록 프로필 누르면 등록하는 페이지로
  // TODO - 서버로 받은 UUID로 고유 페이지 생성
  // TODO - 서버로 부터 등록받은 유저 받아와서 mapping
  // TODO - 전 인원 미등록 시 disabled
  // TODO - 전 인원 등록 후 버튼 클릭 시 GPT 관련 API요청
};

export default Invite;
