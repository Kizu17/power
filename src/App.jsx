import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Concert from './components/Concert'
import Gala from './components/Gala'
import Rangerz from './components/Rangerz'
import Art from './components/Art'
import About from './components/About'
import Podcast from './components/Podcast'
import Footfooter from './components/Footfooter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Main />
      <About />
      <Concert />
      <Gala />
      <Rangerz />
      <Art />
      <Podcast />
      <Footfooter />
    </>
  )
}

export default App
