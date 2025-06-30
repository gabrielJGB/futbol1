import { LocationProvider, Router, Route, ErrorBoundary, } from 'preact-iso';

import NotFound from './pages/_404.jsx';
import HomePage from './pages/Home/index.jsx';
import Header from './components/Header.jsx';
import RedirectHome from './pages/RedirectHome.jsx';
import GamePage from './pages/Game/index.jsx';
import LeaguePage from './pages/League/index.jsx';
import TeamPage from './pages/Team/index.jsx';
import PlayerPage from './pages/Player/index.jsx';
import ArticlePage from './pages/Article/index.jsx';
import VideoPage from './pages/Video/index.jsx';
import SearchPage from './pages/Search/index.jsx';
import Menu from './components/Menu.jsx';


const App = () => {
  return (
    <LocationProvider>
      <ErrorBoundary onError={e => console.log(e)}>

        <Header />

        <div className='flex flex-row  md:gap-20  md:mb-10 md:mt-5 md:mx-10'>

          <Menu />

          <Router >
            <RedirectHome path="/" />
            <Route path="/search/" component={SearchPage} />
            <Route path="/:date" component={HomePage}  />
            <Route path="/game/:id" component={GamePage} />
            <Route path="/league/:id" component={LeaguePage} />
            <Route path="/team/:id" component={TeamPage} />
            <Route path="/player/:id" component={PlayerPage} />
            <Route path="/article/:id" component={ArticlePage} />
            <Route path="/video/:id" component={VideoPage} />
            <NotFound default />
          </Router>

        </div>

      </ErrorBoundary>
    </LocationProvider >
  );
}


export default App