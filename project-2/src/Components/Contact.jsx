import "./App.css";
import heroImg from "../assets/images/Service_img.png";
import callIcon from "../assets/svg/phone.svg";
import msgIcon from "../assets/svg/message.svg";
import blackMsgIcon from "../assets/svg/black-message.svg";
import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from "react-icons/hi"
import Button from "./Button/Button";
import { useState } from "react";
const Contact = () => {
  const [name,setName] = useState("deepak")
  const [email,setEmail] = useState("demp@gmail.com")
  const [text,setText] = useState("learning reactjs")

  const onSubmit =(event)=>{
    event.preventDefault();
    console.log(event.target)
    setName(event.target.name.value);
    setEmail(event.target.email.value)
    setText(event.target.textarea.value)
    console.log({name,email,text})
  }
  
  return (
    <>
      <section>
        <div className="heading">
          <h2 className="">CONTACT US</h2>
          <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "}
          </p>
        </div>
        <div className="hero-section">
        {/* hero text */}
          <div className="form-div">
            <div className="first-form">
              <div className="btn">
                <Button 
                // onClick={onViacallSubmit}
                text='VIA SUPPORT CHAT'
                icon={<MdMessage fontSize={"24px"} />}/>
                <Button 
                text='VIA CALL' 
                icon={<FaPhoneAlt fontSize={"24px"}/>}/>
              </div>
                <Button  isOutline={true} text="  VIA EMAIL FORM " icon={<HiMail fontSize={"24px"} />}/>
            </div>
            <form onSubmit={onSubmit}>
              <div className="form_controler">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div className="form_controler">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
              </div>
              <div className="form_controler">
                <label htmlFor="text">Textarea</label>
                <textarea name="textarea" />
              </div>
              <div className="submit">
                  <Button text="SUBMIT" />
              </div>
              <div>
                {
                  name + "    " + email + "    " + text + "    "
                }
              </div>
            </form>
          </div>
          {/* hero img */}
          <div>
            <div className="hero-img">
              <img src={heroImg} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
