import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { whitPhotos } from '../../hoc/withPhotos'


export const useGetPhotos = categoryId => {
  const { loading, data, error } = useQuery(whitPhotos, { variables: { categoryId } })
  return { loading, data, error }
}

export const ListOfPhotoCardComponent = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
