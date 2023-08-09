import { React, useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import { SelectNumber } from "./SelectNumber";
import RoleDice from "./RoleDice";
import { Button, OutLineBtn } from "./Button/Button";
import GameRules from "./GameRules";

const StartGame = () => {
  const [showRule, setShowRule] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [selectNumber, setSelectNumber] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber =(min,max)=>{
    return Math.floor(Math.random() *(max - min) *min);
  }
  const roleDice =()=>{
    const randomNumber = generateRandomNumber(1,7);
    (selectNumber === 0) ? setError("You have not selected any number") : setError("")
    
    // if number is not selected return execution
    if(selectNumber ===0 ) return;
    
    if(selectNumber == randomNumber){
       setScore((prev)=> prev + randomNumber)
    }else{
      setScore((prev)=> prev - randomNumber)
    }
    setCurrentDice((prev)=> randomNumber)

    // re-set user number selected
    setSelectNumber(0)
}

  const reSetAll = (para) => {
    setScore(0) 
    setError("")
    setSelectNumber(0)
    setCurrentDice(1)
  };

  return (
    <MainDiv style={{ height: "100vh" }}>

      <ScoreDiv>
        <TotalScore score={score} />
        <SelectNumber
          errorMsg={error}
          setError={setError}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </ScoreDiv>

      <DiceDiv>
        <RoleDice  
        roleDice={roleDice}
        currentDice={currentDice}  
        />

        <OutLineBtn onClick={reSetAll}>Reset Score</OutLineBtn>
        <Button onClick={()=>setShowRule((prev) => !prev)}>
          {showRule ? "Hide" : "Show"} Rules
        </Button>

      </DiceDiv>

      {showRule === true ? <GameRules /> : ""}
    </MainDiv>
  );
};

export default StartGame;

const MainDiv = styled.div`
  display: inline-flex;
  /* padding: 64px 80px 144px 80px; */
  padding:0px 80px;
  padding-top: 64px;
  padding-bottom: 144px;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  /* gap: 48px; */
  /* border:2px solid red; */
`;

const ScoreDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing:border-box
`;
const DiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  margin: auto;
  margin-bottom: 64px;
`;
