import React from 'react'
import { useLocation, useRoute } from 'preact-iso'
import { useGame } from './useGame'
import Header from './components/Header'
import TabBar from './components/TabBar'
import TabView from './components/TabView'
import { selectedTab } from './signals'
import { getTabs } from './helpers'
import { useEffect } from 'preact/hooks'

const GamePage = () => {
    const { params } = useRoute()
    const id = params.id
    const { game, loading, error } = useGame(id)
    const { query, path } = useLocation()


    if (error) return <p className=''>Ha ocurrido un error</p>;
    if (loading) return <div>Cargando...</div>

    useEffect(() => {
        if (window.innerWidth > 700)
            selectedTab.value = 1

        if (query.tab != undefined)
            selectedTab.value = parseInt(query.tab)
            

}, [])


return (
    <div className=' mx-0 md:mx-10 my-0 md:my-6 flex md:flex-row flex-col gap-0 md:gap-6 transition-all'>

        <div className='z-20 relative w-full md:w-[35%]'>
            <Header game={game} />
        </div>

        <div className='z-20 relative top-0 w-full md:w-[65%] '>

            <TabBar tabs={getTabs(game)} />
            <TabView game={game} />
        </div>

    </div>
)
}

export default GamePage