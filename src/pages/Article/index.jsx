import { useRoute } from 'preact-iso'
import React from 'react'
import VideoCard from '@/components/VideoCard'
import { formatDate } from '@/utils/time'
import { useArticle } from './useArticle'
import { Link } from 'preact-router'

const ArticlePage = () => {

    const { params } = useRoute()
    const id = params.id


    const { data, loading, error } = useArticle(id)



    if (loading)
        return <div className='text-center w-full p-2'>Cargando...</div>

    if (error)
        return <div className='text-center w-full p-2'>Ha ocurrido un error</div>


    const article = data.headlines[0]
    const published = formatDate(article.published)
    const regex = /https:\/\/twitter\.com\/[^\/]+\/status\/\d+/g;
    let tweets = article.story.match(regex);
    const story = article.story
        .replaceAll("<p>", "<p style=margin-top:19px>")
        .replaceAll("<h2>", "<h2 style=margin-top:20px;font-size:18px;font-weight:bold >")
        .replace("<hr>", "<hr style=margin-top:10px>")
        .replace("twitter.com", "xcancel.com")

    if (tweets)
        tweets = tweets.map((item, i) => (item.replace("twitter.com", "xcancel.com")))


    const getTagRoute = (category) => {

        if (category.type === "team") {
            return `/team/${category.team.id}`

        } else if (category.type === "athlete") {
            return `/player/${category.athlete.id}`

        } else if (category.type === "league") {
            return `/league/${category.leagueId}`
        } else
            return '/'

    }



    return (
        <div className='flex flex-col  justify-center items-center mx-auto'>
            <div className='flex flex-col gap-2 justify-center md:pt-3 pt-2 md:px-6 px-2 md:w-[60%] w-[100%] bg-slate-800 pb-2 rounded'>
                <h1 className='md:text-3xl text-2xl  font-bold'>{article.headline}</h1>
                <div className='pt-2 text-sm text-gray-300 font-bold '>{published}hs</div>

                <p className='text-gray-300 text-[16px] '>{article.description}</p>

                {
                    "images" in article &&

                    article.images.filter(((x) => x.type === "inline" || x.type === "header")).map((image, i) => (
                        <div key={i} className='flex flex-col gap-2'>
                            <img className='rounded-lg' src={image.url} alt="Imagen" />
                            <div className='text-xs text-gray-300'>{image.caption}</div>
                        </div>
                    ))

                }


                <p className='pt-1 px-2 md:text-[14px] text-[14px] md:leading-6 leading-6' dangerouslySetInnerHTML={{ __html: story }}></p>


                {
                    tweets != undefined &&
                    tweets.map((item, i) => (
                        <a target='_blank' href={item} className='text-sm hover:underline'> {item}</a>
                    ))
                }

                {

                    "source" in article &&
                    <div className='text-xs pt-2 text-gray-400 font-bold'>FUENTE: {article.source}</div>
                }

                <hr className='mt-2' />

                {
                    "video" in article && article.video.length > 0 &&

                    <div className='flex flex-col gap-4 divide-y-[1px] divide-slate-600'>

                        {
                            article.video.map((video, i) => (

                                <VideoCard key={i} hd={true} video={video} autoPlay={false} muted={false} />
                            ))
                        }

                    </div>
                }

                <div className='text-sm mt-2'>En esta noticia:</div>
                <div className='flex flex-wrap flex-row gap-2 mb-2'>
                    {
                        "categories" in article &&
                        article.categories.map((cat, i) => {

                            return cat.description && (
                                <Link key={i} href={getTagRoute(cat)} className=' bg-slate-700 border-[1px] border-slate-600 p-2 rounded curser-pointer text-xs hover:bg-[--tw-color-600]'>
                                    {cat.description.split("-")[0]}
                                </Link>
                            )
                        }
                        )
                    }
                </div>





                {

                    "related" in article && article.related.length > 0 &&

                    <div className='flex flex-col divide-y-[1px] divide-slate-600 my-2 mb-2'>

                        <div className='bg-black text-sm px-2 py-1 text-white font-bold'>NOTICIAS RELACIONADAS:</div>
                        {
                            article.related.map((related, i) => (
                                <Link href={`/article/${related.id}`} key={i}>
                                    <div className='px-1 pb-2 pt-2 hover:bg-slate-700 text-sm transition-all'>{related.headline}</div>
                                </Link>
                            ))
                        }

                    </div>
                }

            </div>
        </div>
    )

}

export default ArticlePage