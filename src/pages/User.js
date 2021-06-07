import React, { Fragment, useContext } from 'react'
import { SubmitButton } from '../components/SubmitButton'
import { Context } from '../Context'

const User = () => {

  const {removeAuth} = useContext(Context)

  return (
    <Fragment>
      <h1>Users</h1>
      <SubmitButton onClick={removeAuth} > Cerrar sesion </SubmitButton>
    </Fragment>
  )
}

export default User