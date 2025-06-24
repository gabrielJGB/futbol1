import React from 'react'
import { showMenu } from '../lib/signals'

const Menu = () => {
    return (
        <div className={`h-full md:overflow-hidden overflow-y-scroll z-10 md:w-1/4 top-0 md:relative  fixed ${showMenu.value ? "left-0" : "-left-[100%]"}  md:left-0 transition-all w-full bg-slate-800  opacity-95 p-2  rounded`}>
            <div>
                <button className='md:hidden px-2 rounded cursor-pointer' onClick={() => { showMenu.value = !showMenu.value }}>{"<"}</button>
                <div className='font-semibold'>Menu</div>
            </div>

        </div>
    )
}

export default Menu