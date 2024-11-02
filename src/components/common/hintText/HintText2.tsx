import styled from "styled-components";

const HintTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HintTextHeadline2 = styled.h2`
  color: #343a40;
  font-family: "Pretendard";
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.5px;
`;

const HintTextP1 = styled.p`
  /* width: 300px; */
  color: #868e96;
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  @media (max-width: 360px) {
    width: 280px;
  }
  white-space: pre-line;
`;

interface TextProps {
  headline: string;
  paragraph: string;
}

const HintText2: React.FC<TextProps> = ({ headline, paragraph }) => {
  return (
    <HintTextWrapper>
      <HintTextHeadline2>{headline}</HintTextHeadline2>
      <HintTextP1>{paragraph}</HintTextP1>
    </HintTextWrapper>
  );
};

export default HintText2;
