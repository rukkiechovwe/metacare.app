import React from "react";
import * as S from "./styles";
import Calendar from "../../assets/icons/calendar-nav.png";
import Message from "../../assets/icons/message.png";
import Time from "../../assets/icons/time.png";
import User from "../../assets/icons/user.png";
import Shape from "../../assets/icons/shape.png";
import Arrow from "../../assets/icons/arrow-right.png";
import ArrowDown from "../../assets/icons/arrow-down-nav.png";

export default function NavBar() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Profile>
          <S.ProfileImg></S.ProfileImg>
          <S.ProfileInfo>
            <h6 className="text-base">Metacare</h6>
            <S.Email className="text-sm">adeyinka@metacare.app</S.Email>
          </S.ProfileInfo>
        </S.Profile>
        <S.List>
          <S.ListItem>
            <S.Item href="#">
              <S.ItemIcon src={User} alt="user" />
              Admin
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          <S.ListItem>
            <S.Item href="#">
              <S.ItemIcon src={Shape} alt="shape" />
              Knowledge Base
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          <S.ListItem>
            <S.Item href="#">
              <S.ItemIcon src={Shape} alt="shape" />
              Train SAM
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          <S.ListItem>
            <S.Item href="#">
              <S.ItemIcon src={Calendar} alt="calendar" />
              Agent Inbox
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          <S.ListItem>
            <S.Item href="#">
              <S.ItemIcon src={Time} alt="time" />
              Help Center
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>

          <S.ListItem className="dropdown">
            <S.Item href="#" className="active">
              <S.ItemIcon src={Message} alt="message" />
              Analytics
            </S.Item>
            <img src={ArrowDown} alt="arrow" />

            <S.SubList>
              <S.SubListItem>
                <S.SubItem href="#" className="active">
                  Teams
                </S.SubItem>
              </S.SubListItem>
              <S.SubListItem>
                <S.SubItem href="#">Knowledge Base</S.SubItem>
              </S.SubListItem>
              <S.SubListItem>
                <S.SubItem href="#">Training SAM</S.SubItem>
              </S.SubListItem>
              <S.SubListItem>
                <S.SubItem href="#">Help Center</S.SubItem>
              </S.SubListItem>
            </S.SubList>
          </S.ListItem>
        </S.List>
      </S.Container>
    </S.Wrapper>
  );
}
