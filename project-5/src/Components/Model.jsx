import React from 'react'
import { Formik, Form, Field } from 'formik'
import { AiOutlineClose } from 'react-icons/ai'
import { createPortal } from 'react-dom'


const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {
        isOpen && (
          <>
            <div  className='absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur border-2 border-red-500'>
            <div className="relative z-50 m-auto min-h-[200px] max-w-[80%]   bg-white p-4  border-2 border-blue-500">
                 <div className='flex justify-end'>
                    <AiOutlineClose onClick={onClose} className='selt-end text-2xl font-bold' />
                  </div>
                 {children}
               </div>
            </div>
          </>
        )
      }
    </>, document.getElementById("model-root"))
}

export default Model

// createPortal