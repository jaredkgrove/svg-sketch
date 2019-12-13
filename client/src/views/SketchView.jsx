import React from 'react';
import {fetchSketch} from '../actions/fetchSketch'
import {deleteSketch} from '../actions/deleteSketch'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'


import {fetchSketches} from '../actions/fetchSketches'

import { connect } from 'react-redux';
import SketchPreviewContainer from '../containers/SketchPreviewContainer';
import SketchesList from '../components/SketchesList'
import NewSketchInput from '../components/NewSketchInput'
import SketchData from '../components/SketchData'

class SketchView extends React.Component {

    componentDidMount(){
        if(!this.props.sketches.length){
            this.props.fetchSketches().then(resp => {
                this.props.fetchSketch(resp.payload[0].id)
            })
        }else{
            this.props.fetchSketch(this.props.sketches[0].id)
        }
    }

    handleDelete = () => {
        this.props.clearCurrentSketch()
        this.props.deleteSketch(this.props.currentSketch.id)
        this.setCurrentSketch(this.props.sketches[0].id)
    }

    setCurrentSketch = (id) => {
        this.props.clearCurrentSketch()
        this.props.fetchSketch(id)
    }

    render(){
        return(
            <>
                <NewSketchInput />
                <SketchData sketch={this.props.currentSketch} handleDelete={this.handleDelete}/>
                <SketchPreviewContainer elements={this.props.currentSketch.elements} handleSave={this.handleUpdateSketch}/>
                <SketchesList sketches={[...this.props.sketches].sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated))} setSketch={this.setCurrentSketch} text='sketches'/>
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

export default connect(mapStateToProps, {fetchSketch, fetchSketches, deleteSketch, clearCurrentSketch})(SketchView)



