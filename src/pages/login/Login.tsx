// Login.tsx
import Input from "@components/common/input/Input";
import DateInput from "@components/common/input/DateInput";
import HintText from "@components/common/hintText/HintText1";
import React from "react";
import styled from "styled-components";
import Button from "@components/common/button/Button";

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
  return (
    <>
      <Container>
        <HintText
          width="320px"
          headline="당신의 정보를 입력해주세요."
          paragraph="팀을 참가할 때 간단한 정보를 입력받아요."
        />
        <InputForm>
          <Input label="이름" essential hint="" />
          <DateInput />
        </InputForm>
      </Container>
      <ButtonLayout>
        <Button type="submit" link="" name="팀 참가하기" />
      </ButtonLayout>
    </>
  );
};

export default Login;
