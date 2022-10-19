import { Container, Form, Section } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Tags } from '../../components/Tags'
import { Button } from '../../components/Button'

export function CreateMovie(){
  return(
    <Container>
      <Header /> 

      <main>
        <Form>
          <header>
            <a href="#"><FiArrowLeft /> Voltar</a>
            <h2>Novo filme</h2>
          </header>

          <div className="inputs">
            <Input 
              type="text"
              placeholder="Título"
            />
            <Input 
              type="number"
              placeholder="Sua nota (de 0 a 10)"
            />
          </div>

          <TextArea 
            placeholder="Observações"
          />

          <Section>
            <h3>Marcadores</h3>
            
            <div className="tags">
              <Tags value="React" />
              <Tags isNew placeholder="Novo marcador" />
            </div>

          </Section>
          
            <div className="buttons">
              <Button 
                title="Excluir filme"
              />
              <Button 
                title="Salvar alterações"
              />
            </div>

        </Form>
      </main>
    </Container>
  )
}