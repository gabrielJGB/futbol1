import { useRoute } from 'preact-iso'
import React from 'react'

const ArticlePage = () => {
    const { params } = useRoute()
    const id = params.id

    return (
        <div>Article id: {id}</div>
    )
}

export default ArticlePage