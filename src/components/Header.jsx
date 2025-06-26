import { Link } from 'preact-router'
import React, { useState } from 'react'
import { showMenu } from '../lib/signals'
import { useLocation } from 'preact-iso'
import { useEffect } from 'preact/hooks'
import { MenuIcon } from 'lucide-preact'

const Header = () => {

    const { path } = useLocation()
    const isHomeRoute = /^\/\d{8}$/.test(path)
    const [showMenuButton, setShowMenuButton] = useState()

    useEffect(() => {
        setShowMenuButton(!isHomeRoute)

    }, [path])



    return (
        <nav className='bg-slate-800 flex flex-row items-center gap-3 p-2'>
            <MenuIcon
                size={25}
                color={"white"} 
                className={`md:${showMenuButton ? "block" : "hidden"}  block cursor-pointer`}
                onClick={() => { showMenu.value = !showMenu.value }}
            />

            <Link href="/" className="font-semibold text-lg text-white">FUTBOL 11</Link>
            {/* <Link href="/about">Acerca</Link>  */}
            {/* <Link href="/profile/702108">Perfil 702108</Link> */}
        </nav>
    )
}

export default Header