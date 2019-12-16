import React from 'react';
import { connect } from 'react-redux';
import LineWidthSelector from '../components/lineWidthSelector'
import LineTypeSelector from '../components/lineTypeSelector'
import styled from 'styled-components'

const StrokeSelectorContainer = (props) => {

    const handleLineWidthUpdate = (width) => {
        props.updateLineWidthSetting(width)
    }

    const handleLineTypeUpdate = (type) => {
        props.updateLineTypeSetting(type)
    }

    return(
        <StrokeSelectorWrapper>
            <div>Line Width</div>
            <div className='line-width'>
                <LineWidthSelector handleChange={handleLineWidthUpdate} lineWidth={props.settings.lineWidth}/>
            </div>
            <div>Line Type</div>
            <div className="line-type">
                <LineTypeSelector handleUpdate={handleLineTypeUpdate} lineType={props.settings.lineType}/>
            </div>
        </StrokeSelectorWrapper>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateLineWidthSetting: (width) => dispatch({ type: 'UPDATE_LINE_WIDTH', payload: width }),
      updateLineTypeSetting: (type) => dispatch({ type: 'UPDATE_LINE_TYPE', payload: type })
    }
  }

export default connect(null, mapDispatchToProps)(StrokeSelectorContainer)

const StrokeSelectorWrapper = styled.div`
    box-sizing: border-box ;
    float: left;
    padding: 1vw 0.5vw 1vw 0.5vw;
    margin: 0 0 0 1vw;
    border-radius: 10px;
    width: 14%;
    background:  hsl(207, 25%, 20%);
    clear: none;
    overflow: auto;
`;