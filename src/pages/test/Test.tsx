import * as S from "./style";
import { CircleInfo } from "./_components/circle/CircleInfo";
import { usePageNumber } from "./_hooks/usePageNumber";
import { useUserProfile } from "@hooks/useUserProfile";
import { TEST_TEXT, TEST_BTN_TEXT } from "@constants/testText";
import { TestButton } from "./_components/button/TestButton";
import Button from "@components/common/button/Button";
import { useState } from "react";

const Test: React.FC = () => {
  const { page } = usePageNumber();
  const { error } = useUserProfile();

  // 각 페이지에서 선택된 버튼 인덱스를 저장하는 배열
  const [selectedContent, setSelectedContent] = useState<number[]>([
    -1, -1, -1, -1, -1,
  ]);

  // 버튼 클릭 핸들러
  const handleButtonClick = (index: number) => {
    const newContent = [...selectedContent]; // 이전 상태 복사
    newContent[page - 1] = index; // 현재 페이지에 해당하는 인덱스 업데이트
    setSelectedContent(newContent); // 상태 업데이트
  };

  // 다음 버튼 클릭 시 선택된 내용 확인
  const handleNext = () => {
    console.log(selectedContent[page - 1]);
    // 필요한 추가 로직을 여기에 작성
  };

  return (
    <S.TestContainer>
      <S.Wrapper>
        <CircleInfo pageNumber={page} />
        <S.TextContainer>
          {error}
          {TEST_TEXT}
        </S.TextContainer>
      </S.Wrapper>
      <S.Wrapper>
        {TEST_BTN_TEXT.map((text, index) => (
          <TestButton
            text={text}
            key={index}
            $isActive={selectedContent[page - 1] === index} // 현재 페이지에서 클릭된 버튼인지 여부
            onClick={() => handleButtonClick(index)} // 클릭 핸들러
          />
        ))}
      </S.Wrapper>

      {page !== 5 ? (
        <Button
          name="다음"
          link={`/test/${page + 1}`}
          $width="100%"
          onClick={handleNext}
        />
      ) : (
        <Button
          name="완료"
          $width="100%"
          type="submit"
          onClick={() => {
            console.log("최종 선택된 내용:", selectedContent); // 최종 선택된 버튼의 인덱스 출력
          }}
          link="/invite"
        />
      )}
    </S.TestContainer>
  );
  // TODO - 25개 데이터 가지고 있기
  // TODO - mapping해서 서버에 등록해주기
};

export default Test;
