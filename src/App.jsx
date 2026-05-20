import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Navbar from './components/Navbar'


export default function App() {
  return (
    <div>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}