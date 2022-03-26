import React from "react";
import * as S from "./styles";

export default function Time({ title, time }) {
  return (
    <S.Container>
      <S.Text className="text-base">{title}</S.Text>
      <S.Time>{time}</S.Time>
    </S.Container>
  );
}
