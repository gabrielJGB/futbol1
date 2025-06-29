import React from 'react'
import Event from './Event'


const KeyEvents = ({ keyEvents,teams }) => {

    const getTeam = (displayName) => {
        return teams.find((team) => team.team.displayName === displayName)?.team
    }

    
    

    return (
        <div className='flex flex-col-reverse gap-3'>
            {
                keyEvents.map((event, i) => (
                    <Event
                        key={i}
                        text={event.text}
                        clock={event.clock.displayValue}
                        participants={"participants" in event && event.participants}
                        typeId={"type" in event && "id" in event.type && event.type.id}
                        typeText={"type" in event && "text" in event.type && event.type.text}
                        team={"team" in event && getTeam(event.team.displayName)}

                    />
                ))
            }
        </div>
    )
}

export default KeyEvents