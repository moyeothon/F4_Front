// Personal.tsx

import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Dropdown from "@components/common/dropdown/Dropdown";
import HintText from "@components/common/hintText/HintText2";
import DateInput from "@components/common/input/DateInput";
import Input from "@components/common/input/Input";
import RadioGroup from "@components/common/radio/Radio";
import Textarea from "@components/common/textarea/Textarea";
import Button from "@components/common/button/Button";
import ImgInput from "@components/personal/ImgInput";
import { Container } from "@components/common/container/style";
import { instance } from "@apis/instance";

const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const parts = [
  { value: "design", label: "디자인" },
  { value: "backend", label: "백엔드" },
  { value: "frontend", label: "프론트엔드" },
  { value: "planning", label: "기획" },
];

const radioOptions = {
  radio1: [
    { value: "1", label: "Window" },
    { value: "2", label: "MacOS" },
  ],
  radio2: [
    { value: "1", label: "라이트모드" },
    { value: "2", label: "다크모드" },
  ],
  radio3: [
    { value: "1", label: "조용한 열람실" },
    { value: "2", label: "시끌시끌한 카페" },
  ],
  radio4: [
    { value: "1", label: "오프라인 모각코" },
    { value: "2", label: "온라인 모각코" },
  ],
  radio5: [
    { value: "1", label: "아침" },
    { value: "2", label: "야간" },
  ],
  radio6: [
    { value: "1", label: "계획적" },
    { value: "2", label: "즉흥적" },
  ],
  radio7: [
    { value: "1", label: "주기적 회의" },
    { value: "2", label: "필요할 때만 연락" },
  ],
};

const Personal: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    birth_date: "",
    phone: "",
    email: "",
    github_address: "",
    participation_field: "",
    location: "",
    affiliations: "",
    mbti: "",
    stack: "",
    preferred_os: "",
    editor_mode: "",
    work_environment: "",
    collaboration_environment: "",
    focus_time: "",
    project_style: "",
    communication_style: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await instance.patch(
        `/teams/${localStorage.getItem(
          "team_id"
        )}/profile/${localStorage.getItem("profile_id")}/update/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
            value={formData.user_name}
            onChange={(e) => handleChange("user_name", e.target.value)}
          />
          <DateInput />
          <Input
            label="연락처"
            essential
            hint=""
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <Input
            label="이메일"
            essential
            hint=""
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value.trim())}
          />
          <Input
            label="Github 이메일"
            essential
            hint=""
            value={formData.github_address}
            onChange={(e) =>
              handleChange("github_address", e.target.value.trim())
            }
          />
          <Dropdown
            label="참여 분야"
            essential={true}
            options={parts}
            selectedOption={formData.participation_field}
            onChange={(value) =>
              handleChange("participation_field", value.trim())
            } // Adjusted to use the value directly
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
            value={formData.affiliations}
            onChange={(e) => handleChange("affiliations", e.target.value)}
          />
          <Input
            label="MBTI"
            essential={false}
            hint=""
            value={formData.mbti}
            onChange={(e) => handleChange("mbti", e.target.value)}
          />
          <Textarea
            value={formData.stack}
            onChange={(e) => handleChange("stack", e.target.value)}
          />
          <RadioGroup
            label="선호하는 운영체제는?"
            options={radioOptions.radio1}
            selectedOption={formData.preferred_os}
            onChange={(value) => handleChange("preferred_os", value)}
          />
          <RadioGroup
            label="선호하는 코드 편집기 모드는?"
            options={radioOptions.radio2}
            selectedOption={formData.editor_mode}
            onChange={(value) => handleChange("editor_mode", value)}
          />
          <RadioGroup
            label="선호하는 작업 환경은?"
            options={radioOptions.radio3}
            selectedOption={formData.work_environment}
            onChange={(value) => handleChange("work_environment", value)}
          />
          <RadioGroup
            label="선호하는 협업 환경은?"
            options={radioOptions.radio4}
            selectedOption={formData.collaboration_environment}
            onChange={(value) =>
              handleChange("collaboration_environment", value)
            }
          />
          <RadioGroup
            label="개발할 때 집중이 더 잘되는 시간대는?"
            options={radioOptions.radio5}
            selectedOption={formData.focus_time}
            onChange={(value) => handleChange("focus_time", value)}
          />
          <RadioGroup
            label="선호하는 프로젝트 진행 방식은?"
            options={radioOptions.radio6}
            selectedOption={formData.project_style}
            onChange={(value) => handleChange("project_style", value)}
          />
          <RadioGroup
            label="선호하는 커뮤니케이션 방식은?"
            options={radioOptions.radio7}
            selectedOption={formData.communication_style}
            onChange={(value) =>
              handleChange("communication_style", value.trim())
            }
          />
          <Button type="submit" name="팀원들과 동기화하기" link="/test/1" />
        </InputForm>
      </Container>
    </>
  );
};

export default Personal;
