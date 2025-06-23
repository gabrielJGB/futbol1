import React from 'react'
import FieldPlayer from './FieldPlayer'


const FieldLine = ({ line, lineIndex, invertField, color, isHome, playersInLine, isThisBoca }) => {

    return (
        <div className={`flex ${isHome ? (!invertField ? "flex-col" : "flex-col-reverse") : (!invertField ? "flex-col-reverse" : "flex-col")} justify-evenly gap-1 `}>
            {
                line.map((player, p) => (
                    <FieldPlayer
                        key={p}
                        color={color}
                        player={player}
                        isThisBoca={isThisBoca}
                        plays={"plays" in player ? player.plays : false}
                        subbedOutFor={"subbedOutFor" in player ? player.subbedOutFor : false}
                    />
                ))
            }
        </div>
    )

}

export default FieldLine