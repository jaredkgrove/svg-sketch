import React from 'react';
import circleImage from '../images/Circle.PNG'
import lineImage from '../images/Line.PNG'
import rectangleImage from '../images/Rectangle.PNG'
import polylineImage from '../images/Polyline.PNG'
 const LineTypeSelector = (props) => {

    const handleClick = (e) => {
        props.handleUpdate(e.target.value)
    }

    const isCurrentSetting = value => (value === props.lineType)

    return (
        <>
            <button className={isCurrentSetting('Circle') ? 'selected' : null} onClick={handleClick} value='Circle' style={{paddingTop:'21%', margin:'1%', background: `url(${circleImage})`, backgroundSize: 'cover'}}> </button>
            <button className={isCurrentSetting('Line') ? 'selected' : null} onClick={handleClick} value='Line' style={{paddingTop:'21%', margin:'1%', background: `url(${lineImage})`,  backgroundSize: 'cover'}}>  </button>
            <button className={isCurrentSetting('Rectangle') ? 'selected' : null} onClick={handleClick} value='Rectangle' style={{paddingTop:'21%', margin:'1%', background: `url(${rectangleImage})`, backgroundSize: 'cover'}}> </button>
            <button className={isCurrentSetting('Polyline') ? 'selected' : null} onClick={handleClick} value='Polyline' style={{paddingTop:'21%', margin:'1%', background: `url(${polylineImage})`, backgroundSize: 'cover'}}>  </button>
        </>
    )
 }

 export default LineTypeSelector