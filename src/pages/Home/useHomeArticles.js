import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';


export const useHomeArticles = () => {


    const articles = useSWR(
         `https://site.web.api.espn.com/apis/site/v2/sports/soccer/all/news?lang=es&region=ar&limit=30`,
        fetcher,
        {

            revalidateIfStale: true,
            revalidateOnFocus: false,
            refreshInterval: 120000
        }
    );

    



    return {
        data:articles.data,
        loading:articles.isLoading,
        error: articles.error
    };
}
