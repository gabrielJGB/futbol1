import { useRoute } from 'preact-iso'
import React from 'react'

const PlayerPage = () => {
        const { params } = useRoute()
        const id = params.id
  return (
    <div>Player id {id}</div>
  )
}

export default PlayerPage