import { Container } from './styles'

import { FiStar } from 'react-icons/fi'

import{ SmallTag } from '../SmallTag'

export function NoteMovie(){
  return(
    <Container>
      <h2>Interestellar</h2>
      <div className="star-icons">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa explicabo mollitia nihil dicta optio, earum ab, tenetur aut deleniti rem cupiditate dolore perferendis inventore aliquam. Odio, pariatur! Placeat, quaerat.lorem ipsum dolor sit amet consectetur adipisicing el</p>
      <div className="tags">
        <SmallTag title="Ficção Científica" />
        <SmallTag title="Drama" />
        <SmallTag title="Família" />
      </div>
    </Container>
  )
}