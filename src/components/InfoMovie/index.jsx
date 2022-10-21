import { Container, Description, Genres, Title } from './styles'

import { FiStar, FiPieChart } from 'react-icons/fi'

import { SmallTag } from '../SmallTag'

export function InfoMovie(){
  return(
    <Container>
      <Title>
        <h1>Interestellar</h1>
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </Title>

      <Description>
        <p><img src="https://github.com/carloseduardob94.png" alt="Foto do usuário" /> Por Carlos Eduardo </p>
        <p><FiPieChart /> 23/05/22 as 08:00</p>
      </Description>
      <Genres>
        <SmallTag title="Ficção Científica" />
        <SmallTag title="Drama"/>
        <SmallTag title="Família"/>
      </Genres>
    </Container>
  )
}