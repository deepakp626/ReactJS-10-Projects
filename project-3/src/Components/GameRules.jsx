import styled from 'styled-components'

const Rule = styled.div`
display: flex;
padding: 20px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
background: #FBF1F1;
max-width:794px;
margin:auto;
border-radius: 10px;
`
const GameRules = () => {

  return (
    <>
    <Rule>
        <h2>How to play dice game</h2>
         <ul style={{listStyleType: 'none',padding:0}}>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
            <li>if you get wrong guess then  2 point will be dedcuted </li>
         </ul>
    </Rule>
    </>
  )
}

export default GameRules
