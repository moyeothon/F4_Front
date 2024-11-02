import * as S from "./style";

export default function DeactivatedProfile() {
  const handleClick = () => {
    window.location.href = "#";
  };

  return (
    <S.DeactivatedContainer onClick={handleClick}>
      <S.Hint>
        아직 팀원 정보가 입력되지 않았어요! <br /> URL을 공유하여 팀원을
        초대해주세요.
      </S.Hint>
    </S.DeactivatedContainer>
  );
}
