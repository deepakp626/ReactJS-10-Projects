import React, { useEffect, useState } from 'react'
import { GrAdd} from 'react-icons/gr';
import {FiSearch} from 'react-icons/fi'
import AddandUpdate from './Components/AddandUpdate';
import Navigation from './Components/Navigation';
import ContactNotFound from './Components/ContactNotFound';
import ContactCard from './Components/ContactCard';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import useDisclouse from './hooks/useDisclouse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    const [contacts,setContacts] = useState([])
    const {isOpen,onClose,onOpen} = useDisclouse()

    useEffect(()=>{
        const getContact = async ()=>{
            try {
                // contactsRef ma database or jo database ma jo collection banaya hai uska name
                const contactsRef = collection(db,"contacts");
                // contactsSnapshot ma apna data rahatha hai pura response ka
                // const contactsSnapshot = await getDocs(contactsRef)

                onSnapshot(contactsRef,(snapshot)=>{
                  const contactLists = snapshot.docs.map((doc) => {
                    return {  id:doc.id, ...doc.data()}
                  });
                  console.log(contactLists)
                  setContacts(contactLists);
                  return contactLists;
                })
            } catch (error) {
              console.log(error)
            }
        }

        getContact()
    },[])

    const filterContact =(e)=>{
      const value = e.target.value;
      const contactsRef = collection(db,"contacts");

      onSnapshot(contactsRef,(snapshot)=>{
        const contactLists = snapshot.docs.map((doc) => {
          return { 
             id:doc.id, 
             ...doc.data()}
        });
        console.log(contactLists)
        const filteredContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))
        setContacts(filteredContacts);
        return contactLists;
      })
    }

  return (
    <>
    <div className='relative max-w-[24rem] h-[100vh] bg-[#323334] mx-auto pt-[0.5rem] '>
        <Navigation />
          <div className='flex gap-[0.75rem] justify-center items-center'>
              <div className='flex justify-center items-center rounded-[0.625rem] border-[1px] border-[#FFF]  gap-[0.62rem] pl-[0.62rem] py-[0.44rem]  ' >
                  <FiSearch className='min-w-[1.5rem] h-[1.5rem] text-white '/>
                  <input onChange={filterContact} className=' placeholder-white bg-transparent text-white outline-none ' placeholder='Search'  />
              </div>
              <div className='box-content p-[0.5rem]  rounded-[50%] bg-white'>
                  <GrAdd  className='text-[2rem] font-[600] cursor-pointer' onClick={onOpen}/>
              </div>
          </div>
        <AddandUpdate onClick={onOpen} className="pointer-cursor"  />
        <div className="mt-4 flex flex-col ">
          {
            contacts.length <= 0 ? 
              <ContactNotFound /> :
               contacts.map((contact) => ( <ContactCard key={contact.id} contact={contact} /> ))
          }
        </div>
        <AddandUpdate onClose={onClose} isOpen={isOpen} />
        <ToastContainer 
          position='bottom-center'
        />
    </div>
    </>
  )
}

export default App;