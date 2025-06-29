import { Link } from 'preact-router'
import React, { useState } from 'react'
import { showMenu } from '../lib/signals'
import { useLocation } from 'preact-iso'
import { useEffect } from 'preact/hooks'
import { GlassesIcon, MenuIcon, SearchIcon } from 'lucide-preact'

const Header = () => {

    const { path, route } = useLocation()
    const isHomeRoute = /^\/\d{8}$/.test(path)
    const [showMenuButton, setShowMenuButton] = useState()
    const [focus, setFocus] = useState(false)
    const onFocus = () => setFocus(true);
    const onBlur = () => setFocus(false);
    const [query, setQuery] = useState("");



    const handleSearch = (e) => {
        e.preventDefault();
        route(`/search/?q=${query}`);

    };


    useEffect(() => {
        setShowMenuButton(!isHomeRoute)

    }, [path])



    return (
        <nav className='bg-slate-800 flex flex-row justify-between items-center gap-3 p-2'>
            <div className='flex items-center gap-1'>
                <MenuIcon
                    size={25}
                    color={"white"}
                    className={`md:${showMenuButton ? "block" : "hidden"}  block cursor-pointer`}
                    onClick={() => { showMenu.value = !showMenu.value }}
                />

                <Link href="/" className="font-semibold text-lg text-white">FUTBOL <span className='text-lime-400'>11</span></Link>
            </div>

            <div className={`flex flex-row  gap-2 border-[1px] items-center bg-slate-900 ${focus ? "border-lime-700" : "border-slate-900"} border-[2px] rounded-lg p-1 px-2`}>
                <form onSubmit={handleSearch} className="flex gap-2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Buscar"
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className='outline-none md:w-auto w-[120px] text-[13px] bg-slate-900 focus:bg-slate-900 focus:text-white text-gray-400 px-2 py-1 transition-all rounded'
                    />
                    <button type="submit" >
                        <SearchIcon
                            size={18}
                            color={focus ? "white" : "#1e293b"}
                            className='cursor-pointer'
                        />
                    </button>
                </form>
            </div>

        </nav>
    )
}

export default Header