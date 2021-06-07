import React, { createContext, useContext, useState } from "react";

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(()=>{
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: token => {
      console.log(token)
      setIsAuth(!isAuth)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export const useUsuario = () => {
  const context = useContext(Context)
    if (!context) {
        throw new Error('useUsuario debe estar dentro del proveedor UsuarioContext')
    }
    return context
}

export default {
  Provider,
  Consumer: Context.Consumer
}