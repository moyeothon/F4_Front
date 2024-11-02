import * as S from "./style";
import { useNavigate } from "react-router-dom";

interface CircleInfoProps {
  pageNumber: number;
}

export const CircleInfo: React.FC<CircleInfoProps> = ({ pageNumber }) => {
  const navigate = useNavigate();
  return (
    <S.CircleContainer>
      {[1, 2, 3, 4, 5].map((number) => (
        <S.Circle
          key={number}
          $activePage={pageNumber === number}
          onClick={() => navigate(`/test/${number}`)}
        >
          {number}
        </S.Circle>
      ))}
    </S.CircleContainer>
  );
};
