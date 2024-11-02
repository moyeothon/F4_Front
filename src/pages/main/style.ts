import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  color: #343a40;
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px; /* 111.111% */
  letter-spacing: -0.5px;
`;

export const Section = styled.div`
  height: 100vh;
`;

export const TitleSection = styled.div`
  position: absolute;
  width: 70%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;
`;

export const Background = styled.img`
  position: relative;
  width: 540px;
  height: 100%;
`;
