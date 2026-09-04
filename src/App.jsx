import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import BoasVindas from './pages/boas-vindas/boas-vindas'
import EscolherJogador from './pages/escolher-jogador/escolher-jogador'
import Jogo from './pages/jogo/jogo'
import TelaFinal from './pages/tela-final/tela-final'


function App() {

  return (
    <Router>
      <Routes>
         <Route path='/' element={<BoasVindas/>}/>
         <Route path='/escolher-jogador' element={<EscolherJogador/>}/>
         <Route path='/jogo' element={<Jogo/>}/>
         <Route path='/tela-final' element={<TelaFinal/>}/>
      </Routes>
    </Router>
  )
}

export default App
