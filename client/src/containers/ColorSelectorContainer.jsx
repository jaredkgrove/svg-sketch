import React from 'react';
import { connect } from 'react-redux';

import HueSelector from '../components/HueSelector'
import SaturationLightnessSelector from '../components/SaturationLightnessSelector'
import ColorIndicator from '../components/ColorIndicator'

const ColorSelectorContainer = (props) => {
    let lineColor = props.settings.lineColor
    let fillColor = props.settings.fillColor
    const handleLineColorChange = ({h = lineColor.h, s = lineColor.s, l = lineColor.l}) => {
        props.updateLineColorSetting(h, s, l)
    }

    const handleFillColorChange = ({h = fillColor.h, s = fillColor.s, l = fillColor.l}) => {
        props.updateFillColorSetting(h, s, l)
    }

    return(
        <div className="color-selectors">
            <div className='line-color'>
                <div>Line Color</div>
                <div className='color-select'>
                    <SaturationLightnessSelector initColor={props.settings.lineColor} handleChange={handleLineColorChange}/>
                    <ColorIndicator color={props.settings.lineColor}/>
                </div>
                <div className='hue-select'>
                    <HueSelector handleChange={handleLineColorChange} initHue={props.settings.lineColor.h}/>
                </div>
            </div>
            <div className="fill-color">
                <div>Fill Color</div>
                <div className='color-select'>
                    <SaturationLightnessSelector initColor={props.settings.fillColor} handleChange={handleFillColorChange}/>
                    <ColorIndicator color={props.settings.fillColor}/>
                </div>
                <div className='hue-select'>
                    <HueSelector handleChange={handleFillColorChange} initHue={props.settings.fillColor.h}/>
                </div>
                <button>No Fill</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateLineColorSetting: (h, s , l) => dispatch({ type: 'UPDATE_LINE_COLOR', payload: {h:h, s:s, l:l} }),
      updateFillColorSetting: (h, s , l) => dispatch({ type: 'UPDATE_FILL_COLOR', payload: {h:h, s:s, l:l} })

    }
  }

export default connect(null, mapDispatchToProps)(ColorSelectorContainer)
