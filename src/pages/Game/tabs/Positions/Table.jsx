import { getLogo } from '@/utils/images'
import { Link } from 'preact-router'

import React from 'react'

const IMG_SIZE = 23

const Table = ({ entries, homeId, awayId }) => {


    const compareStats = (a, b) => {
        return a.stats.find((stat) => stat.name === "rank").value - b.stats.find((stat) => stat.name === "rank").value
    }

    entries.sort(compareStats)


    const getLogoTag = (team) => {

        const logo = getLogo(team, IMG_SIZE)

        return <img src={logo} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />

    }
    


    return (
        <table className='table-element text-sm w-full'>
            <tbody>

                <tr className='bg-slate-900 text-white  rounded-lg'>
                    <th className='p-1'>#</th>
                    <th className='text-start pl-2'>Equipo</th>
                    <th className='px-1'>Pts</th>
                    <th className='px-1'>PJ</th>
                    <th className='px-1'>PG</th>
                    <th className='px-1'>PE</th>
                    <th className='px-1'>PP</th>
                    <th className='px-1'>Dif</th>
                </tr>


                {
                    entries.map((team, i) => (

                        <tr
                            key={i}
                            className={`${team.id === homeId || team.id === awayId ? "bg-slate-700 hover:bg-slate-600" : "bg-slate-800"} hover:bg-slate-700 cursor-pointer transition-all border-b-[1px] border-slate-950 md:text-[13px] text-[12px]`}

                        >
                            <td className='font-semibold text-center py-2'>{team.stats.find((stat) => stat.name === "rank").value}</td>

                            <td>

                                <Link
                                    className='flex flex-row gap-1 items-center pl-1' href={`/team/${typeof (team.team) === "object" && "team" in team ? (team.team.id) : team.id}`}
                                >
                                    {getLogoTag(typeof (team.team) === "object" ? team.team : team)}

                                    <div className='text-start md:text-[13px] text-[11px]  pl-2'>{typeof (team.team) === "object" ? team.team.shortDisplayName : team.team}</div>
                                </Link>

                            </td>

                            <td className='text-center font-semibold'>{team.stats.find((stat) => stat.name === "points").value}</td>
                            <td className='text-center'>{team.stats.find((stat) => stat.name === "gamesPlayed").value}</td>
                            <td className='text-center'>{team.stats.find((stat) => stat.name === "wins").value}</td>
                            <td className='text-center'>{team.stats.find((stat) => stat.name === "ties").value}</td>
                            <td className='text-center'>{team.stats.find((stat) => stat.name === "losses").value}</td>
                            <td className='text-center'>{team.stats.find((stat) => stat.name === "pointDifferential").value}</td>
                        </tr>

                    ))
                }



            </tbody>
        </table >
    )
}

export default Table