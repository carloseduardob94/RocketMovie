import { Link } from 'react-router-dom'
import { Input } from '../Input'
import { Container, Profile } from './styled'



export function Header(){
  return(
    <Container>
      <h2>RocketMovies</h2>
      <Input 
        placeholder="Pesquisar pelo título"
      />

      <Profile>
        <div>
          <Link to="/perfil">
            <span>Carlos Eduardo</span>
          </Link>
          <Link to="/">sair</Link>
        </div>
        <Link to="/perfil">
          <img src="https://github.com/carloseduardob94.png" alt="Foto do usuário" />   
        </Link>
      </Profile>
    </Container>
  )
}