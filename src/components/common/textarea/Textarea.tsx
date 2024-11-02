import styled from "styled-components";

export default function Textarea() {
  return (
    <Container>
      <Title>개발 언어 / 스택</Title>
      <TextArea />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.label`
  color: #343a40;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.1px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  background: #fff;
  padding: 10px;
  resize: none;
  outline: none;
`;
