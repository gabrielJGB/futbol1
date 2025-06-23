import { useEffect, useState } from 'preact/hooks'
import RosterPlayer from './RosterPlayer'




const Roster = ({ roster, logo,showStats }) => {

    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {

        if (window != undefined)
            setWindowWidth(window.innerWidth)

        
    }, [])


    return (

        <div
            style={{ minWidth: windowWidth < 800 ? (windowWidth - 10) : "auto" }}
            className={` flex flex-col gap-2 col-span-1 w-full`}
        >

            <div className='bg-slate-800 rounded-lg divide-y-[1px] p-2 divide-slate-700'>
                <div className='flex flex-row items-center gap-3 justify-center'>
                    {
                        logo != undefined &&
                        <img src={logo} alt="logo" />
                    }
                    <div className='text-center font-bold py-2'>TITULARES</div>
                </div>

                {
                    roster.filter((elem, j) => elem.starter).map((player, i) => (
                        <RosterPlayer key={i} player={player} showStats={showStats}/>
                    ))
                }
            </div>


            <div className='bg-slate-800  rounded-lg divide-y-[1px] p-2 divide-slate-700'>
                <div className='flex flex-row items-center gap-3 justify-center'>
                    {
                        logo != "-" &&
                        <img src={logo} alt="logo" />
                    }
                    <div className='text-center font-bold py-2'>SUPLENTES</div>
                </div>
                {
                    roster.filter((elem, i) => !elem.starter).map((player, i) => (
                        <RosterPlayer key={i} player={player} showStats={showStats}/>
                    ))
                }

            </div>


        </div>

    )
}

export default Roster