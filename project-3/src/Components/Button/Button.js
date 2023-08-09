import styled from 'styled-components'

export const Button = styled.button`
display: flex;
width: 220px;
padding: 10px 18px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 5px;
background: #000;
border:none;
cursor:pointer;
color:white;
transition: all 0.3s  ease-in;


&:hover{
    background-color:white;
    border: 1px solid black;
    color:black;
    transition: all 0.3s ease-in;
}
`

export const OutLineBtn = styled(Button)`
background-color:white;
border: 1px solid black;
color:black;
transition: all 0.3s ease-in;

&:hover{
    background-color:black;
    border: 1px solid black;
    color:white;
}
`

