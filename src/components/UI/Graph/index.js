import React from "react";
import * as S from "./styles";
import Calendar from "../../../assets/icons/calendar.png";

export default function Graph({
  children,
  priority,
  percentage,
  percentageColor,
  graphHeader,
}) {
  return (
    <S.Container>
      <S.Top>
        <S.Wrap>
          <h6>{graphHeader}</h6>
          <S.Percentage className="text-sm">{percentage}</S.Percentage>
        </S.Wrap>
        <S.Wrap>
          <S.PriorityWrap>
            <S.Priority priority={priority}></S.Priority>
            <span className="text-sm">High priority</span>
          </S.PriorityWrap>
          <S.Calender>
            <span className="text-sm">This Month</span>
            <img src={Calendar} alt="calender"/>
          </S.Calender>
        </S.Wrap>
      </S.Top>
      {children}
    </S.Container>
  );
}
