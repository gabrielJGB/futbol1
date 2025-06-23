import { selectedTab } from '../signals'
import CommentaryTab from '../tabs/Commentary/_CommentaryTab'
import LineupsTab from '../tabs/Lineups/_LineupsTab'
import OverviewTab from '../tabs/Overview/_OverviewTab'
import PositionsTab from '../tabs/Positions/_PositionsTab'
import PrevTab from '../tabs/Prev/_PrevTab'
import ShootoutTab from '../tabs/Shootout/_ShootoutTab'
import StatsTab from '../tabs/Stats/_StatsTab'
import VideosTab from '../tabs/Videos/_VideosTab'

const TabView = ({ game }) => {

  const getSelected = () => {    
    
    switch (selectedTab.value) {
      case 0:
        return <div className='block md:hidden'><OverviewTab game={game} /></div>
      case 1:
        return <LineupsTab game={game} />
      case 2:
        return <PrevTab game={game} />
      case 3:
        return <ShootoutTab game={game} />
      case 4:
        return <CommentaryTab game={game} />
      case 5:
        return <StatsTab game={game} />
      case 6:
        return <PositionsTab game={game} />
      case 7:
        return <VideosTab game={game} />
    }

  }


  return (
    <div className='md:mx-0  mt-2 mb-10'>
      { getSelected() }
    </div>
  )
}

export default TabView