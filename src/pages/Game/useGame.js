import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';


export const useGame = (id) => {

    const gameQuery = useSWR(
        id ?     `https://site.web.api.espn.com/apis/site/v2/sports/soccer/all/summary?region=ar&lang=es&contentorigin=deportes&event=${id}`
    : null,
        fetcher,
        {
            revalidateOnFocus: false,
            refreshInterval: 60000
        }
    );




    return {
        game: gameQuery.data,
        loading: gameQuery.isLoading,
        error: gameQuery.error 
    };
}
