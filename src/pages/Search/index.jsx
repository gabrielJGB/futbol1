import { useLocation } from 'preact-iso'
import React from 'react'
import { useSearch } from './useSearch'
import { useEffect } from 'preact/hooks'
import { Link } from 'preact-router'
import { Badge, BadgeCentIcon, PersonStandingIcon, TrophyIcon } from 'lucide-preact'
import { getLogoURL } from '@/utils/images'
import { convertTimestamp } from '@/utils/time'

const getImage = (content) => {
    const IMG = 40

    if ("image" in content) {
        return <img src={"defaultDark" in content.image ? getLogoURL(content.image.defaultDark, 80) : getLogoURL(content.image.default, 80)} alt="Img" width={IMG + 5} height={IMG + 5} />

    } else if ("images" in content) {

        return <img src={getLogoURL(content.images[0].url, 80)} alt="Img" className="rounded justify-stretch" width={IMG + 50} height={IMG} />

    } else if (content.type === "player")
        return <PersonStandingIcon size={IMG} color="white" />

    else if (content.type === "team")
        return <BadgeCentIcon size={IMG} color="#0f172a" />

    else if (content.type === "league")
        return <TrophyIcon size={IMG} color="white" />

    else
        return <div></div>
}

const manageItemPress = (content) => {
    const type = content.type
    if (type === "team") {
        const id = content.uid.match(/t\:(.*)/)[1]
        return `/team/${id}`

    } else if (type === "league") {
        return `/league/${content.defaultLeagueSlug}`

    } else if (type === "player") {
        const id = content.uid.match(/a\:(.*)/)[1]
        return `/player/${id}`

    } else if (type === "dStory") {
        const id = content.id
        return `/article/${id}`
    } else
        return ""

}


const SearchPage = () => {

    const { query, route } = useLocation()
    const { search, loading, error } = useSearch(query.q)


    if (loading)
        return <div className='p-2'>Cargando...</div>

    if (error)
        return <div className='p-2'>Ha ocurrido un error</div>

    return (
        <div className="flex flex-col gap-2 text-xs w-full">


            {
                !loading && search.results != undefined ?

                    search.results.totalFound === 0 ?
                        <div className="text-center m-3 font-semibold ">Sin resultados</div>
                        :
                        <div >
                            {
                                "didYouMean" in search &&
                                <Link
                                    href={`/search?q=${search.didYouMean}`}
                                    className="flex flex-row items-center gap-1 p-2 "
                                    onClick={() => { }}
                                >
                                    <div className="text-red-400">Quizás quisiste decir:</div>
                                    <div className='text-white'>{search.didYouMean}</div>
                                </Link>
                            }

                            <div className={`grid gird-cols-1 m-2 md:grid-cols-3 gap-8`}>

                                {
                                    search.results.filter((n) => n.totalFound > 0).map((result, i) => (

                                        <div key={i} className=" w-full">
                                            <div className="mb-3 text-lg font-semibold text-start">{result.displayName.replace("Notas", "Noticias").replace("Atletas", "Jugadores")}</div>

                                            <div className="flex flex-col md:gap-2 gap-2">
                                                {
                                                    result.contents.filter((x) => x.sport === "soccer" || x.type === "dStory").map((content, k) => (

                                                        <Link
                                                            key={k}
                                                            href={manageItemPress(content)}
                                                            className={`flex flex-row items-center md:p-2 ${content.type === "dStory" && "py-2"} p-1 rounded-lg gap-2 bg-slate-800 border-[1px] border-transparent md:hover:border-lime-400 active:border-lime-400`}
                                                        >
                                                            {getImage(content)}
                                                            <div >
                                                                {
                                                                    content.type === "dStory" &&
                                                                    <div className="text-gray-300 text-[10px] font-semibold mb-1">{convertTimestamp(content.date).DDMMYYYY}</div>
                                                                }
                                                                <div >
                                                                    <div className={`${content.type != "dStory" ? "text-[15px] font-semibold " : ""}`}>{content.displayName}</div>
                                                                    {
                                                                        "subtitle" in content && content.type === "player" &&
                                                                        <div className="text-gray-300 text-[11px]">{content.subtitle}</div>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </Link>

                                                    ))
                                                }
                                            </div>

                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    : <></>

            }




        </div>

    )
}

export default SearchPage