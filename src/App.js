
import './App.css';
import Header from './header'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats'
import Chatscreen from './Chatscreen';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/chat/:person'>
            <Header backButton='/chat'/>
            <Chatscreen/>

            <h3>It works</h3>
            </Route>
          <Route path='/chat'>
            <Header backButton='/'/>
            <Chats/>
          </Route>
          <Route path='/'>
            <Header/>
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
