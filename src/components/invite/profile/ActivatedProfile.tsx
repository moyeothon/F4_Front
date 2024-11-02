import * as S from "./style";

interface ProfileProps {
  name: string;
  position: string;
  part: string;
  imgSrc?: string;
  url?: string;
}

const ActivatedProfile: React.FC<ProfileProps> = ({
  name,
  position,
  part,
  imgSrc,
  url,
}) => {
  const handleClick = () => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <S.Container
      onClick={handleClick}
      style={{ cursor: url ? "pointer" : "default" }}
    >
      <div>
        <S.Img src={imgSrc} alt={`${name}'s profile`} />
      </div>
      <S.InformWrap>
        <S.InformDetailWrap>
          <S.Name>{name}</S.Name>
          <S.Position>{position}</S.Position>
        </S.InformDetailWrap>
        <S.Part>{part}</S.Part>
      </S.InformWrap>
    </S.Container>
  );
};

export default ActivatedProfile;
