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


    if (error) return <p className='text-center'>Ha ocurrido un error</p>;
    if (loading) return <div className='text-center w-full pt-4'>Cargando informacion del partido...</div>

    useEffect(() => {

        // selectedTab.value=2


        if (query.tab != undefined) 
            selectedTab.value = parseInt(query.tab)
        // } else {
        //     if (window.innerWidth > 768) {
        //         selectedTab.value = 1
        //     } else {
        //         selectedTab.value = 0
        //     }
        // }

    }, [path])


    return (
        <div className='w-full mx-0 md:mx-0 my-0 md:my-0 flex md:flex-row flex-col gap-0 md:gap-6 transition-all'>

            <div className='z-20 relative md:w-1/3 w-full'>
                <Header game={game} />
            </div>

            <div className='z-20 relative top-0 md:w-2/3 w-full  '>

                <TabBar tabs={getTabs(game)} />
                <TabView game={game} />
            </div>

        </div>
    )
}

export default GamePage