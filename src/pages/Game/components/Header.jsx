import React from 'react'
import HeaderTeam from './HeaderTeam'
import HeaderStatus from './HeaderStatus'
import HeaderDetails from './HeaderDetails'
import { Link } from 'preact-router'
import { formatTitle, getStatusColor, getStatusText } from '../../../utils/game'
import OverviewTab from '../tabs/Overview/_OverviewTab'

const Header = ({ game }) => {

  const leagueId = game.header.league.slug
  const comp = game.header.competitions[0]
  const gameDate = comp.date
  const leagueName = game.header.league.name
  const stageName = game.header.season.name?.split(",")[1]
  const home = comp.competitors[0]
  const away = comp.competitors[1]
  const details = "details" in comp && comp.details || undefined
  const gameState = comp.status.type.state
  const gameStatus = comp.status.type.name
  const gameText = comp.status.type.detail
  const shootout = comp.status.type.name === "STATUS_FINAL_PEN" ? `(${comp.competitors[0].shootoutScore}-${comp.competitors[1].shootoutScore})` : false

  

  return (
    <div className='flex flex-col gap-4 '>
      <div className="flex flex-col gap-1 bg-slate-800 rounded-none md:rounded-lg  py-1">


        <Link
          href={`/league/${leagueId}`}
          className="hover:underline font-bold text-center"
        >
          {leagueName}
        </Link>


        <div className='text-center text-[10px] text-gray-400  font-bold'>
          {formatTitle(stageName).toUpperCase()}
        </div>

        <div className="grid grid-cols-3 justify-center items-center w-full  ">

          <HeaderTeam team={home.team} />

          <HeaderStatus
            status={getStatusText(gameStatus, gameText, gameDate)}
            statusColor={getStatusColor(gameState)}
            homeScore={home.score}
            awayScore={away.score}
            winner={home.winner ? "home" : (away.winner ? "away" : false)}
            shootout={shootout}
          />

          <HeaderTeam team={away.team} />

        </div>

        {
          details != undefined &&
          <HeaderDetails details={details} homeId={home.id} awayId={away.id} />
        }

      </div>

      <div className='hidden md:block'>
        <OverviewTab game={game} />
      </div>

    </div>
  )
}

export default Header