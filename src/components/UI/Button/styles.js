import styled from "styled-components";
export const Button = styled.button`
  background-color: #fafafa;
  padding: 10px 30px;
  border-radius: 8px;
  width: ${(props) => props.width || "100%"};
  color: ${(props) => (props.color ? props.color : "#fff")};
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};
`;
