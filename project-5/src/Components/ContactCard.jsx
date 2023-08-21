import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { BiSolidContact } from 'react-icons/bi'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import AddandUpdate from './AddandUpdate'
import useDisclouse from '../hooks/useDisclouse'
import { toast } from 'react-toastify'

const Contactcard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse()

  const deleteContact = async (id) => {
    try {
      // delete ka liya deleteDoc function ko call karega 
      // doc functio ma db or collection name or id jo delete karna hai
      await deleteDoc(doc(db, "contacts", id))
      toast.success("Contact deleted Successfully")
    } catch (error) {

    }
  }

  return (
    <>
      <div className='flex flex-col items-start gap-[0.69rem] mx-4 mt-[1.12rem] '>
        {
          <div key={contact.id} className='flex justify-between items-center  px-[0.25rem] py-[0.5rem] w-full rounded-[0.625rem] bg-[#FFEAAE] text-black'>
            <div className='flex items-center gap-[0.38rem] w-[238px] h-[48px]'>
              <BiSolidContact className='w-[3rem] h-[3rem]  text-[#F6820C]' />
              <div className='w-[184px] h-[49px]'>
                <p className='font-medium '> {contact.name} </p>
                <p className='text-[0.875rem] '>{contact.email}</p>
              </div>
            </div>
            <div className='flex gap-[0.5rem]'>
              <FiEdit onClick={onOpen} className='cursor-pointer h-[2rem] w-[2rem]' />
              <MdDeleteOutline onClick={() => deleteContact(contact.id)} className='cursor-pointer  h-[2rem] w-[2rem] text-[#5F00D9]' />
            </div>
          </div>
        }
      </div>
      <AddandUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Contactcard