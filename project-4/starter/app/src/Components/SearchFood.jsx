import { styled } from "styled-components"
const SearchFood = ({data,setFilterData}) => {
  const foodSearch =(event)=>{
     let search = event.target.value.toUpperCase().trim();
     if(search === ""){
        setFilterData(data)
        return;
     }
      const newData= data.filter((obj)=>{
          if(obj.name.toUpperCase().includes(search) ) return obj;
      })
      setFilterData(newData)
  }
  return (
    <div>
        <Input onInput={foodSearch} placeholder="Search Food...." />
    </div>
  )
}

export default SearchFood;

const Input = styled.input`
      padding: 11px 15px 10px 15px;
border-radius: 5px;
border: 1px solid #FF0909;
background:transparent;
outline:none;

color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`