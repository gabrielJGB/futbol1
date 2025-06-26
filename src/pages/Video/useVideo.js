import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';


export const useVideo = (id) => {

    const query = useSWR(
        id ? `https://api-app.espn.com/v1/video/clips/${id}?lang=es`
    : null,
        fetcher,
        {
            revalidateOnFocus: false,
            refreshInterval: 60000
        }
    );




    return {
        data: query.data,
        loading: query.isLoading,
        error: query.error 
    };
}
