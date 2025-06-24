import { getLogo } from '@/utils/images'
import { Link } from 'preact-router'
import { formatDateObject } from '../../../../utils/time'





const LOGO = 22
const getResultColor = (gameResult, headToHeadGame) => {

    if (headToHeadGame)
        return "border-[--tw-color-600]"

    if (gameResult === "P")
        return "border-[#ff0e0e] text-[#ff0e0e]"
    else if (gameResult === "G")
        return "border-[#00ff00] text-[#00ff00]"
    else if (gameResult === "E")
        return "border-[#ffff00] text-[#ffff00]"


}

const getLogoTag = (team) => {

    const logo = getLogo(team, 23)

    if (logo === undefined)
        return <></>

    return <img src={logo} alt="logo" width={23} height={23} />
}

const Game = ({ id, team, opponent, teamHome, homeScore, awayScore, leagueName, homeShootoutScore, awayShootoutScore, gameResult, gameDate, headToHeadGame }) => {

    const home = teamHome ? team : opponent
    const away = teamHome ? opponent : team

    
    

    return (
        <Link
            // style={{ borderColor: !headToHeadGame ? getResultColor(gameResult) : "gray" }}
            href={`/game/${id}`}
            className='flex flex-col bg-slate-800 border-slate-700 border-[1px] divide-y-[1px] divide-slate-700 rounded-lg md:hover:border-lime-400 active:border-lime-400'
        >

            <div className='flex flex-row items-center justify-between  px-2 py-1 font-bold'>
                <div className='text-[11px]  text-gray-400'>{leagueName}</div>
                <div className='text-[11px]  text-gray-400'>{formatDateObject(new Date(gameDate))}</div>
            </div>
            {
                [home, away].map((team, i) => (

                    <div key={i} className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-2 items-center pl-2 py-1'>

                            {getLogoTag(team)}

                            <div className='text-xs'>{team.displayName}</div>
                        </div>
                        <div className={`border-l-[2px] ${getResultColor(gameResult, headToHeadGame)} text-center bg-[--tw-color-900] text-[22px]  py-0 ${i === 1 ? "rounded-br-lg" : ""} w-[50px] font-semibold`}>{i === 0 ? homeScore : awayScore}</div>
                    </div>

                ))
            }
        </Link>
    )
}

export default Game