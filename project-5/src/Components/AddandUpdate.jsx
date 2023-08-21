import React, { useState } from 'react'
import { Formik, Form, Field ,ErrorMessage} from 'formik';
import Model from './Model'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape(
  {
    name:Yup.string().required("Name is required"),
    email:Yup.string().email("Invalid Email").required("Email is required"),
  }
)


const AddandUpdate = ({ isOpen, onClose, isUpdate, contact }) => {

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts")
      await addDoc(contactRef, contact)
      onClose();
      toast.success("Contact Added successfully")
    } catch (error) {
      console.log("error", error)
    }
  }

  const updateContact = async (contact,id) => {
    try {
      const contactRef = doc(db, "contacts",id)
      await updateDoc(contactRef, contact)
      onClose();
      toast.success("Contact Updated successfully")
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <>
      <div>
        <Model isOpen={isOpen} onClose={onClose} >
          <Formik initialValues={isUpdate ? {  name: contact.name, email: contact.email } : 
          {
             name: "", email: "" 
          }
        }
            onSubmit={(value) => {
              console.log(value)
              isUpdate ?
              updateContact(value, contact.id) :
              addContact(value)
            }}
            
            validationSchema={contactSchemaValidation}
            >
            <Form className=' w-full bg-white space-y-[1.25rem] p-4 rounded-[0.5rem] flex flex-col '>

              <div className='flex flex-col gap-[0.5rem]'>
                <label htmlFor='name' >Name</label>
                <Field name='name' className='text-[1rem] font-normal py-[0.62rem] pl-[0.88rem] border-[1px] border-black ' placeholder='' />
                <div className='text-sm text-red-500'>
                <ErrorMessage name='name' />
                </div>
              </div>
              <div className='flex flex-col gap-[0.5rem]'>
                <label htmlFor='name' >Email</label>
                <Field name='email' className='text-[1rem] font-normal py-[0.62rem] pl-[0.88rem] border-[1px] border-black ' placeholder='' />
                <div className='text-sm text-red-500'>
                <ErrorMessage name='email' />
                </div>
              </div>
              <button type='submit' className='self-end px-[0.75rem] py-[0.38rem] text-[1rem] font-normal rounded-[0.3125rem]  bg-orange '>
                {isUpdate ? "Update" : "Add"} Contact</button>
              {/* <div className=' flex justify-end'>
              </div> */}
            </Form>
          </Formik>
        </Model>
      </div>
    </>
  )
}

export default AddandUpdate