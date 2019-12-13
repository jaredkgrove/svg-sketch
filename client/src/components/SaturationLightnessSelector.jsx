import React from 'react';
import styled from 'styled-components'

class SaturationLightnessSelector extends React.Component {
    constructor(){
        super()
        this.state = {
            selectorPosition: {x:0, y:0},
            saturation: 0,
            lightness: 0
        }
        this.canvasClientRect = ''
        this.canvas = React.createRef();  
    }
    
    handleOnMouseDown = (e) => {
        if(e.buttons === 1){
            this.canvasClientRect = this.canvas.current.getBoundingClientRect() 
            let y = e.clientY - this.canvasClientRect.top - this.canvasClientRect.height
            let x = e.clientX - this.canvasClientRect.left
            if(x > this.canvasClientRect.width * 3/4){return}
            this.setState({
                selectorPosition: {x:x ,y:y},
                saturation: this.getSaturation(x, y),
                lightness: this.getLightness(x, y)
            })
        }
    } 

    updateDimensions = () => {
        if(this.canvas.current){
            this.canvasClientRect = this.canvas.current.getBoundingClientRect() 
            this.setState({
                selectorPosition: this.getSelectorPosition(this.state.saturation, this.state.lightness)
            })
        }
      }

    componentDidMount(){
        this.fillCanvas()
        window.addEventListener('resize', this.updateDimensions);
       
        this.canvasClientRect = this.canvas.current.getBoundingClientRect() 
        
        this.setState({
            saturation: this.props.initColor.s,
            lightness: this.props.initColor.l,
            selectorPosition: this.getSelectorPosition(this.props.initColor.s, this.props.initColor.l)
        })  
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.initColor.h !== prevProps.initColor.h){
            this.fillCanvas()
        }

        if(prevState.selectorPosition.x && this.state.selectorPosition !== prevState.selectorPosition ){
            this.props.handleChange({s: this.state.saturation, l: this.state.lightness})
        }
    }

    fillCanvas = () => {
        let context = this.canvas.current.getContext("2d");
        this.canvas.current.style.width='100%';
        this.canvas.current.style.height='100%';

        let height = this.canvas.current.height
        let width = this.canvas.current.width * 3/4

        let brightness = context.createLinearGradient(0, 0, 0, height);
        brightness.addColorStop(0, "white");
        brightness.addColorStop(1, "black");
        
        let saturation = context.createLinearGradient(0, 0, width, 0);
        saturation.addColorStop(0, "hsla(" + this.props.initColor.h + ",100%,50%,0)");
        saturation.addColorStop(1, "hsla(" + this.props.initColor.h + ",100%,50%,1)");

        context.fillStyle = brightness;
        context.fillRect(0, 0, width, height);
    
        context.fillStyle = saturation;
        context.globalCompositeOperation = "multiply";
        context.fillRect(0, 0, width, height);
        context.globalCompositeOperation = "source-over";
    }

    getSaturation = (x, y) => (100*this.hsvSatToHslSat(this.getHSVSat(x), this.getHSVValue(y)))

    getLightness = (x, y) => (100*this.hsvVToHslL(this.getHSVSat(x), this.getHSVValue(y)))

    getHSVSat = (x) => ((x / (this.canvasClientRect.width * 3/4)))

    getHSVValue = (y) => ((-y / this.canvasClientRect.height))

    hsvSatToHslSat = (sat,val) => ((2-sat)*val < 1 ? sat*val/((2-sat)*val):sat*val/(2-(2-sat)*val))

    hsvVToHslL = (sat, val) => ((2-sat)*val/2)

    hslSatToHsvSat = (sat,light) => {
        sat *= (light<.5) ? light : 1-light
        return 2*sat/(light+sat)
    }

    hslLtoHsvV = (sat, light) =>{
        sat *= (light<.5) ? light : 1-light;
        return light+sat 
    }

    getSelectorPosition = (sat, light) => {
        let x = this.hslSatToHsvSat(sat/100, light/100) * this.canvasClientRect.width * 3/4
        let y = -this.canvasClientRect.height * this.hslLtoHsvV(sat/100, light/100)
        return {x:x, y:y}
    } 
      
    render(){
        return (
            <SatLightWrapper>
                <SatLightCanvas ref={this.canvas} onMouseDown={this.handleOnMouseDown} onMouseMove={this.handleOnMouseDown} hue={this.props.initColor.h} sat={this.state.saturation} light={this.state.lightness} ></SatLightCanvas>
                <SelectorDiv selectorPosition={this.state.selectorPosition} hue={this.props.initColor.h} sat={this.state.saturation} light={this.state.lightness}></SelectorDiv>
            </SatLightWrapper>
        )
    }

}

 export default SaturationLightnessSelector

 
const SatLightWrapper = styled.div`
    float: right;
    clear: both;
    height: 50%;
`;

const SatLightCanvas = styled.canvas`
    background-color: ${props => `hsl(${props.hue}, ${props.sat}%, ${props.light}%)`};
`;

const SelectorDiv = styled.div`
    background-color: ${props => `hsl(${props.hue}, ${props.sat}%, ${props.light}%)`};
    width: 10px;
    height: 10px; 
    border:2px solid white; 
    border-radius: 7px; 
    position: relative; 
    top:${props => props.selectorPosition.y-5}px;
    left:${props => props.selectorPosition.x-5}px;
`;
