import * as S from "./style";
import Button from "@components/common/button/Button";
import background from "../../assets/background.png";

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Section>
        <S.Background src={background} alt="배경" />
        <S.TitleSection>
          <S.Title>
            팀과 나를 맞추는 동기화, <br /> Sync Up
          </S.Title>
          <Button link="/create" name="팀 SyncUp 시작하기" />
        </S.TitleSection>
      </S.Section>
    </S.Container>
  );
};

export default Main;
