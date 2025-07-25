import React from 'react'
import { convertTimestamp, timeUntil } from '../../../../utils/time'


const CALENDAR = 22

// const getIcon = (icon) => {

//     switch (icon) {
//         case "calendar":
//             return <BiCalendar size={CALENDAR} color='white' />
//         case "city":
//             return <FaCity size={CALENDAR} color='white' />
//         case "crowd":
//             return <BiCrown size={CALENDAR} color='white' />
//         case "whistle":
//             return <GiWhistle size={CALENDAR} color='white' />
//         case "stadium":
//             return <MdStadium size={CALENDAR} color='white' />
//         case "information":
//             return <HiInformationCircle size={CALENDAR} color='white' />
//         case "timer":
//             return <CgSandClock size={CALENDAR} color='white' />
//     }

// }

const Card = ({ title, value, icon }) => {



    return (
        <div className='flex flex-row gap-2 items-center justify-start px-1 py-1'>
            {/* {getIcon(icon)} */}
            <div className='flex flex-col '>
                {
                    title &&
                    <div className='text-[12px] font-bold text-gray-400'>{title}</div>
                }

                {
                    title === "Ciudad" || title === "Estadio" || title === "Arbitro" ?
                        <a className={`text-[12px] ${title ? "" : "py-2"} hover:underline`} target='__blank' href={`https://www.google.com/search?q=${value}`}>
                            {value === "Ida" || value === "Vuelta" ? "Partido de " + value : value}
                        </a>
                        :
                        <div className={`text-[12px] ${title ? "" : "py-2"}`}>{value === "Ida" || value === "Vuelta" ? "Partido de " + value : value}</div>
                }

            </div>
        </div>
    )
}


const GameInfo = ({ game }) => {


    const gameDate = convertTimestamp(game.header.competitions[0].date)
    const dateString = `${gameDate.dayOfWeek} ${gameDate.day} de ${gameDate.month} de ${gameDate.year}, ${gameDate.time} hs`
    const statePre = game.header.competitions[0].status.type.state === "pre"



    return (

        <div className='shadow shadow-gray-800 bg-slate-800 flex flex-col p-2 divide-y-[1px] divide-slate-700 gap-0 rounded-lg  '>
            <h3 className='text-center font-bold pb-2'>DATOS DEL PARTIDO</h3>

            <Card title="Fecha" value={dateString} icon={"calendar"} />
 
            {statePre   && <Card title="Empieza en " value={timeUntil(game.header.competitions[0].date)} icon={"timer"} />}


            {
                "venue" in game.gameInfo && "city" in game.gameInfo.venue.address &&

                <Card title="Ciudad" value={`${game.gameInfo.venue.address.city}${"country" in game.gameInfo.venue.address ? ", " + game.gameInfo.venue.address.country : ""}`} icon={"city"} />
            }

            {
                "venue" in game.gameInfo && game.gameInfo.venue &&

                <Card title={"Estadio"} value={game.gameInfo.venue.fullName.replace("TBC", "A confirmar")} icon={"stadium"} />

            }

            {
                "attendance" in game.gameInfo && game.gameInfo.attendance > 0 &&

                <Card title={"Espectadores"} value={game.gameInfo.attendance} icon={"crowd"} />

            }

            {
                "officials" in game.gameInfo &&

                <Card title={"Arbitro"} value={game.gameInfo.officials[0].fullName} icon={"whistle"} />

            }

            {
                "gameNote" in game.header &&

                game.header.gameNote.split(" - ").map((note, i) => (
                    <div className=''>
                        <Card

                            key={i}
                            title={false}
                            value={note.replace("Juego", "Partido")}
                            icon="information"
                        />
                    </div>
                ))

            }

            {
                "groups" in game.header.competitions[0].competitors[0] &&
                <div className=''>
                    <Card
                        title={false}
                        value={game.header.competitions[0].competitors[0].groups.abbreviation}
                        icon="information"
                    />
                </div>

            }



            {
                !("groups" in game.header.competitions[0].competitors[0]) &&
                game.header.competitions[0].groups?.abbreviation.includes("Grupo") &&

                <div className=''>
                    <Card
                        title={false}
                        value={game.header.competitions[0].groups.abbreviation}
                        icon="information"
                    />
                </div>

            }


        </div>

    )
}

export default GameInfo