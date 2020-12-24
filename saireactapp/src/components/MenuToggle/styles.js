import styled from "styled-components";

export const MenuToggle = styled.div`
display: flex;
flex-direction: column;
position: relative;
top: 25px;
left: 25px;
z-index: 1;
-webkit-user-select: none;
user-select: none;
span
{
  display: flex;
  width: 29px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: #ffffff;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 5px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
};
span:first-child{
    transform-origin: 0% 0%;
};
span:nth-last-child(2)
{
  transform-origin: 0% 100%;
};
input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-3px, -1px);
  background: #36383F;
};
input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
};
input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
};
input:checked ~ ul
{
  transform: none;
}
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: flex;
  width: 40px;
  height: 32px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  
`
