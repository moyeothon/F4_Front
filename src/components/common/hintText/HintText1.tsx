import styled from "styled-components";

const HintTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HintTextHeadline2 = styled.h2<{ width?: string }>`
  width: ${({ width }) => width || "240px"};
  margin: 0 auto;
  color: #343a40;
  text-align: center;
  font-family: "Pretendard";
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.5px;
`;

const HintTextP1 = styled.p`
  color: #868e96;
  text-align: center;
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.1px;
`;

interface TextProps {
  headline: string;
  paragraph: string;
  width?: string;
}

const HintText1: React.FC<TextProps> = ({ headline, paragraph, width }) => {
  return (
    <HintTextWrapper>
      <HintTextHeadline2 width={width}>{headline}</HintTextHeadline2>
      <HintTextP1>{paragraph}</HintTextP1>
    </HintTextWrapper>
  );
};

export default HintText1;
