import { useState } from "react";
import styled from "styled-components";

export const SelectNumber = ({selectNumber,setSelectNumber,errorMsg,setError}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Div>
        <P>{errorMsg}</P>
        <NumberDiv>
          {arrayNumber.map((value, i) => {
            return (
              <LiItem
                isSelected={value === selectNumber}
                key={i}
                onClick={() => {setSelectNumber(value); setError("");}}
              >
                {value}
              </LiItem>
            );
          })}
        </NumberDiv>
        <h2>Select Number</h2>
      </Div>
    </>
  );
};


const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;
const NumberDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;
const LiItem = styled.li`
  display: flex;
  /* width: 72px;
height: 72px; */
  font-weight: 800;
  padding: 18px 26px 18px 31px;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid #000;
  background: #fff;
  cursor:pointer;
  background-color:${(props) => (props.isSelected ? "black":"white")};
  color:${(props) => (props.isSelected ? "white":"black")};
`;

const P = styled.p`
  color: red;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;