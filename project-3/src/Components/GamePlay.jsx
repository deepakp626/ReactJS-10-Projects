import styled from 'styled-components'
import {Button} from './Button/Button'
import { useState } from 'react'

const PlayGame = styled.div`
display: flex;
flex-direction: row;
max-width:1180px;
// padding: 180px 129px 154px 129px;
justify-content: center;
align-items: center;
// border:2px solid red;
height:100vh;
`
const H2 = styled.h2`
color: #000;
font-family: Poppins;
font-size: 96px;
font-style: normal;
font-weight: 700;
line-height: normal;`

const TextDiv = styled.div`
  display: flex;
flex-direction: column;
align-items: flex-end;
`


const GamePlay = (props) => {

  return (
    <>
        <PlayGame>
          <div>
            <img src={'public/images/dices.png'} />
          </div>
          <TextDiv>
              <H2>DICE GAME</H2>
              <Button onClick={props.startGame}> Play Game</Button>
          </TextDiv>
        </PlayGame>
    </>
  )
}

export default GamePlay