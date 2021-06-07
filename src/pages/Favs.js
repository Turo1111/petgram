import React, { Fragment } from 'react'
import ListOfFavs from '../components/ListOfFavs'
import useGetFavorites from '../container/GetFavorites'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layout'

const Favs = () => {

  const { data, loading, error } = useGetFavorites()

  console.log(data)

  const renderProp = () => {

    if(loading) return <p>loading</p>
    if(error) return <p>error</p>
    const { favs } = data

    return <ListOfFavs favs={favs} />
    
  }

  renderProp()

  return (
    <Layout title='Tus favoritos' description='Aqui puedes encontrar tus favs'>
    {
      renderProp({ data, loading, error })
    }
    </Layout>
  )
}

export default Favs