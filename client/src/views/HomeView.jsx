import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import {fetchSketches} from '../actions/fetchSketches'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'
import SketchView from './SketchView'

import WelcomeSVG from '../containers/WelcomeSVG';

class HomeView extends React.Component {
    constructor(){
        super()
        this.state = {
            hasTransitioned: false
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

    transitionToSketches = () => {
        this.setState({
            hasTransitioned: true
        })
    }

    handleScroll = (e) => {
        e.preventDefault()
        if(e.deltaY > 0){
            this.setState({
                hasTransitioned: true
            })
        }else{
            this.setState({
                hasTransitioned: false
            })
        }
    }

    render(){
        return(
            <HomeViewWrapper hasTransitioned={this.state.hasTransitioned} onWheel={this.handleScroll} onTouchMove={this.handleScroll}>
                <WelcomeSVG transition={this.transitionToSketches} visible={!this.state.hasTransitioned}/>
                <SketchView visible={this.state.hasTransitioned}/>
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
  position: relative;
  width: 100vw;
  height: 100vh;
`;