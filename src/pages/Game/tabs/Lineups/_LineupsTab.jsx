import { useEffect, useState } from 'preact/hooks'
import React from 'react'
import { getLogo } from '../../../../utils/images'
import { sortRoster } from '../../../../utils/game'
import Field from './Field'
import Roster from './Roster'

const LineupsTab = ({ game }) => {
    const roster = "roster" in game.rosters[0] && "roster" in game.rosters[1]
    const formation = "formation" in game.rosters[0] ? game.rosters[0].formation : false
    const homeLogo = getLogo(game.header.competitions[0].competitors[0].team, 25)
    const awayLogo = getLogo(game.header.competitions[0].competitors[1].team, 25)
    const [windowWidth, setWindowWidth] = useState(0)
    const [invertField, setInvertField] = useState(false)
    const [showStats, setShowStats] = useState(false)

    const homeFormation = game.rosters[0].formation
    const awayFormation = game.rosters[1].formation



    useEffect(() => {

        if (window != undefined)
            setWindowWidth(window.innerWidth)

    }, [])


    return (
        <>
            {/* 
            {
                roster && !formation &&
                <TeamSelector game={game} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            } */}


            <div className=' overflow-x-auto md:px-0 px-1'>

                {/* <div className='flex flex-row justify-center items-center w-full'>
                    <button
                        className='p-1 bg-black active:bg-gray-900 md:hover:bg-gray-900 text-white font-bold rounded text-center px-2 mt-1 mb-2 mx-auto border-gray-600 border-[1px]'
                        onClick={() => setInvertField(!invertField)}> {"<->"} </button>
                </div> */}

                {
                    roster && formation ?
                        <Field
                            game={game}
                            homeLogo={homeLogo}
                            awayLogo={awayLogo}
                            homeFormation={homeFormation}
                            awayFormation={awayFormation}
                            invertField={invertField}
                            setInvertField={setInvertField}
                        />
                        : <></>
                }

                {
                    // roster && formation ?
                    //     <div className='w-full flex flex-rrow justify-center'>
                    //         <button
                    //             className={`font-semibold text-xs bg-slate-800 cursor-pointer border-transparent border-[1px] rounded mt-3 p-2 md:hover:border-lime-400 transition-all ${showStats ? "bg-lime-400 text-black " : "bg-slate-800 text-white"}`}
                    //             onClick={() => { setShowStats(!showStats) }}
                    //         >Estadísticas del jugador</button>
                    //     </div>
                    //     : <></>
                }


                {
                    roster ?
                        <div
                            style={{ minWidth: windowWidth < 800 ? (windowWidth * 2) : "auto" }}
                            className='grid grid-cols-2 gap-3 mt-3'
                        >
                            <Roster
                                roster={sortRoster(game.rosters[!invertField ? 0 : 1].roster)}
                                logo={!invertField ? homeLogo : awayLogo}
                                showStats={showStats}

                            />
                            <Roster
                                roster={sortRoster(game.rosters[invertField ? 0 : 1].roster)}
                                logo={!invertField ? awayLogo : homeLogo}
                                showStats={showStats}
                            />
                        </div>
                        : <></>
                }


            </div>

        </>
    )
}

export default LineupsTab