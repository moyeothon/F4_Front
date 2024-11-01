import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 14px 10px;
  gap: 10px;
  border-radius: 20px;
  background: #bfd8af;

  @media (max-width: 360px) {
    width: 280px;
  }
`;

export const Img = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 27px;
`;

export const InformWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InformDetailWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Name = styled.h3`
  color: #343a40;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

export const Position = styled.p`
  color: #868e96;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: -0.5px;
`;

export const Part = styled.p`
  color: #495057;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.5px;
`;

export const DeactivatedContainer = styled.div`
  width: 350px;
  height: 80px;
  border-radius: 20px;
  border: 2px dashed #dee2e6;
  background: #fff;
  padding: 18px;

  @media (max-width: 360px) {
    width: 280px;
  }
`;

export const Hint = styled.p`
  color: #868e96;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5px;
`;
