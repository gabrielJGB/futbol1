import React from 'react'
import Table from '@/pages/Game/tabs/Positions/Table'

const Standings = ({league}) => {

  const standings = league.standings
  

  return (
    <div className='flex flex-col gap-4 w-full'>
      {
        standings.map((table,i) => (
          <div key={i} className='flex flex-col gap-2 '>
            <div className='text-lime-400 text-start py-0  rounded-md font-bold'>{table.name}</div>
            <Table entries={table.standings.entries} homeId={null} awayId={null} />
          </div>
        ))
      }
    </div>
  )
}

export default Standings