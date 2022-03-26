import React from "react";
import Efficiency from "../components/Efficiency";
import NavBar from "../components/NavBar";
import Tab from "../components/Tab";
import TopBar from "../components/TopBar";
import * as S from "./styles";


export default function Dashboard() {
  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <header>
          <TopBar />
          <Tab />
        </header>
        <Efficiency />
      </S.Main>
    </S.Container>
  );
}
