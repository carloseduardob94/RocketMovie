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
          <a href="#">
            <span>Carlos Eduardo</span>
          </a>
          <a href="#">sair</a>
        </div>
        <a href="#">
          <img src="https://github.com/carloseduardob94.png" alt="Foto do usuário" />   
        </a>
      </Profile>
    </Container>
  )
}