import { LocationProvider, Router, Route, ErrorBoundary,  } from 'preact-iso';

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

const App = () => {
  return (
    <LocationProvider>
      <ErrorBoundary onError={e => console.log(e)}>

        <Header />
        
        <main className='mx-auto w-full'>
          <Router>
            <RedirectHome path="/"/>
            <Route path="/:date" component={HomePage} />
            <Route path="/game/:id" component={GamePage} />
            <Route path="/league/:id" component={LeaguePage} />
            <Route path="/team/:id" component={TeamPage} />
            <Route path="/player/:id" component={PlayerPage} />
            <Route path="/article/:id" component={ArticlePage} />
            <Route path="/video/:id" component={VideoPage} />
            <Route path="/search" component={SearchPage} />

            {/* <Route path="/profile/:id" component={Profile} /> */}
            <NotFound default />
          </Router>
        </main>

      </ErrorBoundary>
    </LocationProvider >
  );
}


export default App