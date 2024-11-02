import * as S from "./style";
import { CircleInfo } from "./_components/circle/CircleInfo";
import { usePageNumber } from "./_hooks/usePageNumber";
import { useUserProfile } from "@hooks/useUserProfile";
import { TEST_TEXT, TEST_BTN_TEXT } from "@constants/testText";
import { TestButton } from "./_components/button/TestButton";

const Test: React.FC = () => {
  const { page } = usePageNumber();
  const { error } = useUserProfile();
  // console.log(response);
  return (
    <S.TestContainer>
      <CircleInfo pageNumber={page} />
      <S.TextContainer>
        {error}
        {TEST_TEXT}
      </S.TextContainer>
      {TEST_BTN_TEXT.map((text, index) => (
        <TestButton text={text} key={index} />
      ))}
    </S.TestContainer>
  );
};

export default Test;
