import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  padding: 16px 40px;
  border-top: 1px solid #e1e1eb;
  border-bottom: 1px solid #e1e1eb;
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
`;
export const ListItem = styled.li`
  padding-right: 40px;
`;
export const Item = styled.a`
  display: block;

  color: #696d8c;
  &.active {
    position: relative;
    color: #060213;
    font-family: "Gelion Bold", -apple-system, "Segoe UI", "Roboto";

    :after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      left: 0;
      bottom: -17px;
      background: #6837ef;
    }
  }
`;
