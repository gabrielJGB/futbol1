import React from 'react'
import { Link } from 'preact-router'
import { getLogo } from '../../../utils/images'

const IMG_SIZE = 40

const HeaderTeam = ({team}) => {
    const logo = getLogo(team, IMG_SIZE + 12)

    return (
        <Link href={`/team/${team.id}`} className='flex flex-col gap-1 items-center justify-between hover:underline transition-all cursor-pointer'>

            {
                logo != undefined &&
                <img src={logo} width={IMG_SIZE} height={IMG_SIZE} alt="Logo" />

            }
            <div className='text-sm md:text-xs font-bold text-center'>{team.shortDisplayName}</div>

        </Link>
    )
}

export default HeaderTeam