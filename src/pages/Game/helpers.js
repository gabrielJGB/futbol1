export const getTabs = (game) => {

    let tabs = [
        { show: false, name: "Info" },
        { show: false, name: "Formaciones" },
        { show: true, name: "Previa" },
        { show: false, name: "Penales" },
        { show: false, name: "Relato" },
        { show: false, name: "Estadísticas" },
        { show: false, name: "Posiciones" },
        { show: false, name: "Videos" }
    ]



    if ("roster" in game.rosters[0])
        tabs[1].show = true

    if ("shootout" in game)
        tabs[3].show = true

    if ("commentary" in game || "keyEvents" in game)
        tabs[4].show = true

    if ("statistics" in game.boxscore.teams[0] && game.boxscore.teams[0].statistics.length > 0)
        tabs[5].show = true

    if (game.standings.groups.length && game.standings.groups[0].standings.entries.length)
        tabs[6].show = true

    if ("videos" in game && game.videos.length)
        tabs[7].show = true

    return tabs

}