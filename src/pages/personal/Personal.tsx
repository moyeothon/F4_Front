// Personal.tsx

import Dropdown from "@components/common/dropdown/Dropdown";
import HintText from "@components/common/hintText/HintText2";
import DateInput from "@components/common/input/DateInput";
import Input from "@components/common/input/Input";
import RadioGroup from "@components/common/radio/Radio";
import Textarea from "@components/common/textarea/Textarea";
import Button from "@components/common/button/Button";
import ImgInput from "@components/personal/ImgInput";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const parts = [
  { value: "1", label: "기획" },
  { value: "2", label: "디자인" },
  { value: "3", label: "백엔드" },
  { value: "4", label: "웹 프론트엔드" },
  { value: "4", label: "AI" },
  { value: "4", label: "앱" },
];

const radio1 = [
  { value: "window", label: "Window" },
  { value: "MacOS", label: "MacOS" },
];

const radio2 = [
  { value: "light", label: "라이트모드" },
  { value: "dark", label: "다크모드" },
];

const radio3 = [
  { value: "quiet", label: "조용한 열람실" },
  { value: "noise", label: "시끌시끌한 카페" },
];

const radio4 = [
  { value: "offline", label: "오프라인 모각코" },
  { value: "online", label: "온라인 모각코" },
];

const Personal: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRadio1, setSelectedRadio1] = useState("");
  const [selectedRadio2, setSelectedRadio2] = useState("");
  const [selectedRadio3, setSelectedRadio3] = useState("");
  const [selectedRadio4, setSelectedRadio4] = useState("");
  return (
    <>
      <Container>
        <HintText
          headline="내 정보 등록하기"
          paragraph="나는 어떤 사람인지 팀원들에게 알려주는 시간!"
        />
        <InputForm>
          <ImgInput />
          <Input label="이름" essential hint="" />
          <DateInput />
          <Input label="연락처" essential hint="" />
          <Dropdown
            label="참여 분야"
            essential={true}
            options={parts}
            selectedOption={selectedOption}
            onChange={setSelectedOption}
            placeholder="파트를 선택해주세요."
          />
          <Input
            label="사는 곳"
            essential={false}
            hint="ex) 신림역, 서울대입구역 등.."
          />
          <Input label="소속" essential hint="" />
          <Input label="MBTI" essential={false} hint="" />
          <Textarea />
          <RadioGroup
            label="선호하는 운영체제는?"
            options={radio1}
            selectedOption={selectedRadio1}
            onChange={setSelectedRadio1}
          />
          <RadioGroup
            label="선호하는 코드 편집기 모드는?"
            options={radio2}
            selectedOption={selectedRadio2}
            onChange={setSelectedRadio2}
          />
          <RadioGroup
            label="선호하는 작업 환경은?"
            options={radio3}
            selectedOption={selectedRadio3}
            onChange={setSelectedRadio3}
          />
          <RadioGroup
            label="선호하는 협업 환경은?"
            options={radio4}
            selectedOption={selectedRadio4}
            onChange={setSelectedRadio4}
          />
        </InputForm>
        <Button link="#" name="팀원들과 동기화하기" />
      </Container>
    </>
  );
};

export default Personal;
