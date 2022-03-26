import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  border-right: 1px solid #ecebf5;
  padding: 26px 24px;
  font-weight: 500;
  
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
export const Percentage = styled.span`
  padding: 4px 12px;
  color: #25bb87;
  background: rgba(37, 187, 135, 0.1);
  margin-left: 16px;
  border-radius: 4px;
`;
export const PriorityWrap = styled.div`
  border-right: 1px solid #e1e1eb;
  padding-right: 16px;
  display: flex;
  align-items: center;
`;
export const Priority = styled.span`
  width: 10px;
  height: 10px;

  border-radius: 2px;
  display: block;
  margin-right: 8px;
  background: ${(props) => (props.priority ? props.priority : "#f05d23")};
`;
export const Calender = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  width: 148px;
  border: 1px solid #e1e1eb;
  border-radius: 8px;
  margin-left: 16px;
`;
// background-color: #fafafa;
//   padding: 10px 30px;
//   border-radius: 8px;
//   width: ${(props) => props.width || "100%"};
//   color: ${(props) => (props.color ? props.color : "#fff")};
//   background-color: ${(props) =>
//     props.background ? props.background : "#fff"};
