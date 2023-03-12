import "./App.css";
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './page/Home'
import Pokemons from './page/Pokemons'
import CardPokemons from './page/CardPokemons'

export default function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Pokemons/' element={<Pokemons/>}/>
        <Route path='/CardPokemons/:name' element={<CardPokemons/>}/>
      </Routes>
      <Footer/>
    </>
  )
}