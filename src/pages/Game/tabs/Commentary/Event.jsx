import React from 'react'
import { getEventColor,translateEventText } from '@/utils/game'
import arrowIn from '@/assets/arrow-in.png'
import arrowOut from '@/assets/arrow-out.png'
import goal from '@/assets/goal.png'
import boot from '@/assets/boot.png'
import red from '@/assets/red.png'
import yellow from '@/assets/yellow.png'
import target from '@/assets/target.png'
import offside from '@/assets/offside.png'
import corner from '@/assets/corner.png'
import hand from '@/assets/hand.png'
import { getLogo } from '@/utils/images'



const LOGO_SIZE = 23

const getEventIcon = (id, i) => {


    const substitution = [arrowIn, arrowOut]
    const score = [goal, boot]
    const shot = [target, boot]
    const foul = ["De", "A"]
    const SIZE = 14


    switch (id) {
        case '94': // amarilla
            return <img src={yellow} alt="Img" width={SIZE} height={SIZE} />

        case '93': // roja
            return <img src={red} alt="Img" width={SIZE} height={SIZE} />

        case '76': // cambio
            return <img src={substitution[i]} alt="Img" width={SIZE} height={SIZE} />

        case '36': // falta de x a x
        case '66':
            return

        case '138': // gol
        case '98':
        case '137':
        case '70':
        case '173':
        case '97':
            return <img src={score[i]} alt="Img" width={SIZE} height={SIZE} />

        case '68':
            return <img className='invert' src={offside} alt="Img" width={SIZE} height={SIZE} />

        case '95':
            return <img className='invert' src={corner} alt="Img" width={SIZE} height={SIZE} />

        case '122':
            return <img className='invert' src={hand} alt="Img" width={SIZE} height={SIZE} />

        case '135':
        case '117':
        case '106':
        case '142':
            return <img className={`${i === 0 && "invert"}`} src={shot[i]} alt="Img" width={SIZE} height={SIZE} />

        default:
            return <></>

    }

}

const Event = ({ text, clock, participants, typeId, typeText, team,timestamp }) => {

    const logo = getLogo(team, LOGO_SIZE)

    

    return (
        <div className='rounded-lg p-2 border-[1px] border-slate-700 bg-slate-800'>
            {
                clock != "" &&
                <div className='flex flex-row gap-1 items-center text-sm font-bold'>

                    <div
                        style={{ backgroundColor: getEventColor(typeId) }}
                        className='rounded px-1 py-[2px] text-black'
                    >
                        {clock}
                    </div>
                    {
                        logo != undefined &&
                        <img src={logo} alt="logo" width={LOGO_SIZE} height={LOGO_SIZE} />
                    }


                    <div
                        style={{ color: getEventColor(typeId) }}
                        className='text-sm font-bold pl-1'
                    >
                        {translateEventText(typeText)}
                    </div>

                    {
                        timestamp && 
                        <div className='text-xs text-gray-500'>{new Date(timestamp).toLocaleTimeString()}</div>
                    }

                </div>
            }

            {
                text &&
                <div className='text-xs text-gray-300 py-3'> {text}</div>
            }

            {
                participants &&
                <div className='flex flex-col gap-1'>
                    {
                        participants.map((elem, i) => (
                            <div key={i} className='flex flex-row items-center rounded gap-2 py-1 px-2 w-max bg-[--tw-color-900] '>

                                {getEventIcon(typeId, i)}
                                <div className='text-xs'>{elem.athlete.displayName}</div>

                            </div>
                        ))
                    }
                </div>

            }

        </div>
    )
}

export default Event