import VideoCard from "@/components/VideoCard"



const VideosTab = ({ game }) => {

  // const [hd, setHd] = useState(true)



  return (
    <div className='flex flex-col-reverse md:px-0 px-1 gap-6'>
      {/* 
      <button
        className={`${hd ? "bg-green-800" : "bg-black"} cursor-pointer w-[120px] py-1 text-xs text-white border-[1px] border-gray-500 rounded`}
        onClick={() => setHd(prev => !prev)}
      >{hd ? "Calidad HD" : "Calidad SD"}</button> */}

      {
        game.videos.map((video, i) => (
          <VideoCard key={i} hd={true} video={video} muted={false} autoPlay={false} />
        ))
      }

    </div>
  )
}

export default VideosTab