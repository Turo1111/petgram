import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../container/ListOfPhotoCard'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => {
  return (
    <Layout title='app de animales' description='aca podes encontrar animales' showTitle={false} showDescription={false} >
      <ListOfCategories />
      <ListOfPhotoCard categoryId={categoryId}/>
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props)=>{
  return prevProps.categoryId === props.categoryId
})