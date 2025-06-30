import { useRoute } from 'preact-iso'
import React from 'react'
import { fetchTeamEvents } from './useTeam'

const TeamPage = () => {
    const { params } = useRoute()
    const id = params.id
    const [events, setEvents] = useState(false)
    const [season, setSeason] = useState(false)


    return (

        <div className='flex flex-col md:m-6'>
{/* 
            <div className='md:mb-3 bg-slate-800 md:rounded-lg p-2 pb-4 md:border-[1px] border-slate-700'>
                {
                    headerInfo ?
                        <TeamHeader team={headerInfo} />
                        :
                        <div>Cargando...</div>

                }
            </div>

            <TabBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-3 mx-1'>

                <div className={`${selectedTab === 0 ? "max-md:" : "max-md:hidden"} `}>
                    {
                        events ?
                            <Fixture data={events} selectedTab={selectedTab} teamId={id} season={season} setSeason={setSeason} currentSeason={currentSeason} />
                            : <div>Cargando...</div>
                    }
                </div>

                <div className={`${selectedTab === 1 ? "max-md:" : "max-md:hidden"}`}>
                    {
                        roster ?
                            <Roster data={roster} selectedTab={selectedTab} />
                            : <div>Cargando...</div>
                    }
                </div>

                <div className={`${selectedTab === 2 ? "max-md:" : "max-md:hidden"}`}>
                    {
                        articles ?
                            <Articles data={articles} selectedTab={selectedTab} />
                            : <div>Cargando...</div>
                    }
                </div>

            </div> */}
        </div>
    )
}

export default TeamPage