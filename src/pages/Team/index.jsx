import { useRoute } from 'preact-iso'
import React from 'react'

const TeamPage = () => {
    const { params } = useRoute()
    const id = params.id

    return (
        <div>Team id {id}</div>
    )
}

export default TeamPage