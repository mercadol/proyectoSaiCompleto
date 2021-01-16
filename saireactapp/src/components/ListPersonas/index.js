import { Link } from "@reach/router"
import { BodyTable } from "./styles"

export const ListPersonas = () =>{
  return(
    <BodyTable>
      <div className="contentable">
        <h2>Tabla de personas</h2>
        <table className="width200">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Dni</th>
              <th>fecha</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mart&iacute;n</td>
            <td>Iglesias Lenci</td>
            <td>11111111</td>
            <td>10/9/2015</td>
            <td><Link to="/persona/"> ver/editar/borrar </Link></td>
          </tr>
          <tr>
            <td>Mart&iacute;n</td>
            <td>Iglesias Lenci</td>
            <td>11111111</td>
            <td>10/9/2015</td>
            <td><Link to="/persona/"> ver/editar/borrar </Link></td>
          </tr>
          <tr>
            <td>Mart&iacute;n</td>
            <td>Iglesias Lenci</td>
            <td>11111111</td>
            <td>10/9/2015</td>
            <td><Link to="/persona/"> ver/editar/borrar </Link></td>
          
          </tr>
          </tbody>
        </table>
      </div>
    </BodyTable>
  )
}
