import { Container, Form, Background } from './styles'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'



export function SignUp(){
  return(
    <Container>
      <Background />

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input 
          icon={FiUser}
          placeholder="Nome"
          type="text"
        />
        <Input 
          icon={FiMail}
          placeholder="E-mail"
          type="email"
        />
        <Input 
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />

        <Button 
          title="Entrar"
        />

        <Link to="/"> <FiArrowLeft /> Voltar para o login</Link>
      </Form>

    </Container>
  )
}