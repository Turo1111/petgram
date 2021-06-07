import React from 'react'
import { MdFavorite, MdHome, MdPerson } from 'react-icons/md'
import { Nav, Link } from './styles'

const NavBar = () => {
  return (
    <Nav>
      <Link to="/"><MdHome/></Link>
      <Link to="/favs"><MdFavorite/></Link>
      <Link to="/user"><MdPerson/></Link>
    </Nav>
  )
}

export default NavBar