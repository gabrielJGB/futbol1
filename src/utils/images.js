
import penalty from '@/assets/penalty.png'
import penaltyMissed from '@/assets/no-score.png'
import arrowIn from '@/assets/arrow-in.png'
import arrowOut from '@/assets/arrow-out.png'
import ownGoal from '@/assets/own-goal.png'
import goal from '@/assets/goal.png'

import boot from '@/assets/boot.png'
import redCard from '@/assets/red.png'
import yellowCard from '@/assets/yellow.png'



export const getFlag = (slug, SIZE) => {

    const flagCode = slug.slice(0, 3)
    const p = 7
    const arr = ['fif', 'afc', 'clu', 'con', 'uef']

    if (arr.includes(flagCode)) {
        return null
    }

    return `https://a1.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/${flagCode}.png?w=${SIZE + p}&h=${SIZE + p}`

}

export const getLogo = (team_p, SIZE) => {
    let logo = ""
    const p = 7

    if (team_p) {


        let team = "team" in team_p && typeof (team_p.team) != "string" ? team_p.team : team_p

        if (typeof (team) === "object" && "logo" in team && Array.isArray(team.logo)) {

            logo = team.logo[0].href
            logo = logo.replace("https://a.espncdn.com/i", `https://a1.espncdn.com/combiner/i?img=/i`)
            logo += `&h=${SIZE + p}&w=${SIZE + p}`
            return logo
        }


        if (typeof (team) === "object" && "logo" in team && team.logo != "") {
            logo = team.logo
            logo = logo.replace("https://a.espncdn.com/i", `https://a1.espncdn.com/combiner/i?img=/i`)
            logo += `&h=${SIZE + p}&w=${SIZE + p}`
            return logo
        }

        if (typeof (team) === "object" && "logos" in team && team.logos.length > 0) {

            logo = team.logos.length > 1 ? team.logos[1].href : team.logos[0].href
            logo = logo.replace("https://a.espncdn.com/i", `https://a1.espncdn.com/combiner/i?img=/i`)
            logo += `&h=${SIZE + p}&w=${SIZE + p}`
            return logo

        }

        return undefined
    }
    return undefined
}


export const getPlayImg = (play, subbedOut) => {



    if (play.penaltyKick)
        if (play.didScore)
            return penalty
        else
            return penaltyMissed
    else if (play.ownGoal)
        return ownGoal
    else if (play.didScore)
        return goal
    else if (play.didAssist)
        return boot
    else if (play.redCard)
        return redCard
    else if (play.yellowCard)
        return yellowCard

    else if (play.substitution)
        if (subbedOut)
            return arrowOut
        else
            return arrowIn

    else
        return ""
    // else if (play.substitution)
    //     return p_in ? <Icon source={"chevron-right"} size={22} color='lime' /> : <Icon source={"chevron-left"} size={22} color='red' />


}


export const getDetailImg = (detail) => {

    if (detail.penaltyKick)
        return penalty
    else if (detail.redCard)
        return redCard
    else if (detail.scoringPlay)
        return goal
    else
        return ""
}
