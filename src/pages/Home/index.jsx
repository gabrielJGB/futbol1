import { useRoute } from 'preact-iso'
import { route } from 'preact-router'
import React from 'react'
import { useHome } from './useHome'
import League from './components/League'
import DateSelector from './components/DateSelector'
import CalendarContainer from '../../components/Calendar'
import { showMenu } from '../../lib/signals'
import Menu from '../../components/Menu'
import { useEffect } from 'preact/hooks'
import HomeArticles from './components/HomeArticles'


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

  useEffect(() => {
    showMenu.value = false

  }, [])


  if (error) return <p className=''>Ha ocurrido un error</p>;

  return (

    <>
      {/* md:mt-10 mb-10 md:mx-10 */}

      {/* <Menu /> */}
      {/* <div className='w-1/4'></div> */}

      <div className='md:w-[60%] w-full'>
        <DateSelector />

        <div className='flex flex-col gap-10 md:mx-0 mx-1 mb-10 '>
          {/* mx-1  my-10 */}

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

      <div className='relative flex flex-col md:w-[30%]'>
        <CalendarContainer />
        <HomeArticles />
      </div>
    </>
  )
}

export default HomePage