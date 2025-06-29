import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';


export const useSearch = (query) => {

    const search = useSWR(
        query ? `https://site.web.api.espn.com/apis/search/v2?region=ar&lang=es&limit=10&page=1&dtciVideoSearch=true&query=${query}`

    : null,
        fetcher,
        {
            revalidateOnFocus: false,
            
        }
    );


    return {
        search: search.data,
        loading: search.isLoading,
        error: search.error 
    };
}
