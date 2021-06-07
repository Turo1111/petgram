import React, { Fragment, Suspense, useContext } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCard } from './container/ListOfPhotoCard'
import Logo from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import {Home} from './pages/Home'
import { Redirect, Router } from '@reach/router'
import Detail from './pages/Detail'
import NavBar from './components/NavBar'
import User from './pages/User'
/* import Favs from './pages/Favs' */
import NoRegisterUser from './pages/NoRegisterUser'
import { Context } from './Context'
import NotFound from './pages/NotFound'

const Favs = React.lazy(()=> import('./pages/Favs')) // para que no se precargue, se podria hacer en todos pero me da paja

const App = () => {

  const {isAuth} = useContext(Context)

  return (
    <Suspense fallback={<div/>}>
      <Logo />
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path='/'/>
        <Home path='/pet/:id'/>
        <Detail path='/detail/:detailId' />
        {!isAuth && <NoRegisterUser path='/login' /> }  
        {!isAuth && <Redirect from='/favs' to='/login' /> }
        {!isAuth && <Redirect from='/user' to='/login' /> }
        {isAuth && <Redirect from='/login' to='/' /> }
        <User path='/user' />
        <Favs path='/favs' />
      </Router>
      <NavBar/>
    </Suspense>
  )
}

export default App
