import { Container, Form, Avatar } from './styles'

import { FiArrowLeft, FiCamera, FiMail, FiUser, FiLock } from 'react-icons/fi'

import{ Input } from '../../components/Input'
import{ Button } from '../../components/Button'

export function Perfil(){
  return(
    <Container>
      <header>
        <a href=""><FiArrowLeft /> Voltar</a>
      </header>

      <main>
        <Form>
          <Avatar>
            <img src="https://github.com/carloseduardob94.png" alt="Foto do usuário" />
            <label htmlFor="avatar">
              <FiCamera />
              <input 
                type="file" 
                id="avatar"
              />
            </label>
          </Avatar>

          <Input 
            type="text"
            icon={FiUser}
            placeholder="Nome de usuário"
          />
          <Input 
            type="email"
            icon={FiMail}
            placeholder="E-mail do usuário"
          />
          <Input 
            type="password"
            icon={FiLock}
            placeholder="Senha atual"
          />
          <Input 
            type="password"
            icon={FiLock}
            placeholder="Nova Senha"
          />
          
          <Button
            type="button"
            title="Salvar" 
          />
        </Form>
      </main>
    </Container>
  )
}