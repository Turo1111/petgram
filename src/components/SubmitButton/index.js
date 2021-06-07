import { Button } from "./styles"
import React from "react"
import PropTypes from 'prop-types'

export const SubmitButton = ({children, onClick}) => {
  return <Button onClick={onClick} >{children}</Button>
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}