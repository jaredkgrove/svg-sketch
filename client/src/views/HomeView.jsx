import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {fetchSketches} from '../actions/fetchSketches'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'
import SketchesList from '../components/SketchesList'
import NewSketchInput from '../components/NewSketchInput';

import WelcomeSVG from '../containers/WelcomeSVG';

class HomeView extends React.Component {

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

    render(){
        return(
            <>
                <NewSketchInput />
                <WelcomeSVG elements={this.props.currentSketch.elements}/>
                <p>To get started, create a new sketch or check out one of the <Link to='/sketches'>Public Sketches</Link></p>
            </>
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
