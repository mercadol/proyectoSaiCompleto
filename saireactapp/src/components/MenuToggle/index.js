import { MenuComponent } from "../Menu"
import { Checkbox, MenuToggle } from "./styles"

export const MenuToggleComponent = () => {
  return(<MenuToggle>
    <Checkbox />
    <span></span>
    <span></span>
    <span></span>
    <MenuComponent/>
  </MenuToggle>)
}
