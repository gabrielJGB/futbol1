import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';
import { convertTimestamp } from '@/utils/time';


export const useLeague = (id) => {

    const leagueInfo = useSWR(
        id ? `https://sports.core.api.espn.com/v2/sports/soccer/leagues/${id}?lang=es&region=ar`
            : null,
        fetcher,
        {
            revalidateOnFocus: false,

        }
    );

    // if (leagueInfo.data);
    // {
        
        


        // const hasStandings = leagueInfo.data.season.types.items.find((x) => x.hasStandings) != undefined
        // let standings

        // const league = {
        //     oneStage: leagueInfo.data.season.types.count === 1,
        //     stages: leagueInfo.data.season.types.items,
        //     currentStage: leagueInfo.data.season.type,
        //     name: leagueInfo.data.name,
        //     shortName: leagueInfo.data.shortName,
        //     isTournament: leagueInfo.data.isTournament,
        //     logos: leagueInfo.data.logos,
        //     startDate: convertTimestamp(leagueInfo.data.season.startDate).date,
        //     endDate: convertTimestamp(leagueInfo.data.season.endDate).dateBefore,
        //     year: leagueInfo.data.season.year,
        //     seasonDisplay: leagueInfo.data.season.abbreviation,
        //     hasStandings,
        //     slug: id
        // }

        // if (hasStandings) {

        //     console.log("League has standings");
            
            // const url = `https://site.web.api.espn.com/apis/v2/sports/soccer/${league.slug}/standings?season=${league.year}&lang=es&region=ar`
            // const standingsResp = fetcher(url)
            


            // standings = "children" in standingsResp ? standingsResp.children : false
        // }


        // const url2 = `https://site.web.api.espn.com/apis/site/v2/sports/soccer/scorepanel?league=${slug}&contentorigin=deportes&dates=${league.startDate}-${league.endDate}&lang=es&region=ar&limit=380`
        // const data2 = fetcher(url2)
        
        // const events = data2.scores[0].events

        // league.stages = league.stages.map((stage) => {
        //     return { ...stage, "stageEvents": events.filter((event) => event.season.slug === stage.slug) }
        // })


        // league.stages = league.stages.map((stage, i) => {

        //     if (stage.hasStandings) {


        //         const totalEvents = stage.stageEvents.length
        //         const n = stage.hasLegs ? 1 : 2
        //         const teamCount = standings[0].standings.entries.length
        //         const tablesCount = standings.length
        //         const weeksCount = (totalEvents / (teamCount * tablesCount)) * n

        //         const weeksArray = divideArray(stage.stageEvents, weeksCount)

        //         delete stage.stageEvents

        //         return { ...stage, "stageEvents": weeksArray }
        //     }
        //     else
        //         return stage

        // })

        // // const events = [{name:"Evento 1"},{name:"Evento 2"},{name:"Evento 3"}]

        // return { ...league, standings }
    // }





    return {
        league: leagueInfo.data,
        loading: leagueInfo.isLoading,
        error: leagueInfo.error
    };
}
