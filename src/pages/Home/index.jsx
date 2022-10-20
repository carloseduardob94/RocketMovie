import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { NoteMovie } from '../../components/NoteMovie'

import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <header>
            <h2>Meus filmes</h2>
            <Button type="button" icon={FiPlus} title="Adicionar filme" />
          </header>
          <div className="notes-movie">
            <NoteMovie />
            <NoteMovie />
            <NoteMovie />
          </div>
        </Content>
      </main>
     
    </Container>
  )
}
