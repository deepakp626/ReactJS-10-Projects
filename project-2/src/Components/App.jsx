import Navigation from "./Navigation";
import Contact from "./Contact";
import { useState } from "react";
import Button from "./Button/Button";  
const   App = ()=>{
  const [form,setForm] = useState()
  return(
    <>
        <Navigation />
        <Button />
        <Contact  />
    </>
  )
}

export default App;