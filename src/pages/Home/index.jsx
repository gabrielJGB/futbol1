import { useRoute } from 'preact-iso'
import { route } from 'preact-router'
import React from 'react'
import { useHome } from './useHome'
import League from './components/League'
import DateSelector from './components/DateSelector'

const Loading = () => (
  <div className='flex flex-col gap-8'>
    {
      [null, null, null].map((_, i) => (

        <div key={i} className='flex flex-col gap-2 p-2 mx-auto w-full bg-slate-800 rounded pt-10'>
          <div className='h-[90px] bg-slate-900 border-[1px] border-slate-700'></div>
          <div className='h-[90px] bg-slate-900 border-[1px] border-slate-700'></div>
          <div className='h-[90px] bg-slate-900 border-[1px] border-slate-700'></div>
          <div className='h-[90px] bg-slate-900 border-[1px] border-slate-700'></div>
        </div>
      ))
    }
  </div>
)

const HomePage = () => {

  const { params } = useRoute()
  const { leagues, loading, error } = useHome(params.date)


  if (error) return <p className=''>Ha ocurrido un error</p>;

  return (
    <div>
      <DateSelector />

      <div className='flex flex-col gap-10 md:w-[40%]  w-[97%] mx-auto my-10'>

        {
          !loading ?
            leagues.map((league, i) => (
              <League
                key={i}
                league={league}

              />
            ))
            :
            <Loading />
        }
      </div>

    </div>
  )
}

export default HomePage