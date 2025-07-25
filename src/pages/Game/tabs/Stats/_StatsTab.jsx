
import React from 'react'
import Stat from './Stat'
import { getLogo } from '@/utils/images'


const IMG_SIZE = 27

const Stats = ({ game }) => {

  const home = game.boxscore.teams[0]
  const away = game.boxscore.teams[1]
  const homeLogo = getLogo(home.team, IMG_SIZE)
  const awayLogo = getLogo(away.team, IMG_SIZE)
  const statsLength = game.boxscore.teams[0].statistics.length




  const stats = [
    {
      displayName: "RESUMEN",
      values: ["possessionPct", "foulsCommitted", "wonCorners", "offsides", "saves", "yellowCards", "redCards", "penaltyKickGoals", "penaltyKickShots"].map((stat) => ({
        home: home.statistics.find((homeStat) => homeStat.name === stat),
        away: away.statistics.find((awayStat) => awayStat.name === stat),
      }))
    },
    {
      displayName: "ATAQUE",
      values: ["totalShots", "shotsOnTarget", "totalCrosses", "accurateCrosses"].map((stat) => ({
        home: home.statistics.find((homeStat) => homeStat.name === stat),
        away: away.statistics.find((awayStat) => awayStat.name === stat),
      }))
    },
    {
      displayName: "PASES",
      values: ["totalPasses", "accuratePasses", "totalLongBalls", "accurateLongBalls"].map((stat) => ({
        home: home.statistics.find((homeStat) => homeStat.name === stat),
        away: away.statistics.find((awayStat) => awayStat.name === stat),
      }))
    },
    {
      displayName: "DEFENSA",
      values: ["totalTackles", "effectiveTackles", "totalClearance", "effectiveClearance", "interceptions", "blockedShots"].map((stat) => ({
        home: home.statistics.find((homeStat) => homeStat.name === stat),
        away: away.statistics.find((awayStat) => awayStat.name === stat),
      }))
    },
  ]






  return (
    <div className='mt-6 mx-2 md:mx-auto  md:w-[70%]'>

      <div className='flex flex-col gap-6'>


        {
          stats.map((section, i) => (
            <div key={i} className=' bg-slate-800 rounded-lg p-2'>

              <div className='flex flex-row items-center justify-between pt-1 pb-4 px-0'>
                <img src={homeLogo} alt="Logo" width={IMG_SIZE} />
                <div className='text-center text-lg font-bold'>{section.displayName}</div>
                <img src={awayLogo} alt="Logo" width={IMG_SIZE} />
              </div>

              {
                section.values[0].home != undefined &&
                section.values.map((value, j) => (
                  <Stat
                    key={j}
                    homeStat={value.home}
                    awayStat={value.away}
                  />
                ))

              }
            </div>
          ))
        }


      </div>

    </div>
  )
}

export default Stats