import React from 'react'
import { getFlag } from '../../../utils/images'
import { Link } from 'preact-router'
import Game from './Game'
import { leagueHasState } from '../../../utils/game'


const League = ({ league }) => {
    
    const IMG_SIZE = 20

    const leagueName = league.leagues[0].name
    const flagUrl = getFlag(league.leagues[0].slug, 20)
    const leagueSlug = league.leagues[0].slug
    const games = league.events
    // const state = leagueHasState(league)


    return (
        <Link href={`/league/${leagueSlug}`} className={`flex flex-col w-full shadow shadow-gray-950 rounded transition ease-in-out bg-slate-800 p-2`}>

            <div className='w-full flex flex-row justify-between items-center pb-2'>
                {flagUrl != null && <img src={flagUrl} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />}
                <div className='cursor-pointer hover:underline w-full  text-[15px] md:text-[17px] text-white font-semibold text-center'>{leagueName}</div>
                {flagUrl != null && <img src={flagUrl} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />}
            </div>


            <div className='flex flex-col text-black gap-2 '>
                {
                    games?.map((game, i) => (
                        <Game
                            key={i}
                            game={game}
      
                        />
                    ))
                }
            </div>


        </Link>
    )
}

export default League