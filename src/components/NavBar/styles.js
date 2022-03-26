import styled from "styled-components";

export const Wrapper = styled.div`
  width: 262px;
  height: 100%;
  min-height: 100vh;
`;
export const Container = styled.div`
  border-right: 1px solid #e1e1eb;
  height: 100%;
  position: fixed;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 221px;
  height: 60px;
  border: 1px solid #ecebf5;
  border-radius: 8px;
  margin: 20px 20px 0px;
  padding: 15px;
`;
export const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;
export const ProfileInfo = styled.div`
  margin-left: 11px;
`;
export const Email = styled.div`
  color: #696d8c;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0;
  width: 200px;
  &.dropdown {
    position: relative;
  }
`;
export const Item = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  color: #696d8c;

  &.active {
    font-family: "Gelion Bold", -apple-system, "Segoe UI", "Roboto";
    color: #6837ef;
    font-weight: 500;
  }
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
export const ItemIcon = styled.img`
  padding-right: 19px;
`;

export const SubList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 12px 12px 20px;
  position: absolute;
  left: 0;
  top: 30px;
`;
export const SubListItem = styled.li`
  width: 100%;
  padding: 5px 0;
`;
export const SubItem = styled.a`
  display: block;
  color: #696d8c;
  padding-left: 18px;

  &.active {
    font-family: "Gelion Bold", -apple-system, "Segoe UI", "Roboto";
    color: #060213;
    font-weight: 500;
    position: relative;

    :before {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      left: 0;
      top: 0;
      background: #ecebf5;
    }
  }
`;
