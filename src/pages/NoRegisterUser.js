import React, { Fragment, useContext } from 'react'
import UseForm from '../components/UserForm'
import { useLoginMutation } from '../container/LoginMutation'
import { RegisterMutation, useRegisterMutation } from '../container/RegisterMutation'
import {Context} from '../Context'

const NoRegisterUser = () => {

  const { registerMutation, data, loading, error } = useRegisterMutation()
  const { loginUser, data: dataLog, error: errorLog, loading: loadingLog } = useLoginMutation()
  const { activateAuth } = useContext(Context)
  const onSubmit = ({email, password}) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })
    .then(({data})=>{
      const {signup} = data
      activateAuth(signup)
    })
  }

  const errorMsg = error && 'El usuario existe o hay algun problema bro'

  const loginSubmit = ({email, password}) => {
    const input = { email, password }
    const variables = { input }
    loginUser({variables})
    .then(({data})=>{
      console.log(data);
      const {login} = data
      activateAuth(login)
    })
  }
  const errorLogMsg = errorLog && 'La contraseña no es correcta o el usuario no existe.'

  return (
    
    <Fragment>
        <UseForm error={errorMsg} disabled={loading} onSubmit={onSubmit} tittle='Registrarse'/>
        <UseForm disabled={loadingLog} error={errorLogMsg} tittle='Iniciar sesión' onSubmit={loginSubmit}/>
    </Fragment>
          
  )
}

export default NoRegisterUser