import { useState } from 'react'
import './App.css'
import { styled } from 'styled-components'
import GamePlay from './Components/GamePlay'
import StartGame from './Components/StartGame'

const App = () =>{
  const [start, setStart] = useState({play:true})
  const startGame = (event)=>{
    setStart({play:false})
  }
  return (
    <div>
      {
       (start.play == true)? <GamePlay startGame={startGame}  /> : <StartGame />
      }
    </div>
  )
}

export default App


const Div = styled.div`
  display: flex;
align-items: center;
gap: 593px;
`

const Container = styled.div`
  display: inline-flex;
padding: 64px 80px 144px 80px;
flex-direction: column;
align-items: center;
gap: 48px;
`