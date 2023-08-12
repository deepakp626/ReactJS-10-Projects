import { useState } from "react";
import Styled, { styled } from "styled-components";
import "./App.css";
import logo from "../public/Logo/FoodyZone.svg";
import Food from "./Components/Food";
import Input from "./Components/SearchFood";
import { useEffect } from "react";

const BASE_URL = "http://localhost:9000/"

const App = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoader] = useState("LOADING");
  const [error, setError] = useState(null);
  const allBtn = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
    {
      name: "MidNight",
      type: "midNight",
    },
  ];
  const show = (event) => {
    let type = event.target.attributes.getNamedItem("type").value;
    let newData = data.filter((obj) => {
      if (type == "all") {
        return data;
      } else if (obj.type === type) {
        return obj;
      }
    });
    setFilterData(newData);
  };

  useEffect(()=>{
    const fetchData = async () => {
      setLoader("LOADING ...")
      try{
        let res = await fetch(BASE_URL);
        res = await res.json();
        setData(res)
        setFilterData(res)
      }catch(error){
         setError("Unabal to fetch data ...")
      }
      setLoader("")
    };
    fetchData()
  },[])

  const Btn = allBtn.map((value, i) => {
    return (
      <button type={value.type} key={i} 
        onClick={show}>
        {value.name}
      </button>
    );
  });
   if(error) return <div>{error}</div>
   if(loading) return <div>Loading ...</div>
  return (
    <>
      <Container>
        <TopSection>
          <div className="search">
            <div>
              <img src={logo} />
            </div>
            <div className="input">
              <Input data={data} setFilterData={setFilterData}/>
            </div>
          </div>
        </TopSection>
        <FilterDiv className="btn">{Btn}</FilterDiv>
      </Container>
        <Main>
            <Food  food={filterData} />
        </Main>
    </>
  );
};
export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = Styled.div`
  display: flex;
width: 100%;
/* height:241px; */
padding: 70px 120px 31px 120px;
flex-direction: column;
justify-content: flex-end;
align-items: center;
gap: 54px;
box-sizing:border-box;
background-color:#FFFFFF;
background: rgba(13, 13, 13, 0.76);

.search{
   display:flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap:wrap;
   width:100%;
}
::placeholder{
  color:white;
}
`;

const FilterDiv = styled.div`
  display:flex;
  gap:14px;
  justify-content: center;
  padding-bottom: 31px;
background: rgba(13, 13, 13, 0.76);
  
button{
  border-radius: 5px;
background: #FF4343;
padding: 6px 12px;
cursor:pointer;
border:none;
color:white;
&:focus{
  opacity:0.7;
  outline: 1px solid white;
}
&:hover{
  opacity:0.7;
}
}
`
const Main = Styled.main`
    max-width: 100%;
    /* height: cals(100vh - 54px); */
    min-height:100vh;
  background: url('../background/background.png');
  background-repeat: no-repeat;
  justify-content:center;
`;
