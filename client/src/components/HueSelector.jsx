import React from 'react';
import styled from 'styled-components'


 class HueSelector extends React.Component {
     constructor(){
        super()
        this.state = {
            mouseDown: false,
            sliderPosition: 0,
            hue: 0
        }
        this.hueBarClientRect = ''
        this.hueBar = React.createRef();
     }

     updateDimensions = () => {
        this.hueBarClientRect = this.hueBar.current.getBoundingClientRect() 
        this.setState({
            sliderPosition: this.getSliderPosition(this.state.hue)
        })
      }

      componentDidMount() {
        this.hueBarClientRect = this.hueBar.current.getBoundingClientRect() 
        window.addEventListener('resize', this.updateDimensions);
        this.setState({
            hue: this.props.initHue,
            sliderPosition: this.getSliderPosition(this.props.initHue)
        })
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }
    
     componentDidUpdate(prevProps, prevState){
         if(this.state.sliderPosition && this.state.sliderPosition !== prevState.sliderPosition && (this.state.hue !== prevState.hue)){
            this.props.handleChange({h: this.state.hue})
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
        this.hueBarClientRect = this.hueBar.current.getBoundingClientRect() 
        let x = e.clientX - this.hueBarClientRect.left
        if(x < 0){x=0}
        if(x > this.hueBarClientRect.width){x = this.hueBarClientRect.width}
        this.setState({
            sliderPosition: x,
            hue: this.getHue(x)
        })
    }

    getHue = (pos) => (360 * (pos / this.hueBarClientRect.width))

    getSliderPosition = (hue) => ((this.hueBarClientRect.width * hue)/360)

    render(){
        return (
            <HueBar ref={this.hueBar} onMouseDown={this.handleOnMouseDown} onMouseMove={this.handleOnMouseMove} onMouseUp={this.handleOnMouseUp}>
                <div style={{backgroundColor: `hsl(${this.state.hue},100%,50%)`, width: '15px', height: '15px', top: '-25%', borderRadius:'100%', border:'1px solid white', position: 'absolute', left:`calc(${this.state.sliderPosition}px - 7.5px)`, display:'inline-block'}}></div>
            </HueBar>
        )
    }
 }

 export default HueSelector

 const HueBar = styled.div`
    box-sizing: border-box;
    position: relative;
    height: 10px;
    margin: 10px 0px 10px 0px;
    clear: both;
    background: linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))
`;

//  .hue-select {

//   }

//   .hue-bar{
//     position: relative;
//     box-sizing: border-box;
//       height: 100%;
//       width: 100%;
//   }