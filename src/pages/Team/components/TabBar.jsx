import React from 'react'


const TabBar = ({ selectedTab, setSelectedTab }) => {

  const buttons = ["FIXTURE", "PLANTEL", "NOTICIAS"]

  return (
    <div className='md:hidden  grid  grid-cols-3 gap-1 bg-slate-800 md:bg-slate-950 text-xs font-bold '>
      {
        buttons.map((button, i) => (

          <button
            key={i}
            onClick={() => setSelectedTab(i)}
            className={`${selectedTab === i ? "border-lime-400 text-lime-400" : "border-transparent"} md:border-transparent max-md:active:bg-slate-900 border-b-2 py-3 md:cursor-default md:text-lg transition-all duration-200`} >{button}</button>
        ))
      }

    </div>
  )
}

export default TabBar