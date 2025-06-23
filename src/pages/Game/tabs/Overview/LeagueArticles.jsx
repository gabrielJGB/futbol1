import { Link } from "preact-router";
import { formatDate } from "../../../../utils/time";





const LeagueArticles = ({ news }) => {



    const regex = /(\d+)/g;
    const articles = news.articles.map((x) => {
        return {
            headline: x.headline,
            image: x.images[0].url,
            published: x.published,
            type: x.type,
            id: x.links.api.self.href.match(regex)[1],
        }
    })




    const getIcon = (type) => {

        if (type === "dStory")
            return <div className="text-xs font-bold">[Articulo]</div>
        else
            return <div  className="text-xs font-bold">[Video]</div>

    }


    return (
        <div className='flex flex-col bg-slate-800 pb-2 rounded-lg divide-y-[1px] p-2 divide-slate-700'>

            <div className='text-lg font-bold text-center pt-1 pb-2 '>{news.header}</div>

            {
                articles.map((article, i) => (

                    <Link key={i} href={`/${article.type === "dStory" ? "article" : "video"}/${article.id}`} className='flex flex-row gap-2 px-1 py-2 cursor-pointer md:hover:bg-[--tw-color-700] active:bg-[--tw-color-700] transition-all'>

                        <img
                            src={article.image}
                            className='bg-cover  rounded ' alt='Imagen noticia' width={80} height={50}
                            style={{
                                
                            }}
                        />

                        <div className='flex flex-col gap-0'>
                            <div className='flex flex-row items-center gap-1'>
                                <div className='text-gray-400 text-[11px] font-bold'> {formatDate(article.published)}</div>
                                {getIcon(article.type)}
                            </div>
                            <div className='md:text-xs text-[11px]'>{article.headline}</div>
                        </div>

                    </Link>
                ))
            }

        </div>
    )
}

export default LeagueArticles