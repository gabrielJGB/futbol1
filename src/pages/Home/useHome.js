import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';


export const useHome = (date) => {

    const leaguesQuery = useSWR(
        date ? `https://site.web.api.espn.com/apis/site/v2/sports/soccer/scorepanel?league=all&lang=es&region=ar&contentorigin=deportes&limit=250&dates=${date}`
    : null,
        fetcher,
        {
            revalidateOnFocus: false,
            refreshInterval: 60000
        }
    );




    return {
        leagues: leaguesQuery.data?.scores,
        loading: leaguesQuery.isLoading,
        error: leaguesQuery.error 
    };
}
