import React from "react";
import * as S from "./styles";

export default function Button({
  children,
  onClick,
  color,
  background,
  width,
  disabled,
}) {
  return (
    <S.Button
      color={color}
      width={width}
      onClick={onClick}
      background={background}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
}
