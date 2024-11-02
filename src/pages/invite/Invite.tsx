import Button from "@components/common/button/Button";
import HintText2 from "@components/common/hintText/HintText2";
import DeactivatedProfile from "@components/invite/profile/DeactivatedProfile";
import ActivatedProfile from "@components/invite/profile/ActivatedProfile"; // ActivatedProfile import 추가
import UrlCopy from "@components/invite/urlCopy/UrlCopy";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { instance } from "@apis/instance";
import { useEffect, useState } from "react"; // useState import 추가

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

// types.ts (또는 적절한 파일에 타입 선언)

export interface Profile {
  id: number; // id가 숫자라고 가정
  user_name: string; // 사용자 이름
  role: string; // 역할
  // 필요한 다른 필드도 추가 가능
}

const Invite: React.FC = () => {
  const { team, count } = useParams();
  const [profiles, setProfiles] = useState<Profile[]>([]); // 프로필 상태 관리

  localStorage.setItem("team_id", team ? team : "test");
  localStorage.setItem("member_count", count ? count : "test");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await instance.get(
        `/teams/${localStorage.getItem("team_id")}/profiles/`
      );
      setProfiles(response.data.profiles); // 받아온 프로필 데이터를 상태에 저장
    } catch (err) {
      console.log(err);
    }
  };

  const registeredCount = profiles.length; // 등록된 팀원의 수
  const totalCount = Number(localStorage.getItem("member_count")); // 전체 팀원의 수

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
          {profiles.map((profile, index) => (
            <ActivatedProfile
              key={index}
              name={profile.user_name}
              position={profile.role}
              part={"구성원"}
            />
          ))}
          {Array.from({ length: totalCount - registeredCount }, (_, index) => (
            <DeactivatedProfile key={index} />
          ))}
        </ProfileList>
      </Section>
      <Button link="/result" name="팀원들과 동기화하기" />
    </Container>
  );
};

export default Invite;
