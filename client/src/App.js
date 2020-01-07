import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer'

import HomeView from './views/HomeView';
import EditView from './views/EditView';
import {getCurrentUser} from './actions/currentUser'

import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    console.log(localStorage.getItem('token'))
      this.props.getCurrentUser(localStorage.getItem('token'))
  }
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

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);