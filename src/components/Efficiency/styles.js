import styled from "styled-components";
export const Container = styled.main`
  padding: 0 40px;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 32px 0;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
`;
export const InputField = styled.div`
  position: relative;
  width: 350px;
  padding-right: 24px;
`;
export const SearchImg = styled.img`
  position: absolute;
  top: 14px;
  left: 0;
  padding-left: 16px;
`;
export const Input = styled.input`
  background: transaparent;
  border-radius: 10px;
  border: 1px solid #e1e1eb;
  padding: 12px 16px 12px 53px;
  width: 100%;
  height: 44px;
`;
export const Filter = styled.div`
  background: transaparent;
  border-radius: 10px;
  border: 1px solid #e1e1eb;
  padding: 16px;
  width: 160px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FilterImg = styled.img`
  padding-left: 16px;
`;
export const Line = styled.div`
  width: 1px;
  background: #e1e1eb;
  height: 1px;
  padding: 0 16px;
  transform: rotate(90deg);
`;
export const NotificationWrap = styled.div`
  border-right: 1px solid #e1e1eb;
  padding-right: 16px;
  display: flex;
  align-items: center;
`;
export const Notification = styled.span`
  width: 16px;
  height: 16px;
  background: #f25a68;
  border-radius: 4px;
  color: white;
  margin: 0 8px 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
`;
export const Profile = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: block;
  border: 1px solid #6837ef;
  margin-right: 8px;
`;
export const Analytics = styled.div`
  display: flex;
  border: 1px solid #ecebf5;
  border-radius: 10px;
  height: 314px;
  margin-bottom: 24px;
  :last-child {
    margin-bottom: 0;
  }
`;
export const TimeWrap = styled.div`
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
