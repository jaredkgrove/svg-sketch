import React from 'react';
import {fetchSketches} from '../actions/fetchSketches'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'

import { connect } from 'react-redux';
import SketchesList from '../components/SketchesList'
import NewSketchInput from '../components/NewSketchInput';
// import HeaderContainer from '../containers/HeaderContainer'

import '../styles/home.css'


class HomeView extends React.Component {
    state = {
        name: ''
    }

    componentDidMount(){
        this.props.clearCurrentSketch()
        if(!this.props.sketches.length){
            this.props.fetchSketches()
        }
    }

    componentDidUpdate(){
        if (this.props.currentSketch.id) {
            this.props.history.push(`/sketches/${this.props.currentSketch.id}/edit`)
        }
    }

    handleCreateSketch = (state) => {
        this.props.createSketch(state)

        
    }

    render(){
        return(
            <div className='home'>
            
                <NewSketchInput />
                <div className='recently-created'>
                    <h1>Recently Created</h1>
                    <SketchesList sketches={this.props.sketches} />
                </div>
                <div className='recently-updated'>
                    <h1>Recently Updated</h1>
                    <SketchesList sketches={[...this.props.sketches].sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated))}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sketches: state.sketches,
        currentSketch: state.currentSketch
    }
  }

export default connect(mapStateToProps, { fetchSketches, clearCurrentSketch })(HomeView)

