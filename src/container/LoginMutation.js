
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const useLoginMutation = (email, password) => {
  const [loginUser, { data, error, loading }] = useMutation(LOGIN)
  /* const login = (email, password) => {
    mutation({ variables: { input: { email, password } } })
  } */
  return { loginUser, data, error, loading }
}