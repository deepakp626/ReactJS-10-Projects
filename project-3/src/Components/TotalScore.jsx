import styled from 'styled-components'

const Div = styled.div`
    display: flex;
flex-direction: column;
align-items: center;
/* gap: 3px; */


`

const P = styled.p`
    color: #000;
font-size: 100px;
font-style: normal;
font-weight: 500;
line-height: 80px;
`
const TotalScore = ({score}) => {
  return (
    <div>
    <Div>
        <P>{score}</P>
        <P style={{fontSize:"24px"}}>Total Score</P>
    </Div>
    </div>
  )
}

export default TotalScore