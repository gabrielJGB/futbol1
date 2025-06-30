import React from 'react'
import { getLogo } from '@/utils/images'

const LeagueHeader = ({ league }) => {
    const IMG = 80

    const logo = getLogo(league, IMG + 50)

    return (
        <div className='bg-slate-800 md:rounded-lg md:p-2 px-2 flex flex-row gap-2 items-center'>


            {
                logo != undefined &&
                <img src={logo} alt="Logo" width={IMG} height={IMG} />
            }

            <div className=''>
                <h1 className='font-semibold md:text-3xl text-lg'>{league.name}</h1>
                <div className='text-gray-400 font-semibold md:text-lg text-sm'>{league.seasonDisplay}</div>
            </div>

        </div>
    )
}

export default LeagueHeader