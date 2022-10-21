import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { CreateMovie } from '../pages/CreateMovie'
import { MoviePreview } from '../pages/MoviePreview'
import { Perfil } from '../pages/Perfil'

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createmovie" element={<CreateMovie />} />
      <Route path="/moviepreview/:id" element={<MoviePreview />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  )
}