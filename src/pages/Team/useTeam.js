import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';


//fetchTeamInformation, fetchRoster, fetchTeamEvents, fetchTeamArticles 
const getDefaultSeason = async (teamId) => {

    const url = `https://sports.core.api.espn.com/v2/sports/soccer/teams/${teamId}?region=ar&lang=es`
    const res = await fetch(url)
    const data = await res.json()
    const text = data.record.$ref
    const season = text.match(/seasons\/(\d+)/)[1]

    return season


}


export const fetchTeamEvents = async (teamId, season) => {
    try {

        const currentSeason = await getDefaultSeason(teamId)
        season = !season ? currentSeason : season
        let fixture = String(season) === String(currentSeason)

        const url = `https://site.api.espn.com/apis/site/v2/sports/soccer/all/teams/${teamId}/schedule?region=ar&lang=es&season=${season || currentSeason}&fixture=false`
        const res = await fetch(url)
        const data = await res.json()

        

        if ("events" in data && data.events.length === 0)
            throw Error("No data")

        let previousGames = data.events
        let nextGames = []

        previousGames.forEach((object) => { object['played'] = true })

        if (fixture) {
            const url = `https://site.api.espn.com/apis/site/v2/sports/soccer/all/teams/${teamId}/schedule?region=ar&lang=es&season=${season || currentSeason}&fixture=true`
            const res = await fetch(url)
            const data = await res.json()
            nextGames = data.events
            nextGames.forEach((object) => { object['played'] = false })
        }

        let events = [...previousGames, ...nextGames]

        events.sort((a, b) => {
            return a.date.localeCompare(b.date);
        })

        return { events, currentSeason }

    } catch (error) {
        throw Error("Error")
    }
}

export const useTeam = (id) => {

    const info = useSWR(
        id ? `https://sports.core.api.espn.com/v2/sports/soccer/teams/${id}?region=ar&lang=es` : null,
        fetcher,
        { revalidateOnFocus: false }
    );

    const roster = useSWR(
        id ? `https://sports.core.api.espn.com/v2/sports/soccer/teams/${id}?region=ar&lang=es` : null,
        fetcher,
        { revalidateOnFocus: false, }
    );

    const events = useSWR(
        id ? `https://sports.core.api.espn.com/v2/sports/soccer/teams/${id}?region=ar&lang=es` : null,
        fetcher,
        { revalidateOnFocus: false, }
    );

    const articles = useSWR(
        id ? `https://sports.core.api.espn.com/v2/sports/soccer/teams/${id}?region=ar&lang=es` : null,
        fetcher,
        { revalidateOnFocus: false, }
    );






    return {
        game: gameQuery.data,
        loading: gameQuery.isLoading,
        error: gameQuery.error
    };
}
