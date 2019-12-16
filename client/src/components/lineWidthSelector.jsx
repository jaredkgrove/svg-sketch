import React from 'react';
import styled from 'styled-components'


 class LIneWidthSlector extends React.Component {
     constructor(){
        super()
        this.state = {
            mouseDown: false,
            sliderPosition: 0,
            lineWidth: 0
        }
        this.sliderClientRect = ''
        this.slider = React.createRef();
     }

     updateDimensions = () => {
        this.sliderClientRect = this.slider.current.getBoundingClientRect() 
        this.setState({
            sliderPosition: this.getSliderPosition(this.state.lineWidth)
        })
      }

      componentDidMount() {
        this.sliderClientRect = this.slider.current.getBoundingClientRect() 
        window.addEventListener('resize', this.updateDimensions);
        this.setState({
            lineWidth: this.props.lineWidth,
            sliderPosition: this.getSliderPosition(this.props.lineWidth)
        })
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }
    
     componentDidUpdate(prevProps, prevState){
         if(this.state.sliderPosition && this.state.sliderPosition !== prevState.sliderPosition && (this.state.lineWidth !== prevState.lineWidth)){
            this.props.handleChange(this.state.lineWidth)
         }
     }
       
    handleOnMouseDown = (e) => {
        this.setState({
            mouseDown: true
        })
        this.setSliderPosition(e)
    } 

    handleOnMouseMove = (e) => {
        if(this.state.mouseDown){
            this.setSliderPosition(e)
        }
    }

    handleOnMouseUp = () => {
        this.setState({
            mouseDown: false
        })
    }

    setSliderPosition = (e) => {
        this.sliderClientRect = this.slider.current.getBoundingClientRect() 
        let x = e.clientX - this.sliderClientRect.left
        if(x < 0){x=0}
        if(x > this.sliderClientRect.width){x = this.sliderClientRect.width}
        this.setState({
            sliderPosition: x,
            lineWidth: this.getWidth(x)
        })
    }

    getWidth = (pos) => (20 * (pos / this.sliderClientRect.width)) + 1 

    getSliderPosition = (lineWidth) => ((this.sliderClientRect.width * lineWidth) / 20) + 1

    render(){
        return (
            <WidthSlider ref={this.slider} onMouseDown={this.handleOnMouseDown} onMouseMove={this.handleOnMouseMove} onMouseUp={this.handleOnMouseUp} sliderPosition={this.state.sliderPosition}/>
        )
    }
 }

 export default LIneWidthSlector

 const WidthSlider = styled.div`
    box-sizing: border-box;
    position: relative;
    height: 20px;
    margin: 10px 0px 10px 0px;
    clear: both;
    background: ${props => `linear-gradient(to right, transparent ${props.sliderPosition}px, hsl(207, 25%, 20%, 0.9) ${props.sliderPosition}px), linear-gradient(to right bottom, hsl(207, 25%, 20%) 50%, white 50%);`}
`;


//  const LIneWidthSlector = (props) => {

//     const handleClick = (e) => {
//         if(e.target.value){
//             props.handleUpdate(e.target.value)
//         }
//     }

//     const isCurrentSetting = (value) => (value === props.lineWidth)

//     return (
//         <>
//             <button className={isCurrentSetting('2') ? 'selected' : null} onClick={handleClick} value={2} style={{height:'100%', width: '18%', margin:'1%'}}> 
//                 <div style={{background:'black', width:'2px',height:'2px'}}></div>
//             </button>

//             <button className={isCurrentSetting('4') ? 'selected' : null} onClick={handleClick} value={4} style={{height:'100%', width: '18%', margin:'1%'}}> 
//                 <div style={{background:'black', width:'4px',height:'4px'}}></div>
//             </button>

//             <button className={isCurrentSetting('6') ? 'selected' : null} onClick={handleClick} value={6} style={{height:'100%', width: '18%', margin:'1%'}}> 
//                 <div style={{background:'black', width:'6px',height:'6px'}}></div>
//             </button>

//             <button className={isCurrentSetting('8') ? 'selected' : null} onClick={handleClick} value={8} style={{height:'100%', width: '18%', margin:'1%'}}> 
//                 <div style={{background:'black', width:'8px',height:'8px'}}></div>
//             </button>

//             <button className={isCurrentSetting('10') ? 'selected' : null} onClick={handleClick} value={10} style={{height:'100%', width: '18%', margin:'1%'}}> 
//                 <div style={{background:'black', width:'10px',height:'10px'}}></div>
//             </button>
//         </>
//     )
//  }

//  export default LIneWidthSlector