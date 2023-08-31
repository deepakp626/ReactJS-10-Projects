import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const Protectedroute = ({children}) => {
    const {token} = useAuth()
    console.log(token)
  return ( <>{ token ? children : <Navigate to="/signin" /> }</> )
}

export default Protectedroute