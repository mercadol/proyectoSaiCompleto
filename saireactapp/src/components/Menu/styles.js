import styled from "styled-components";

export const Menu = styled.ul`
  padding: 0;
  list-style-type: none;
  position: absolute;
  width: 180px;
  height: 400px;
  box-shadow: 0 0 10px #85888C;
  margin: -50px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background-color: #F5F6FA;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  li
  {
    padding: 10px 0;
    transition-delay: 2s;
  };
`