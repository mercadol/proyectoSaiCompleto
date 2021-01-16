import { Micomponenteprueba } from "../Micomponenteprueba"
import { Navigator } from "../Navigator"
import { Container, Content } from "./styles"
import { Router } from "@reach/router"
import { ListPersonas } from "../ListPersonas"
import { Persona } from "../Persona"

export const Header = ()=>{
  return(
    <header>
    <Container>
      <Content>
      <Navigator />
      <Router>
      <Micomponenteprueba path='/' />
      <Micomponenteprueba path='/prueba/' />
      <ListPersonas path='/personas/' />
      <Persona path='/persona'/>
      </Router>
      </Content>
    </Container>
    </header>
  )
}