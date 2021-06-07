import React, { Fragment, useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import FavButton from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = ' https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png '

export const PhotoCard = ({ id, liked,  likes = 0, src = DEFAULT_IMAGE}) => {

  const [ show, ref] = useNearScreen()

  const { mutation, mutationLoading, mutationError } = useMuationToogleLike()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton
            liked={liked} likes={likes}
            onClick={handleFavClick} />
          </>
      }

    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}