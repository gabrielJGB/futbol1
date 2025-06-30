import React from 'react'
import { useLeagueArticles } from '../useLeagueArticles'
import ArticleCard from '@/components/ArticleCard'

const Articles = ({ id }) => {


  const { articles, error, loading } = useLeagueArticles(id)




  if (loading)
    return <div className='text-center mt-4'>Cargando...</div>

  if (error)
    return <div className='text-center mt-4'>Sin datos</div>



  return (
    <div className='flex flex-col gap-6 md:mt-8'>
      {
        articles != null &&
        articles.map((article, i) => (
          <ArticleCard key={i} article={article} />
        ))
      }
    </div>
  )
}

export default Articles