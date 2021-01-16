import { Link } from "@reach/router"
import { Menu } from "./styles"

export const MenuComponent = () => {
    return(
        <Menu>
            <li><Link to="/">Home</Link></li>
            <li><Link to="personas">Lista de Personas</Link></li>
            <li><a href="error404.html">Error 404</a></li>
            <li><a href="formulario.html">Formularios</a></li>
        </Menu>
    )
}