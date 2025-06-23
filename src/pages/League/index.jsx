import { useRoute } from 'preact-iso'
import React from 'react'

const LeaguePage = () => {
    const { params } = useRoute()
    const id = params.id

    return (
        <div>League id {id}</div>
    )
}

export default LeaguePage