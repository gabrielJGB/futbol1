import React from 'react'
import { useEffect, useState } from 'preact/hooks'
import { useHomeArticles } from '../useHomeArticles'
import { Link } from 'preact-router'
import { formatDate } from '@/utils/time'
import { NewspaperIcon, VideoIcon } from 'lucide-preact'

const HomeArticles = () => {
    const { data, loading } = useHomeArticles()
    const [showArticles, setShowArticles] = useState(window.innerWidth < 700 ? false : true)

    if (loading)
        return <div></div>

    const articles = data.articles

    const getIcon = (type) => {

        if (type === "dStory")
            return <NewspaperIcon size={14} color={"white"} />
        else
            return <VideoIcon size={14} color={"white"} />

    }



    return (
        <div className={`md:overflow-hidden overflow-y-scroll z-1 md:block flex justify-between flex-col md:p-0 p-2 md:bg-transparent bg-[rgb(0,0,0,0.9)] md:h-auto h-[100vh] md:w-full md:relative ${showArticles ? "bottom-0" : "-bottom-[100%]"} transition-all fixed right-0`}
        >
            <h2 className='font-semibold text-[22px] my-2'>Ultimas noticias</h2>
            <div className='flex flex-col gap-1'>

                {
                    articles?.map((article, i) => (

                        <Link key={i} href={`/${article.type === "dStory" ? "article" : "video"}/${article.id}`} className='flex flex-row items-start gap-2 p-2 cursor-pointer bg-slate-800 md:hover:bg-slate-700 active:bg-slate-700 rounded transition-all'>

                            {/* <img
                                src={article.images[0].url}
                                className='w-[50px] h-[40px] rounded ' alt='Imagen noticia'
                            /> */}

                            <div className='flex flex-col '>
                                <div className='flex flex-row items-center gap-1'>
                                    <div className='flex flex-col '>
                                        <div className='flex flex-row items-center gap-1 '>
                                            <span>{getIcon(article.type)}</span>
                                            <div className='text-gray-400 text-[11px] font-bold'> {formatDate(article.published)}</div>
                                        </div>
                                        <div className='text-[12px]  text-gray-400'>{article.categories[0].description}</div>
                                    </div>
                                </div>

                                <div className='md:text-[14px] font-semibold text-[13px] flex flex-row items-center gap-1'>
                                    <span> {article.headline}</span>
                                </div>
                            </div>

                        </Link>
                    ))
                }
            </div>

            <button
                className={`z-0 shadow flex items-center justify-center shadow-black md:hidden fixed bottom-1 left-1 bg-white  border-[0px] border-slate-700 w-[60px] h-[60px] text-lg rounded-2xl cursor-pointer`}
                onClick={() => { setShowArticles(!showArticles) }}
            >
                <NewspaperIcon size={25} color="black" />
            </button>
        </div>

    )
}

export default HomeArticles