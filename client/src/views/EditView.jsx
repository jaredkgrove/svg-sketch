import React from 'react';
import {fetchSketch} from '../actions/fetchSketch'
import {updateSketch} from '../actions/updateSketch'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'
import { connect } from 'react-redux';
import SketchContainer from '../containers/SketchContainer';
import SettingsContainer from '../containers/SettingsContainer'
import styled from 'styled-components'

class EditView extends React.Component {

    componentDidMount(){
        if (this.props.match.params.sketchID !== this.props.currentSketch.id){
            this.props.fetchSketch(this.props.match.params.sketchID)
        }
    }

    componentWillUnmount(){
        this.props.clearCurrentSketch()
    }

    handleUpdateSketch = (id, state) => {
        this.props.updateSketch(id, state)
    }

    render(){
        const loadSaveStatus = () => {
            if(this.props.currentSketch.loading) {
                return <h1>LOADING</h1>
            }else if(this.props.currentSketch.saving) {
                return <h1>SAVING</h1>
            }
        }

        return(
            <EditViewWrapper>
                {loadSaveStatus()}
                <SketchContainer settings={this.props.settings} currentSketch={this.props.currentSketch} handleSave={this.handleUpdateSketch}/>
                <SettingsContainer settings={this.props.settings}/>
            </EditViewWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchSketch: (id) => dispatch(fetchSketch(id)),
      updateSketch: (id, elements) => dispatch(updateSketch(id, elements)),
      clearCurrentSketch: () => dispatch(clearCurrentSketch())
    }
  }

const mapStateToProps = state => {
    return {
        settings: state.settings,
        currentSketch: state.currentSketch
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EditView)

const EditViewWrapper = styled.div`
    position: absolute;
    top: 8vh;
    width: 100vw
    left: 0px;
`;
