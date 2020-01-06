import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer'

import HomeView from './views/HomeView';
import EditView from './views/EditView';

class App extends React.Component {
  render(){
    return (
      // <div className="App" >
      <>
        <HeaderContainer />
        <Route exact path='/' render= {routerProps => <HomeView {...routerProps} />}/>
        <Route path='/sketches/:sketchID/edit' render= {routerProps => <EditView {...routerProps} />}/>
       {/* </div> */}
      </>
    )
  }
}



export default App;