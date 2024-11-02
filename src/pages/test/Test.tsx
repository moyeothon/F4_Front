import * as S from "./style";
import { CircleInfo } from "./_components/circle/CircleInfo";
import { usePageNumber } from "./_hooks/usePageNumber";
import { useUserProfile } from "@hooks/useUserProfile";
import { TEST_TEXT, TEST_BTN_TEXT } from "@constants/testText";
import { TestButton } from "./_components/button/TestButton";
import Button from "@components/common/button/Button";

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
      {page !== 5 ? (
        <Button
          name="다음"
          link={`http://localhost:5173/test/${page + 1}`}
          $width="100%"
        />
      ) : (
        <Button
          name="다음"
          link={`http://localhost:5173/test/1`}
          $width="100%"
        />
      )}
    </S.TestContainer>
  );
};

export default Test;
