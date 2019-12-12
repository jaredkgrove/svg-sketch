import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';

import {fetchSketches} from '../actions/fetchSketches'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'
import SketchesList from '../components/SketchesList'
import NewSketchInput from '../components/NewSketchInput';

import '../styles/home.css'
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
            <HomeWrapper>
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
            </HomeWrapper>
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

const HomeWrapper = styled.div`
    text-align: center;
`;

// .home{
//     text-align: center;
// }

// .recently-created{
//     float: left;
//     text-align: left;
//     margin: 0 0 0 10vw;
// }

// .recently-updated{
//     float: right;
//     text-align: left;
//     margin: 0 10vw 0 0;
// }


// .home .sketch-board.welcome{
//   border-radius: 10px;
//   margin: 10px;
//   width: 80vw;
//   display: block;
//   margin: auto;
// }
