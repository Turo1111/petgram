import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Error, Form, Input, Title } from './styles'

const UseForm = ({ error, onSubmit, tittle, disabled }) => {

  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault(email.value, password.value)
    console.log();
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{tittle}</Title>
        <Input disabled={disabled} placeholder='email' {...email} />
        <Input disabled={disabled} placeholder='password' type="password" {...password} />
        <Button disabled={disabled} >{tittle}</Button>
      </Form>
      {error && <Error>{error}</Error> }
    </Fragment>
  )
}

export default UseForm