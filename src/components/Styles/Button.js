import styled from "styled-components";
const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"
export const Button = styled.button`
 text-decoation: none;
 max-width: auto;
 background-color: rgb(98 84 243);
 color: rgb(255 255 255);
 padding: 1.4rem 2.4rem;
 border: none;
 text-transform: uppercase;
 text-align: center;
 cursor: pointer;
 transition: all 0.3s ease;
 -webkit-transition: all 0.3s ease 0s;
 -max-transition: all 0.3s ease 0s;
 -o-transition: all 0.3s ease 0s;

 &:hover,
 &:active{
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({theme})=> theme.colors.shadowSupport};
    transform: scale(0.96);
 }

 a{
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
    
 }



`;