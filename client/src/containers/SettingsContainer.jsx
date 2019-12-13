import React from 'react';
import ColorSelectorContainer from './ColorSelectorContainer'
import StrokeSelectorContainer from './StrokeSelectorContainer'

import { connect } from 'react-redux';


const SettingsContainer = ({settings, updateLineColorSetting, updateFillColorSetting}) => {

    const handleLineColorChange = ({h = settings.lineColor.h, s = settings.lineColor.s, l = settings.lineColor.l}) => {
        updateLineColorSetting(h, s, l)
    }

    const handleFillColorChange = ({h = settings.fillColor.h, s = settings.fillColor.s, l = settings.fillColor.l}) => {
        updateFillColorSetting(h, s, l)
    }

    return(
        <>
            <ColorSelectorContainer color={settings.lineColor} handleUpdate={handleLineColorChange} text='Line Color'/>
            <ColorSelectorContainer color={settings.fillColor} handleUpdate={handleFillColorChange} text='Fill Color'/>
            <StrokeSelectorContainer settings={settings}/>    
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateLineColorSetting: (h, s , l) => dispatch({ type: 'UPDATE_LINE_COLOR', payload: {h:h, s:s, l:l} }),
      updateFillColorSetting: (h, s , l) => dispatch({ type: 'UPDATE_FILL_COLOR', payload: {h:h, s:s, l:l} })
    }
  }

export default connect(null, mapDispatchToProps)(SettingsContainer)
