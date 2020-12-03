import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (probs) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar navbar={probs.store.getState().navbar} />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile
          store={probs.store} dispatch={probs.dispatch} />} />
        <Route path='/dialogs' render={() => <Dialogs
          store={probs.store} dispatch={probs.dispatch} />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
}

export default App;
