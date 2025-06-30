import { useEffect, useState } from 'preact/hooks'
import React from 'react'
import { convertTimestamp,formatDateObject } from '@/utils/time'
import { formatTitle } from '@/utils/game'
import Game from '@/pages/Home/components/Game'


const Fixture = ({league}) => {
    const currentStageId = league.currentStage.slug
    const [selectedWeek, setSelectedWeek] = useState(0)
    const [selectedStageId, setSelectedStageId] = useState(currentStageId)
    const [selectedStage, setSelectedStage] = useState(league.stages.find((stage) => stage.slug === currentStageId))

    const getGamesArray = () => {


        if (selectedStage.stageEvents.length != 0) {
            if (selectedStage.hasStandings && selectedStage.stageEvents.length > 0) {
                return selectedStage.stageEvents[selectedWeek]
            }
            else if (!selectedStage.hasStandings && selectedStage.stageEvents.length > 0) {
                return selectedStage.stageEvents
            }
        }

        return []
    }

    const getCurrentWeek = () => {
        if (selectedStage.hasStandings && selectedStage.stageEvents.length > 0) {

            for (let i = 0; i < selectedStage.stageEvents.length; i++) {

                let x = selectedStage.stageEvents[i].find((elem) => elem.status.type.state === "pre")

                if (x != undefined || i == selectedStage.stageEvents.length - 1) {
                    setSelectedWeek(i)
                    break;
                }
            }
        }
    }


    const getNextDates = (date) => {

        const y = new Date(convertTimestamp(date).dateNext)
        const x = convertTimestamp(y)

        return `${x.month} ${x.year}`

    }

    useEffect(() => {

        const obj = league.stages.find((stage) => stage.slug === selectedStageId)
        setSelectedStage(obj)
        getCurrentWeek()
        


    }, [selectedStageId])

    if (!selectedStage)
        return <div></div>



  return (
           <div className='md:mt-8'>

            {
                !league.oneStage &&
                <select
                    className='w-full rounded p-2 mb-4 bg-slate-900 border-slate-700 border-[1px] md:hover:border-lime-400 active:border-slate-400  transition-all text-center font-semibold cursor-pointer'
                    onChange={(e) => { setSelectedStageId(e.target.value) }}
                    value={selectedStageId}
                >

                    {
                        league.stages?.map((stage, i) => (
                            <option key={i} value={stage.slug}>{formatTitle(stage.name)}</option>
                        ))
                    }
                </select>
            }
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row flex-wrap justify-center gap-2 '>

                    {
                        selectedStage.hasStandings &&
                        selectedStage.stageEvents?.map((event, i) => (
                            <div
                                key={i}
                                className={`${i == selectedWeek?"bg-lime-400 text-black":"bg-slate-800 text-white"} flex items-center justify-center cursor-pointer  md:h-[35] md:w-[35px] h-[42] w-[42px] font-semibold rounded text-center border-[1px] border-transparent md:hover:border-lime-400 active:border-lime-400 transition-all`}
                                onClick={() => { setSelectedWeek(i) }}
                            >
                                {i + 1}
                            </div>
                        ))

                    }
                </div>

                {
                    selectedStage.stageEvents?.length > 0 ?
                        <div className='flex flex-col gap-3'>
                            {
                                getGamesArray()?.map((game, i) => (
                                    <div className='flex flex-col justify-center w-full'>
                                      
                                        <div className=' py-1 px-2 bg-slate-900 border-x-[1px] border-t-[1px] border-slate-700 text-center  font-semibold text-xs'>{String(formatDateObject(new Date(game.date))) }</div>
                                        <Game game={game} />
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div>
                            <div className='mt-6 text-sm text-center'> Todavía no se definieron los partidos de esta fase</div>
                            <div className='text-gray-400 text-xs text-center mt-3'>{getNextDates(selectedStage.startDate)}</div>
                        </div>
                }


            </div>


        </div>
  )
}

export default Fixture