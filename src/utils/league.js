import { convertTimestamp } from "./time"


export const fetchLeague = async (slug) => {


    const urlInfo = `https://sports.core.api.espn.com/v2/sports/soccer/leagues/${slug}?lang=es&region=ar`
    const res = await fetch(urlInfo)
    const leagueInfoResp = await res.json()
    const hasStandings = leagueInfoResp.season.types.items.find((x) => x.hasStandings) != undefined
    let standings

    const league = {
        oneStage: leagueInfoResp.season.types.count === 1,
        stages: leagueInfoResp.season.types.items,
        currentStage: leagueInfoResp.season.type,
        name: leagueInfoResp.name,
        shortName: leagueInfoResp.shortName,
        isTournament: leagueInfoResp.isTournament,
        logos: leagueInfoResp.logos,
        startDate: convertTimestamp(leagueInfoResp.season.startDate).date,
        endDate: convertTimestamp(leagueInfoResp.season.endDate).dateBefore,
        year: leagueInfoResp.season.year,
        seasonDisplay: leagueInfoResp.season.abbreviation,
        hasStandings,
        slug
    }


    if (hasStandings) {

        const url = `https://site.web.api.espn.com/apis/v2/sports/soccer/${league.slug}/standings?season=${league.year}&lang=es&region=ar`
        const res3 = await fetch(url)
        const standingsResp = await res3.json()


        standings = "children" in standingsResp ? standingsResp.children : false
    }


    const url2 = `https://site.web.api.espn.com/apis/site/v2/sports/soccer/scorepanel?league=${slug}&contentorigin=deportes&dates=${league.startDate}-${league.endDate}&lang=es&region=ar&limit=380`
    const res2 = await fetch(url2)
    const data2 = await res2.json()
    const events = data2.scores[0].events

    league.stages = league.stages.map((stage) => {
        return { ...stage, "stageEvents": events.filter((event) => event.season.slug === stage.slug) }
    })


    league.stages = league.stages.map((stage, i) => {

        if (stage.hasStandings) {


            const totalEvents = stage.stageEvents.length
            const n = stage.hasLegs ? 1 : 2
            const teamCount = standings[0].standings.entries.length
            const tablesCount = standings.length
            const weeksCount = (totalEvents / (teamCount * tablesCount)) * n

            const weeksArray = divideArray(stage.stageEvents, weeksCount)

            delete stage.stageEvents

            return { ...stage, "stageEvents": weeksArray }
        }
        else
            return stage

    })

    // const events = [{name:"Evento 1"},{name:"Evento 2"},{name:"Evento 3"}]

    return { ...league, standings }


}

const divideArray = (array, numeroSubarrays) => {
    const tamanoSubarray = Math.ceil(array.length / numeroSubarrays);
    const subarrays = [];

    for (let i = 0; i < array.length; i += tamanoSubarray) {
        const subarray = array.slice(i, i + tamanoSubarray);
        subarrays.push(subarray);
    }

    return subarrays;
}
