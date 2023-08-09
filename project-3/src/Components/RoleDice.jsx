import styled from 'styled-components'

const RoleDice = ({currentDice,roleDice}) => {
  return (
    <Div>
        <div  className='dice'
        onClick={roleDice}
        >
            <img src={`/images/dice/dice_${currentDice}.png`} />
        </div>
        <p>Click on Dice to roll</p>
    </Div>
  )
}

export default RoleDice



const Div = styled.div`
    display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
   .dice{
    cursor:pointer;
   }
`