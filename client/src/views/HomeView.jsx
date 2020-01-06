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
        this.props.clearCurrentSketch()
        if(!this.props.sketches.length){
            this.props.fetchSketches()
        }
    }

    componentDidUpdate(){
        // if (this.props.currentSketch.id) {
        //     this.props.history.push(`/sketches/${this.props.currentSketch.id}/edit`)
        // }
    }


    handleScroll = (e) => {
        e.preventDefault()
        if(e.deltaY > 0){
          this.nextView()
        }else{
          this.previousView()
        }
      }
    
      nextView = () => {
        if (this.state.currentView < 1){
          this.setState({
            currentView: this.state.currentView + 1
          })
        }
      }
    
      previousView = () => {
        if (this.state.currentView > 0){
            this.setState({
                currentView: this.state.currentView - 1
            })
        }
      }

    render(){
        return(

            <HomeViewWrapper view={this.state.currentView} onWheel={this.handleScroll} onTouchMove={this.handleScroll}>
                <NewSketchInput />
                <WelcomeSVG transition={this.nextView} visible={!this.state.hasTransitioned}/>
                <SketchPane visible={this.state.hasTransitioned}/>
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