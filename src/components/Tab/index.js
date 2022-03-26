import React from "react";
import * as S from "./styles";

export default function Tab() {
  return (
    <S.Container>
      <S.List>
        <S.ListItem>
          <S.Item href="#" className="active">Efficiency</S.Item>
        </S.ListItem>
        <S.ListItem>
          <S.Item href="#">Volume</S.Item>
        </S.ListItem>
        <S.ListItem>
          <S.Item href="#">Customer Satisfaction</S.Item>
        </S.ListItem>
        <S.ListItem>
          <S.Item href="#">Backlog</S.Item>
        </S.ListItem>
      </S.List>
    </S.Container>
  );
}
