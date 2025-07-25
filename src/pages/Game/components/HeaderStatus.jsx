import React from 'react'

const HeaderStatus = ({ status, statusColor, homeScore, awayScore, winner, shootout }) => {

  return (
    <div className='flex flex-col justify-center items-center gap-1'>
      <div className='flex flex-row justify-center items-center gap-[2px] text-3xl'>
        <div className={`${winner === "home" ? "text-green-400" : "text-white"}`} >{homeScore}</div>
        <div >-</div>
        <div className={`${winner === "away" ? "text-green-400" : "text-white"}`}>{awayScore}</div>
      </div>

      {
        shootout &&
        <div className='text-xs'>{shootout}</div>
      }
      <div
        style={{ backgroundColor: (`${statusColor}`) }}
        className={`font-semibold text-xs py-[1px] px-1 rounded-sm `}
      >{status}</div>
    </div>
  )
}

export default HeaderStatus