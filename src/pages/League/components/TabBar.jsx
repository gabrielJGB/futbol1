import React from 'react'

const TabBar = ({tabs,selectedTab, setSelectedTab}) => {


    return (
        <div className='md:hidden overflow-x-scroll w-full flex flex-row self-start gap-0 bg-slate-800 md:bg-slate-950 text-xs font-bold '>
            {
                tabs.map((button, i) => (

                    <button
                        key={i}
                        onClick={() => setSelectedTab(button)}
                        className={`${selectedTab === button ? "border-lime-400 text-lime-400" : "border-transparent"} md:border-transparent max-md:active:bg-slate-900 border-b-2 px-4 md:py-3 py-4 cursor-pointer md:cursor-default md:text-lg transition-all duration-200`} >{button}</button>
                ))
            }

        </div>
    )
}

export default TabBar