import { createGlobalStyle } from "styled-components";
import Gelion from "./assets/fonts/Gelion-Regular.ttf";
import GelionBold from "./assets/fonts/Gelion-SemiBold.ttf";

const Styles = createGlobalStyle`
 @font-face {
   font-family: 'Gelion Bold';
   src: url(${GelionBold});
}
 @font-face {
   font-family: 'Gelion';
   font-weight:400;
   src: url(${Gelion});
}

   *{
      margin:0;
      padding:0;
      box-sizing: border-box;
     :focus {
      outline: none;
   }
   body {
      font-family: 'Gelion',-apple-system, 'Segoe UI', 'Roboto';
      border: 0;
      outline: 0;
      overflow-x: hidden;
      color: #060213;
      font-size: 16px;
      line-height: 24px;
      
   }
   ul{
      list-style: none;
   }
   a {
      text-decoration: none;
      outline: none;
      color: #696D8C;
      transition: color 0.2s ease-in;
      :hover,a.active {
         color: #6837EF;
      }
   }
   h2{
      font-size: 24px;
      line-height: 38.4px;
       font-family: 'Gelion Bold',-apple-system, 'Segoe UI', 'Roboto';
       font-weight: 500;
   }
   h4{
      font-size: 20px;
      line-height: 32px;
       font-family: 'Gelion Bold',-apple-system, 'Segoe UI', 'Roboto';
       font-weight: 500;
   }
   h6{
      font-size: 18px;
      line-height: 26px;
       font-family: 'Gelion Bold',-apple-system, 'Segoe UI', 'Roboto';
       font-weight: 500;
   }
   .text-base {
      font-size: 14px;
      line-height: 22px;
   } 
   .text-sm {
      font-size: 12px;
      line-height: 20px;
   } 
   input, button {
      font-family: inherit;
      font-size: inherit;
      outline: none;
      background: transparent; 
   }
   button {
      cursor:pointer;
      transition: 0.2s ease-in;
      border: none;
   }
`;

export default Styles;
