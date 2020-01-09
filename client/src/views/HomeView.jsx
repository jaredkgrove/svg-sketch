import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import {fetchSketches} from '../actions/fetchSketches'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'
import SketchPane from './SketchPane'
import NewSketchInput from '../components/NewSketchInput';

import WelcomeSVG from '../containers/WelcomeSVG';

class HomeView extends React.Component {
    constructor(){
        super()
        this.state = {
            currentView: 0
        }
    }
    componentDidMount(){
      if(this.props.location.hash === '#sketches'){
        this.setState({currentView: 1})
      }
        this.props.clearCurrentSketch()
        if(!this.props.sketches.length){
            this.props.fetchSketches()
        }
    }

    componentDidUpdate(prevProps){
      if(prevProps.location.hash !== '#sketches' && this.props.location.hash === '#sketches'){
        this.setState({currentView: 1})
      }else if(prevProps.location.hash !== '' && this.props.location.hash === ''){
        this.setState({currentView: 0})
      }
    }

    handleScroll = (e) => {
      e.preventDefault()
      if(e.deltaY > 0){
        window.location.hash = '#sketches';
        this.goToSketchPane()
      }else{
        window.location.hash = '';
        this.goToWelcomSVG()
      }
    }

      goToSketchPane = () => {
          this.setState({
            currentView: 1
          })
      }

      goToWelcomSVG = () => {
        this.setState({
          currentView: 0
        })
    }

    render(){
        return(
            <HomeViewWrapper view={this.state.currentView} onWheel={this.handleScroll} onTouchMove={this.handleScroll}>
                <NewSketchInput />
                <WelcomeSVG transition={this.goToSketchPane} />
                <SketchPane />
            </HomeViewWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        sketches: state.sketches,
        currentSketch: state.currentSketch
    }
  }

export default connect(mapStateToProps, {fetchSketches, clearCurrentSketch })(HomeView)

const HomeViewWrapper = styled.div`
    top: ${props => props.view === 0 ? '0px' : '-100vh'};
    transition: top 1s ease-in
    position: relative;
    width: 100vw;
    overflow:hidden;
`;