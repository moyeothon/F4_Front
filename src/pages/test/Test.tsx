import * as S from "./style";
import { CircleInfo } from "./_components/circle/CircleInfo";
import { usePageNumber } from "./_hooks/usePageNumber";
import { TEST_TEXT, TEST_BTN_TEXT } from "@constants/testText";
import { TestButton } from "./_components/button/TestButton";
import Button from "@components/common/button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "@apis/instance";

const Test: React.FC = () => {
  const { page } = usePageNumber();
  const navigate = useNavigate();
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

  const postData = async () => {
    try {
      await instance.post(
        `/teams/${localStorage.getItem(
          "team_id"
        )}/profiles/${localStorage.getItem("profile_id")}/answers/`,
        {
          question_id: page,
          answer_id: Math.floor(Math.random() * 4) + 1,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // 다음 버튼 클릭 시 선택된 내용 확인
  const handleNext = (path: string) => {
    postData();
    navigate(path);
  };

  return (
    <S.TestContainer>
      <S.Wrapper>
        <CircleInfo pageNumber={page} />
        <S.TextContainer>{TEST_TEXT[page - 1]}</S.TextContainer>
      </S.Wrapper>
      <S.Wrapper>
        {TEST_BTN_TEXT[page - 1].map((text, index) => (
          <TestButton
            text={text}
            key={index} // 각 버튼의 고유 키 설정
            $isActive={selectedContent[page - 1] === index} // 현재 페이지에서 클릭된 버튼인지 여부
            onClick={() => handleButtonClick(index)} // 클릭 핸들러
          />
        ))}
      </S.Wrapper>

      {page !== 5 ? (
        <Button
          name="다음"
          $width="100%"
          onClick={() => handleNext(`/test/${page + 1}`)}
        />
      ) : (
        <Button
          name="완료"
          $width="100%"
          onClick={() =>
            handleNext(
              `/invite/${localStorage.getItem(
                "team_id"
              )}/${localStorage.getItem("member_count")}/${
                Number(localStorage.getItem("profile_id")) + 1
              }`
            )
          }
        />
      )}
    </S.TestContainer>
  );
};

export default Test;
