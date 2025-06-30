import React from 'react'
import { useEffect, useState } from 'preact/hooks'
import { useLocation, useRoute } from 'preact-iso'
import LeagueHeader from './components/LeagueHeader'
import TabBar from './components/TabBar'
import Standings from './components/Standings'
import Fixture from './components/Fixture'
import Articles from './components/Articles'
import { fetchLeague } from '@/utils/league'


const LeaguePage = () => {
    const { params } = useRoute()
    const id = params.id
    const [league, setLeague] = useState(null)
    const [tabs, setTabs] = useState(["FIXTURE", "NOTICIAS"])
    const [selectedTab, setSelectedTab] = useState(tabs[0])
    const [loading, setLoading] = useState(true)



    useEffect(() => {

        setLoading(true)
        fetchLeague(id)
            .then(r => {
                setLeague(r)
                if (r.hasStandings)
                    setTabs(() => ["POSICIONES", "FIXTURE", "NOTICIAS"])
            })
            .finally(() => { setLoading(false) })


    }, [id])


    // if (error) return <p className='text-center'>Ha ocurrido un error</p>;
    if (loading) return <div className='text-center w-full pt-4'>Cargando...</div>

    return (
        <div className='flex flex-col w-full '>

            <LeagueHeader league={league} />
            <TabBar tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-3 mb-10 mx-2'>

                {
                    league.standings &&
                    <div className={`${selectedTab === "POSICIONES" ? "max-md:" : "max-md:hidden"} `}>
                        <Standings league={league} />
                    </div>
                }

                <div className={`${selectedTab === "FIXTURE" ? "max-md:" : "max-md:hidden"}`}>
                    <Fixture league={league} />
                </div>

                <div className={`${selectedTab === "NOTICIAS" ? "max-md:" : "max-md:hidden"}`}>
                    <Articles id={id} />
                </div>

            </div>
        </div >
    )
}

export default LeaguePage