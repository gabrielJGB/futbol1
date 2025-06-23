import React from 'react'

const Team = ({ team, isHome }) => {

  const IMG_SIZE = 40


  const name = team.name
  const redCards = team.redCards
  const scorers = team.scorers
  const logo = team.logo



  return (
    <div className={`flex flex-row gap-x-2  text-white  col-span-6 bg-slate-900 px-1`}>

      <div className='shrink-0 flex flex-row py-2 gap-2 items-center pr-2 border-r-[1px] border-slate-800 '>
        {
          logo != null &&
          <img className='w-[27px] h-[27px]' src={logo} alt="" width={IMG_SIZE} height={IMG_SIZE} />
        }
        <div className=' text-[12px] md:text-[12px]  font-bold text-center'>{name}</div>
      </div>



      <div className='flex flex-wrap py-1 w-max gap-[2px] text-gray-400 gap-x-1 text-[10px] '>
        {
          scorers &&
          scorers.map((goal, i) => (

            <div key={i} className={`${i == 0 ? "" : ""} text-gray-400 flex flex-row items-center gap-x-[2px] text-[9px] md:text-[10px]`}>
              <div className='font-bold'>{goal.clock.displayValue}</div>
              {
                "athletesInvolved" in goal &&
                <div> {goal.athletesInvolved[0].shortName}</div>
              }
              {i != scorers.length - 1 && <span className='pl-[0px]'>,</span>}
            </div>

          ))
        }


      </div>



    </div>

  )
}

export default Team