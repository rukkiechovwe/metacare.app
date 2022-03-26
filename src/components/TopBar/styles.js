import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 40px;
`;
export const InputField = styled.div`
  position: relative;
  width: 441px;
`;
export const SearchImg = styled.img`
  position: absolute;
  top: 17px;
  right: 0;
  padding-right: 16px;
`;
export const Input = styled.input`
  background: #fafafc;
  border-radius: 10px;
  border: none;
  padding: 12px 50px 12px 16px;
  width: 100%;
  height: 54px;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e1e1eb;
  border-radius: 8px;
  padding: 8px 16px;
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
