import React from 'react'
import GameInfo from './GameInfo'
import VideoCard from '../../../../components/VideoCard'
import PossessionCard from './PossessionCard'
import LeagueArticles from './LeagueArticles'
import GameArticle from './GameArticle'

const OverviewTab = ({ game }) => {

  const state = game.header.competitions[0].status.type.state
  const statsInGame = "statistics" in game.boxscore.teams[0] && game.boxscore.teams[0].statistics.length > 0


    const getVideo = (game) => {

        const highlight = game.videos.find((video) => video.duration > 229)


        if (highlight != undefined) {
            return highlight

        } else {
            return game.videos[0]
        }
    }

    return (
        <div className='flex flex-col gap-4 md:px-0 px-1'>

            {
                game.videos?.length > 0 &&
                <VideoCard hd={true} video={getVideo(game)} muted={false} autoPlay={false} />
            }

            {/* {
                false &&
                <AttackMomentum sofaId={sofaId} />
            } */}

            {
                "article" in game &&
                <GameArticle article={game.article} />

            }


            <GameInfo game={game} />

            {
                statsInGame && (state === "in" || state === "post") &&
                <PossessionCard
                    homeTeam={game.header.competitions[0].competitors[0].team}
                    awayTeam={game.header.competitions[0].competitors[1].team}
                    homeStats={game.boxscore.teams[0].statistics}
                    awayStats={game.boxscore.teams[1].statistics}
                />
            }


            {
                "news" in game && game.news.articles.length > 0 ?
                    <LeagueArticles news={game.news} />
                    : <></>
            }


        </div>
    )
}

export default OverviewTab