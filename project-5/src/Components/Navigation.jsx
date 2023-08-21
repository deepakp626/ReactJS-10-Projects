import React from 'react'

const Navigation = () => {
  return (
    <>
         <nav className=' h-[3.75rem] rounded-[0.625rem] flex justify-center items-center bg-white
        gap-[0.44rem] mx-4 mb-[0.5rem]'>
          <div>
              <img src='/logo/logos_firebase.svg'/>
          </div>
          <h3 className='text-[1.25rem] font-bold'>Firebase Contact App</h3>
        </nav>
    </>
  )
}

export default Navigation