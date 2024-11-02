// Personal.tsx

import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "@components/common/dropdown/Dropdown";
import HintText from "@components/common/hintText/HintText2";
import DateInput from "@components/common/input/DateInput";
import Input from "@components/common/input/Input";
import RadioGroup from "@components/common/radio/Radio";
import Textarea from "@components/common/textarea/Textarea";
import Button from "@components/common/button/Button";
import ImgInput from "@components/personal/ImgInput";
import { Container } from "@components/common/container/style";

const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const parts = [
  { value: "1", label: "기획" },
  { value: "2", label: "디자인" },
  { value: "3", label: "백엔드" },
  { value: "4", label: "웹 프론트엔드" },
  { value: "5", label: "AI" },
  { value: "6", label: "앱" },
];

const radioOptions = {
  radio1: [
    { value: "window", label: "Window" },
    { value: "MacOS", label: "MacOS" },
  ],
  radio2: [
    { value: "light", label: "라이트모드" },
    { value: "dark", label: "다크모드" },
  ],
  radio3: [
    { value: "quiet", label: "조용한 열람실" },
    { value: "noise", label: "시끌시끌한 카페" },
  ],
  radio4: [
    { value: "offline", label: "오프라인 모각코" },
    { value: "online", label: "온라인 모각코" },
  ],
};

const Personal: React.FC = () => {
  // 상태 객체에 모든 폼 데이터 관리
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    contact: "",
    location: "",
    affiliation: "",
    mbti: "",
    description: "",
    selectedOption: "",
    selectedRadio1: "",
    selectedRadio2: "",
    selectedRadio3: "",
    selectedRadio4: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("backendURL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("데이터 전송 실패");
      }
      alert("성공적으로 데이터가 제출되었습니다.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <HintText
          headline="내 정보 등록하기"
          paragraph="나는 어떤 사람인지 팀원들에게 알려주는 시간!"
        />
        <InputForm onSubmit={handleSubmit}>
          <ImgInput />
          <Input
            label="이름"
            essential
            hint=""
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <DateInput />
          <Input
            label="연락처"
            essential
            hint=""
            value={formData.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
          />
          <Dropdown
            label="참여 분야"
            essential={true}
            options={parts}
            selectedOption={formData.selectedOption}
            onChange={(value) => handleChange("selectedOption", value)}
            placeholder="파트를 선택해주세요."
          />
          <Input
            label="사는 곳"
            essential={false}
            hint="ex) 신림역, 서울대입구역 등.."
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
          <Input
            label="소속"
            essential
            hint=""
            value={formData.affiliation}
            onChange={(e) => handleChange("affiliation", e.target.value)}
          />
          <Input
            label="MBTI"
            essential={false}
            hint=""
            value={formData.mbti}
            onChange={(e) => handleChange("mbti", e.target.value)}
          />
          <Textarea
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
          <RadioGroup
            label="선호하는 운영체제는?"
            options={radioOptions.radio1}
            selectedOption={formData.selectedRadio1}
            onChange={(value) => handleChange("selectedRadio1", value)}
          />
          <RadioGroup
            label="선호하는 코드 편집기 모드는?"
            options={radioOptions.radio2}
            selectedOption={formData.selectedRadio2}
            onChange={(value) => handleChange("selectedRadio2", value)}
          />
          <RadioGroup
            label="선호하는 작업 환경은?"
            options={radioOptions.radio3}
            selectedOption={formData.selectedRadio3}
            onChange={(value) => handleChange("selectedRadio3", value)}
          />
          <RadioGroup
            label="선호하는 협업 환경은?"
            options={radioOptions.radio4}
            selectedOption={formData.selectedRadio4}
            onChange={(value) => handleChange("selectedRadio4", value)}
          />
          <Button type="submit" name="팀원들과 동기화하기" />
        </InputForm>
      </Container>
    </>
  );
};

export default Personal;
