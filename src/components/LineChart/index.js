import React from "react";
import * as S from "./styles";
import { Chart } from "react-charts";

export default function LineChart({ defaultColors,title,graph }) {
  const data = [
    {
      label: title,
      data: graph
    },
  ];

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (value) => value.month,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (value) => value.sales,
        elementType: "line",
      },
    ],
    []
  );

  return (
    <S.Container>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          defaultColors,
        }}
      />
    </S.Container>
  );
}
