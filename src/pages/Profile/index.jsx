import { useLocation, useRoute } from 'preact-iso'
import { currentTime } from './signals'
import { useProfile } from './useProfile'
import Resumen from '../../components/tabsGame/Resumen'
import Estadisticas from '../../components/tabsGame/Estadisticas'
import { useEffect } from 'preact/hooks'


const Profile = () => {

    const { query, path } = useLocation()
    const { params } = useRoute()
    const { event, news, eventLoading, newsLoading, error } = useProfile(params.id)
    const currentTab = query.tab || 'overview';


    const changeTab = (tab) => {
        const newQuery = { ...query, tab };
        const search = new URLSearchParams(newQuery).toString();
        history.replaceState(null, '', `${path}?${search}`);
        dispatchEvent(new PopStateEvent('popstate'));
    };



    if (error) return <p>Hubo un error al obtener los datos.</p>;

    return (
        <div>
            {
                eventLoading ?
                    <div>Cargando partido...</div>
                    :
                    <div className='p-3'>
                        <h1 className='font-bold'>{event.header.league.name}</h1>
                        <div>Este es el param id: {params.id}</div>
                        <div>Este es un query param: {query.tab}</div>

                        <h2>Segundos: {currentTime.value.getSeconds()}</h2>
                    </div>
            }

            {
                newsLoading ?
                    <div>Cargando noticias...</div>
                    :
                    <div className='p-3'>
                        NOTICIAS:

                        <h2>{news.articles[0].headline}</h2>
                        <h2>{news.articles[1].headline}</h2>
                        <h2>{news.articles[2].headline}</h2>
                    </div>
            }

            <div className='flex flex-row gap-2 p-2 bg-gray-900'>

                <button className={`${currentTab === "overview" ? "bg-slate-700" : ""}`} onClick={() => changeTab('overview')}>Resumen</button>
                <button className={`${currentTab === "stats" ? "bg-slate-700" : ""}`} onClick={() => changeTab('stats')}>Estadísticas</button>



            </div>


            {currentTab === 'overview' && <Resumen />}
            {currentTab === 'stats' && <Estadisticas />}





        </div>
    )
}

export default Profile