import { Link } from 'preact-router'
import React from 'react'

const GameArticle = ({article}) => {
    return (
        <Link href={`/article/${article.id}`} className='flex flex-col gap-1 transition-all hover:bg-slate-700 bg-slate-800 rounded-lg p-2'>
            <div className='hover:underline  text-lg font-bold'>[Artículo] {article.headline}</div>
            <div className='text-xs text-gray-300 '>{article.description} </div>
            {
                "images" in article && article.images.length > 0 ?
                    <img className='rounded-lg' src={article.images[0].url} alt="Imagen" />
                    : <></>
            }
        </Link>
    )
}

export default GameArticle