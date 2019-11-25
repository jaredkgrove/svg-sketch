import React from 'react';
import {fetchSketches} from '../actions/fetchSketches'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'

import { connect } from 'react-redux';
import SketchesList from '../components/SketchesList'
import NewSketchInput from '../components/NewSketchInput';

import '../styles/home.css'
import WelcomeSVG from '../containers/WelcomeSVG';

class HomeView extends React.Component {

    componentDidMount(){
        // this.props.clearCurrentSketch()
        if(!this.props.sketches.length){
            this.props.fetchSketches()
        }
    }

    componentDidUpdate(){
        if (this.props.currentSketch.id) {
            this.props.history.push(`/sketches/${this.props.currentSketch.id}/edit`)
        }
    }

    render(){
        return(
            <div className='home'>
            
                <NewSketchInput />
                <WelcomeSVG elements={this.props.currentSketch.elements}/>
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

