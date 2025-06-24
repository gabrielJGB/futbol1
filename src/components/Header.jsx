import { Link } from 'preact-router'
import React from 'react'
import { showMenu } from '../lib/signals'

const Header = () => {
    return (
        <nav className='bg-slate-800 flex flex-row items-center gap-3 p-2'>
            
            <button className='md:hidden cursor-pointer' onClick={()=>{ showMenu.value = !showMenu.value }}>{">"}</button>
            <Link href="/" className="font-semibold text-lg">FUTBOL 11</Link>
            {/* <Link href="/about">Acerca</Link>  */}
            {/* <Link href="/profile/702108">Perfil 702108</Link> */}
        </nav>
    )
}

export default Header