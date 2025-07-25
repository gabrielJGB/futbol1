import React from 'react'
import { getLogo } from '@/utils/images';
import { PinIcon } from 'lucide-preact';


const IMG_SIZE = 70

const TeamHeader = ({ team }) => {

  const logo = getLogo(team, IMG_SIZE + 10)


  if (team === null)
    return <div></div>

  return (
    <div className='flex flex-row items-center gap-3  px-3  '>



      {
        logo != undefined &&
        <img src={logo} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />
      }

      <div>
        <div className='mb-0 md:text-[26px] text-[22px] font-bold '>{team.name}</div>
        {
          "venue" in team &&
          <div className='flex flex-col gap-1 md:gap-0'>

            <div className='flex flex-row items-center gap-2'>

              <a
                className='mb-0 md:text-sm text-xs text-gray-400 hover:underline'
                target='__blank'
                href={`https://www.google.com/search?q=${team.venue?.address?.city}, ${team.venue?.address.country}`}>
                {team.venue?.address?.city}, {team.venue?.address.country}
              </a>

            </div>

            <div className='flex flex-row items-center gap-2'>
              

              <a
                className='mb-0 md:text-sm text-xs text-gray-400 hover:underline'
                target='__blank'
                href={`https://www.google.com/search?q=${team.venue?.fullName}`}>
                {team.venue?.fullName}
              </a>

            </div>

          </div>
        }
      </div>
    </div >
  )
}

export default TeamHeader