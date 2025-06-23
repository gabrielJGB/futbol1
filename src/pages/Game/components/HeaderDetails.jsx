import React from 'react'

const HeaderDetails = ({details, homeId, awayId}) => {
  return (
        <div className='sticky z-20 md:relative top-0  flex flex-col my-1 '>
      <div className='flex flex-col gap-1 w-full '>
        {
          details.map((detail, i) => (
            <div
              key={i}
              style={{ flexDirection: (detail.team.id === homeId ? "row" : "row-reverse") }}
              className='flex flex-col gap-0'
            >

              <div className='w-[43%] flex flex-row justify-center items-center gap-1  border-b-2  border-slate-700'>

                {/* <Image src={getDetailImg(detail)} alt="img" width={10} height={10}/> */}

                <div className='max-w-[100%] text-center  text-[11px] text-gray-300'>
                  {"participants" in detail ?
                    detail.participants[0].athlete.displayName :
                    "Expulsión (banco)"} {detail.ownGoal && " (EC)"}
                </div>

              </div>

              <div className='w-[14%] text-center font-bold text-xs bg-slate-700 border-b-2 border-slate-700 rounded-t'>
                {detail.clock.displayValue}
              </div>


            </div>
          ))
        }
      </div>

    </div >
  )
}

export default HeaderDetails