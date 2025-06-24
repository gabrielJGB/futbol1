import React from 'react'
import { selectedTab } from '../signals'
import { useLocation } from 'preact-iso'

const TabBar = ({ tabs }) => {

  const { query, path } = useLocation()

  const changeTab = (tab) => {
    const newQuery = { ...query, tab };
    const search = new URLSearchParams(newQuery).toString();
    history.replaceState(null, '', `${path}?${search}`);
    dispatchEvent(new PopStateEvent('popstate'));
  };




  return (
    <div className='z-20 top-0 sticky md:relative flex flex-row self-start mb-2 md:shadow shadow-slate-900 md:shadow-gray-900 md:overflow-hidden overflow-x-scroll w-full mx-auto rounded-none md:rounded bg-slate-800 md:bg-slate-800 text-xs font-bold  border-b-[1px] border-slate-900'>

      <button
        className={`flex cursor-pointer md:hidden active:bg-slate-900 hover:text-white transition-all md:px-4 px-4 md:py-3 py-4 border-b-[3px] ${selectedTab.value === 0 ? "border-lime-400" : "border-transparent"} transition-all duration-200`}
        onClick={() => {
          selectedTab.value = 0
          changeTab(0)
        }}
      >
        RESUMEN
      </button>

      {
        tabs.map((tab, i) => {
          return tab.show && (

            <button
              key={i}
              className={`cursor-pointer max-md:flex transition-all active:bg-slate-900 hover:text-white md:px-3 px-4 md:py-3 py-4 border-b-[3px] ${selectedTab.value === i ? "border-lime-400 " : "border-transparent text-gray-300"} transition-all duration-200`}
              onClick={() => {
                selectedTab.value = i
                changeTab(i)

              }}
            >

              {tab.name.toUpperCase()}

            </button>
          )
        })
      }

    </div>
  )
}

export default TabBar