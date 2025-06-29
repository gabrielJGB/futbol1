import React from 'react'
import Team from './Team'
import { getStatusColor, getStatusText, getTeamObject } from '../../../utils/game'
import { Link } from 'preact-router'

const Game = ({ game }) => {

    const id = game.id
    const state = game.competitions[0].status.type.state
    const statusColor = getStatusColor(state)
    const statusText = getStatusText(game.competitions[0].status.type.name, game.competitions[0].status.type.detail, game.competitions[0].date)
    const home = getTeamObject(game.competitions[0], 0)
    const away = getTeamObject(game.competitions[0], 1)


    return (
        <Link
            href={`/game/${id}`}
            className={`bg-slate-800 border-[1px] border-slate-600 active:border-lime-500 hover:border-lime-500 transition-all text-white flex-col gap-[1px]`}
        >

            <div className='grid grid-cols-8 gap-[1px] rounded-r-lg'>

                {
                    [home, away].map((team, j) => (
                        <>
                            <Team
                                key={j}
                                isHome={j === 0}
                                team={team}
                            />

                            <div className={`flex flex-row ${team.winner ? "border-slate-300" : "border-slate-700"}  border-l-[1px] bg-slate-950 col-span-1 justify-between px-1 items-center text-[21px] font-bold`}>
                                <div></div>
                                <div className=''>{team.score}</div>
                                <div className='flex flex-col gap-1'>
                                    {
                                        team.redCards ?
                                            team.redCards.map((_, i) => (
                                                <div key={i} className='bg-red-600  w-[4px] h-[8px]'></div>
                                            ))
                                            :
                                            <div></div>
                                    }
                                </div>
                            </div>
                        </>
                    ))
                }

                <div
                    style={{ backgroundColor: statusColor }}
                    className={`${state === "in" ? "animate-pulse md:text-[13px]" : ""}  text-white row-span-2 row-start-1 col-start-8 col-span-1 flex justify-center items-center text-[10px] md:text-[11px] font-bold text-center px-[1px] `}>
                    {statusText}
                </div>

            </div>

        </Link>
    )
}

export default Game