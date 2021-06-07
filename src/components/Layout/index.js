import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Description } from './styles'

export const Layout = ({ children, title, description, showTitle = true, showDescription = true }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>Petgram 🐶| {title}</title>}
        {description && <meta name='description' content={description} />}
      </Helmet>
      <Div>
        {(title && showTitle) && <Title>{title}</Title>}
        {(description && showDescription) && <Description>{description}</Description>}
        {children}
      </Div>
    </Fragment>
  )
}