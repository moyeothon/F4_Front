import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./style";

export default function UrlCopy() {
  const url = "https://www.syncup.com/234asdf94al4";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("URL이 복사되었습니다.");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <S.Container>
      <S.Url>{url}</S.Url>
      <S.Icon onClick={handleCopy}>
        <FontAwesomeIcon
          icon={faCopy}
          style={{ width: "16px", height: "16px", color: "#868E96" }}
        />
      </S.Icon>
    </S.Container>
  );
}
