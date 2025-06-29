import React from 'react'
import { showMenu } from '../lib/signals'
import { useLocation } from 'preact-iso'
import { useEffect, useState } from 'preact/hooks'
import { ChevronLeft } from 'lucide-preact'
import sections from '@/data/menu.json'
import MenuSection from './MenuSection'
import { Link } from 'preact-router'

const Menu = () => {

    const { path } = useLocation()
    const [menuClassName, setMenuClassName] = useState("")
    const [homeRoute, setHomeRoute] = useState(true)
    const [windowWidth, setWindowWidth] = useState(false)

    useEffect(() => {

        const isHomeRoute = /^\/\d{8}$/.test(path)
        setHomeRoute(isHomeRoute)
        setWindowWidth(window.innerWidth)

        if (isHomeRoute) {
            if (window.innerWidth > 768) {
                setMenuClassName("relative left-0 transition-none ")
                showMenu.value = true
            } else {
                showMenu.value = false
                setMenuClassName(`top-0  fixed -left-[100%] w-[${window.innerWidth}px]`)
            }

        } else {
            showMenu.value = false
            setMenuClassName(`top-0  fixed -left-[100%] w-[${window.innerWidth}px]`)
        }

    }, [path])

    //   ${!homeRoute ? "fixed -left-[100%]" : (showMenu.value ? "left-0" : "-left-[100%]") + "left-0 md:relative fixed"}
    //   ${showMenu.value ? "left-0" : "-left-[100%]"}

    return (

        <div className={`
            z-100
            ${menuClassName}
            ${showMenu.value ? "top-0 left-0" : "-left-[100%]"}
            md:w-[25%] transition-all w-full bg-slate-800  opacity-100 pb-2  rounded 
            md:self-start
        `}>

            <div className='flex flex-col '>
                <div className='relative flex flex-row items-center justify-between px-2'>
                    {
                        homeRoute?
                        <div></div>
                        :
                        <Link href="/" className="font-semibold text-lg text-white">FUTBOL <span className='text-lime-400'>11</span></Link>
                    }
                    <ChevronLeft
                        size={37}
                        color={"white"}
                        className={`md:${homeRoute && "hidden"} block px-2 rounded cursor-pointer`}
                        onClick={() => { showMenu.value = !showMenu.value }}
                    >{"<"}</ChevronLeft>

                </div>


                <div className={`flex flex-col p-2 ${windowWidth < 768 || !homeRoute? "h-[95vh] overflow-y-scroll" : ""} ${windowWidth > 768 || !homeRoute ? "" : ""}`}>

                    {
                        sections.map((section, i) => (
                            <div key={i} className='flex flex-col divide-y-[1px] divide-slate-700 '>
                                <div className='bg-slate-900 text-[#9ae600] font-bold p-2'>{section.section_name} </div>

                                {
                                    section.leagues.map((league, i) => (
                                        <MenuSection key={i} league={league} />
                                    ))
                                }

                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Menu