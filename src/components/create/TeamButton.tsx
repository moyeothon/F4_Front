import { useState } from "react";
import * as S from "./style";

export default function TeamButton() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <S.Container>
      <S.Button onClick={decrement} disabled={count === 0}>
        -
      </S.Button>
      <S.PersonNum>{count} 명</S.PersonNum>
      <S.Button onClick={increment}>+</S.Button>
    </S.Container>
  );
}
