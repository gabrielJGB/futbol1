import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';


export const useLeagueArticles = (id) => {
console.log(id);

    const articles = useSWR(
        id ? `https://site.web.api.espn.com/apis/site/v2/sports/soccer/${id}/news?lang=es&region=ar&limit=20`
            : null,
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    return {
        articles: articles.data?.articles,
        loading: articles.isLoading,
        error: articles.error
    };
}
