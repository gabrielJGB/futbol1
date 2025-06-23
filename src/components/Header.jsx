import { Link } from 'preact-router'
import React from 'react'

const Header = () => {
    return (
        <nav className='bg-slate-800 flex flex-row items-center gap-3 p-2'>
            <Link href="/" className="font-semibold text-lg">FUTBOL 11</Link>
            {/* <Link href="/about">Acerca</Link>  */}
            {/* <Link href="/profile/702108">Perfil 702108</Link> */}
        </nav>
    )
}

export default Header