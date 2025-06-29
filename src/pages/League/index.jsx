import React from 'react'
import { useEffect } from 'preact/hooks'
import { useLocation, useRoute } from 'preact-iso'
import { useLeague } from './useLeague'
import { filterLeague } from '@/utils/league'

const LeaguePage = () => {
    const { params } = useRoute()
    const id = params.id
    const { league, loading, error } = useLeague(id)
    


    if (error) return <p className='text-center'>Ha ocurrido un error</p>;
    if (loading) return <div className='text-center w-full pt-4'>Cargando...</div>

    useEffect(async () => {

        if (league) {
            const sx = await  filterLeague(league,id)
        }

    }, [])


    return (
        <div>
            League id {id}


        </div>
    )
}

export default LeaguePage