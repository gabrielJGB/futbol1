import { getLogo } from "./images";
import { convertTimestamp } from "./time";

export const getTeamObject = (game, i) => {
    return {
        id: game.competitors[i].id,
        name: game.competitors[i].team.shortDisplayName,
        logoURL: game.competitors[i].team.logo,
        score: game.status.type.state != "pre" ? game.competitors[i].score : "",
        scorers: game.details.filter((d) => d.team.id === game.competitors[i].id && d.scoringPlay && !d.shootout),
        redCards: game.details.filter((d) => d.team.id === game.competitors[i].id && d.redCard),
        winner: game.competitors[i].winner,
        logo: getLogo(game.competitors[i], 40)
    }
}


export const getStatusText = (status, detail, date) => {



    switch (status) {

        case "STATUS_SCHEDULED":
            return convertTimestamp(date).time;

        case "STATUS_FIRST_HALF":
        case "STATUS_SECOND_HALF":
            return `${detail}`

        // return `${elem.detail} PT`    
        // return `${elem.detail}`
        // return `${parseInt(elem.detail) - 45}' ST`


        case "STATUS_OVERTIME":
            return "ET Sup."

        case "STATUS_HALFTIME":
        case "STATUS_HALFTIME_ET":
            return "ET";

        case "STATUS_ABANDONED":
            return "Susp."

        case "STATUS_POSTPONED":
            return "Aplaz.";

        case "STATUS_IN_PROGRESS":
            return "Jugando"

        case "STATUS_DELAYED":
            return "Retras."

        case "STATUS_CANCELED":
            return "Cancel.";

        case "STATUS_SHOOTOUT":
        case "STATUS_END_OF_EXTRATIME":
            return "Pen.";

        case "STATUS_FINAL_AGT":
        case "STATUS_FULL_TIME":
            return "Final";

        case "STATUS_FINAL_PEN":
            return "Final\n(Pen.)";

        case "STATUS_FINAL_AET":
            return `Final\n(Supl.)`;

        default:
            return "...";
    }
}

export const getStatusColor = (status) => {


    switch (status) {
        case "pre":
            return `rgb(0, 111, 41)`
        case "in":
            return `rgb(185, 28, 28)`
        case "post":
            return `rgb(10,10,10)`
        default:
            return ``
    }
}


export const leagueHasState = (objeto, state) => {

    if (objeto.hasOwnProperty("state") && objeto["state"] === state) {
        return true;
    }

    for (const propiedad in objeto) {
        if (objeto[propiedad] !== null && typeof objeto[propiedad] === "object") {
            const resultado = leagueHasState(objeto[propiedad], state);
            if (resultado) {
                return true;
            }
        }
    }

    return false;
}

export const formatTitle = (title) => {

    if (title === undefined)
        return ""

    title = title.replace("Argentine", "").replace(",", " -")
    title = title.replace("Round of 64", "32avos de final")
    title = title.replace("Round of 32", "16avos de final")
    title = title.replace("Round of 16", "Octavos de final")
    title = title.replace("Round of 8", "Cuartos de final")
    title = title.replace("Ronda de 64", "32avos de final")
    title = title.replace("Ronda de 32", "16avos de final")
    title = title.replace("Ronda de 16", "Octavos de final")
    title = title.replace("Ronda de 8", "Cuartos de final")
    title = title.replace("First Round", "Primera Ronda")
    title = title.replace("Second Round", "Segunda Ronda")
    title = title.replace("Third Round", "Tercera Ronda")
    title = title.replace("Fourth Round", "Cuarta Ronda")
    title = title.replace("Fifth Round", "Quinta Ronda")
    title = title.replace("Club Friendly", "Amistoso")
    title = title.replace("Finals", "Final")
    title = title.replace("Semifinals", "Semifinal")
    title = title.replace("Quarterfinals", "Cuartos de final")
    title = title.replace("Relegation", "Descenso")
    return title

}



export const sortRoster = (roster) => {

    // const order = ["G", "LI", "DCI", "DC", "DCD", "LD", "MI", "MCI", "MCD", "MD", "MO", "MI", "MCI", "MC", "MO", "MCD", "MD", "ACI", "ACD", "AI", "ACI", "A", "ACD", "AD"];

    const order = ["G", "LI", "DCI", "D", "DC", "DCD", "LD", "L", "MI", "MCI", "MC", "MO", "MCD", "MD", "M", "AI", "ACI", "A", "ACD", "AD"];


    // const order = ["G", "LI", "DCI", "DC", "DCD", "LD", "MI","MD","MI","MO","MD","A"]

    const sortedJson = roster.sort((a, b) => {
        const indexA = a.position?.abbreviation ? order.indexOf(a.position?.abbreviation) : -1;
        const indexB = b.position?.abbreviation ? order.indexOf(b.position?.abbreviation) : -1;


        if (indexA === -1 && indexB === -1) return 0;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;

        return indexA - indexB;
    });




    return sortedJson

}


export const getPlayerColor = (position) => {

    if (!position)
        return "#808080"

    if (position.displayName === "Arquero")
        return "#FF8700"

    else if (position.displayName.includes("Defensor") || position.displayName.includes("Lateral") || position.displayName.includes("defensivo") || position.displayName.includes("Líbero"))
        return "#20b4ff"

    else if (position.displayName.includes("Mediocampista"))
        return "#42d515"

    else if (position.displayName.includes("Atacante") || position.displayName.includes("Enganche"))
        return "#df1d1e"
    else
        return "#808080"

}



export const formatStat = (stat) => {

    switch (stat.shortDisplayName) {
        case "FC":
            return stat.value === 1 ? "Falta cometida" : "Faltas cometidas"
        case "FS":
            return stat.value === 1 ? "Falta recibida" : "Faltas recibidas"
        case "EC":
            return stat.value === 1 ? "Gol en contra" : "Goles en contra"
        case "TR":
            return stat.value === 1 ? "Tarjeta roja" : "Tarjetas rojas"
        case "TA":
            return stat.value === 1 ? "Tarjeta amailla" : "Tarjetas amaillas"
        case "GA":
            return stat.value === 1 ? "Gol recibido" : "Goles recibidos"
        case "SHF":
            return stat.value === 1 ? "Remate recibido" : "Remates recibidos"
        case "A":
            return stat.value === 1 ? "Asistencia" : "Asistencias"
        case "OF":
            return "Fuera de juego"
        case "ST":
            return stat.value === 1 ? "Remate preciso" : "Remates precisos"
        case "G":
            return stat.value === 1 ? "Gol" : "Goles"
        case "SH":
            return stat.value === 1 ? "Remate en total" : "Remates en total"
        case "SV":
            return stat.value === 1 ? "Atajada" : "Atajadas"
            
        default:
            return stat.shortDisplayName
    }


}