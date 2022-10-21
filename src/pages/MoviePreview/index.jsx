import { Container } from './styles'

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'


import { InfoMovie } from '../../components/InfoMovie'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function MoviePreview() {
  return(
    <Container>
      <Header />
      <main>
        <Link to="/"><FiArrowLeft /> Voltar</Link>
        <InfoMovie />

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius alias, laudantium et saepe, iusto inventore vitae voluptas dolorum nulla qui suscipit. Iste nam dignissimos reiciendis consequatur? Velit, cupiditate doloremque.
        </p>

      </main>
        <Button 
          type="button"
          title="Excluir Filme"
        />
    </Container>
  )
}