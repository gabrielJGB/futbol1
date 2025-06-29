import React from 'react'
import { useVideo } from './useVideo'
import VideoCard from '@/components/VideoCard'
import { useRoute } from 'preact-iso'

const VideoPage = () => {

  const { params } = useRoute()
  const { data, loading, error } = useVideo(params.id)

  if (loading)
    return <div className='p-2'>Cargando...</div>

  if (! ("videos" in data) && data.videos.length > 0)
    return <div className='p-2'>Ha ocurrido un error</div>


  return (
    <div className='mx-auto md:w-[65%] w-[100%]  mt-0 bg-[--tw-color-800] md:p-2 p-0 rounded'>

      <VideoCard hd={true} video={data.videos[0]} muted={false} />

    </div>
  )
}

export default VideoPage