// Login.tsx
import Input from "@components/common/input/Input";
import DateInput from "@components/common/input/DateInput";
import HintText from "@components/common/hintText/HintText1";
import React from "react";
import styled from "styled-components";
import Button from "@components/common/button/Button";
import { instance } from "@apis/instance";

const Container = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonLayout = styled.div`
  position: relative;
  bottom: 10px;
`;

const Login: React.FC = () => {
  const handleNameChange = (data: string) => {
    localStorage.setItem("name", data);
  };
  const postData = async () => {
    for (let i = 0; i < 2; i++) {
      try {
        const response = await instance.post(
          `/teams/${localStorage.getItem("team_id")}/login/`,
          {
            user_name: localStorage.getItem("name"),
            birth_date: `${localStorage.getItem("year")}-${localStorage.getItem(
              "month"
            )}-${localStorage.getItem("day")}`,
          }
        );
        localStorage.setItem("profile_id", response.data.profile_id);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <Container>
        <HintText
          width="320px"
          headline="당신의 정보를 입력해주세요."
          paragraph="팀을 참가할 때 간단한 정보를 입력받아요."
        />
        <InputForm>
          <Input
            label="이름"
            hint=""
            onChange={(e) => {
              handleNameChange(e.target.value);
            }}
          />
          <DateInput />
        </InputForm>
      </Container>
      <ButtonLayout>
        <Button
          onClick={postData}
          type="submit"
          link={`/invite/${localStorage.getItem(
            "team_id"
          )}/${localStorage.getItem("member_count")}`}
          name="팀 참가하기"
        />
      </ButtonLayout>
    </>
  );
};

export default Login;
