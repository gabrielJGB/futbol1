import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';


export function useProfile(id) {
  const eventQuery = useSWR(
    id ? `https://site.api.espn.com/apis/site/v2/sports/soccer/all/summary?event=${id}` : null,
    fetcher,
    {
      revalidateOnFocus:false,
      refreshInterval: 30000 
    }
  );

  const newsQuery = useSWR(
    `https://site.web.api.espn.com/apis/site/v2/sports/soccer/ARG.1/news` ,
    fetcher,
    {
      revalidateOnFocus:false
    }
  );




  return {
    event: eventQuery.data,
    eventLoading: eventQuery.isLoading,

    news: newsQuery.data,
    newsLoading: newsQuery.isLoading,

    error: newsQuery.error || eventQuery.error,
  };
}
