import React from 'react';
import ElementsContainer from './ElementsContainer'
import styled from 'styled-components'

class SketchContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            elements: [],
            tempElements: [],
            cursorElement: [],
            isDrawing: false
        }
        this.sketchClientRect = ''
        this.sketchArea = React.createRef();
        this.startPoint = {x:0, y:0}
    }

    componentDidMount(){
        this.setState({
            elements: this.props.currentSketch.elements
        })
        this.updateDimensions()
        this.sketchArea.current.addEventListener('touchstart', this.handleOnMouseDown);
        this.sketchArea.current.addEventListener('touchmove', this.handleOnMouseMove);
        this.sketchArea.current.addEventListener('touchend', this.handleOnMouseUp);
        window.addEventListener('resize', this.updateDimensions);
        window.addEventListener('keypress',this.handleOnKeyPress)
    }
    
    updateDimensions = () => {
        if(this.sketchArea.current){
            this.sketchClientRect = this.sketchArea.current.getBoundingClientRect() 
        }
    }

    componentWillUnmount() {
        this.sketchArea.current.removeEventListener('touchstart', this.handleOnMouseDown);
        this.sketchArea.current.removeEventListener('touchmove', this.handleOnMouseMove);
        this.sketchArea.current.removeEventListener('touchend', this.handleOnMouseUp);
    }

    componentDidUpdate(prevProps){
        if(this.props.currentSketch && (this.props.currentSketch !== prevProps.currentSketch)){
            this.setState({
                elements: this.props.currentSketch.elements
            })
        }
    }

    getCurrentPoint = (e) => {
        let clientX = e.clientX || e.touches[0].clientX
        let clientY = e.clientY || e.touches[0].clientY
        let x = clientX - this.sketchClientRect.left
        let y = clientY - this.sketchClientRect.top
        return {x:x, y:y}
    }

    handleOnMouseDown = (e) => {
        this.startPoint = this.getCurrentPoint(e)
        this.setState({
            isDrawing: true,
            cursorElement: []
        })
        
    } 

    handleOnMouseMove = (e) => {
        e.preventDefault()
        let point = this.getCurrentPoint(e)
        let ratio = 1000 / this.sketchClientRect.width
        let ratioX = 1000 / this.sketchClientRect.width
        let ratioY = 500 / this.sketchClientRect.height

        if(this.state.isDrawing){
            switch(this.props.settings.lineType){
                case 'Circle':
                    this.drawCircle(point.x, point.y, ratioX, ratioY)
                    break
                case 'Line':
                    this.drawLine(point.x, point.y, ratio)
                    break
                case 'Rectangle':
                    this.drawRectangle(point.x, point.y, ratio)
                    break
                case 'Polyline':
                    this.drawPolyline(point.x, point.y, ratio)
                    break
                default:
                    break
            }
        }else{
            this.setState({
                cursorElement: [{type: 'Circle', properties: {cx:(point.x * ratioX), cy:(point.y * ratioY), r:this.props.settings.lineWidth/4, stroke:this.getHSL(this.props.settings.lineColor), fill:this.getHSL(this.props.settings.fillColor), stroke_width:`${this.props.settings.lineWidth/2}`}}]
            })
        }
    }

    handleOnMouseUp = (e) => {
        if(this.state.isDrawing){
            if(this.state.tempElements.length){
                this.setState({
                    isDrawing: false,
                    elements: [...this.state.elements, ...this.state.tempElements],
                    tempElements: []
                }) 
            }
            this.startPoint = {x:0, y:0}
        }
    } 

    drawCircle = (x2, y2, ratioX, ratioY) => {
        let R = Math.pow(Math.pow(x2 - this.startPoint.x, 2) + Math.pow((y2 - this.startPoint.y), 2), 0.5)*ratioY
        this.setState({
            tempElements: [{type: 'Circle', properties: {cx:(this.startPoint.x*ratioX), cy:this.startPoint.y*ratioY, r:R, stroke:this.getHSL(this.props.settings.lineColor), fill:this.getHSL(this.props.settings.fillColor), stroke_width:`${this.props.settings.lineWidth}`}}]
        })
    }

    drawLine = (x2, y2, ratio) => {
        this.setState({
            tempElements: [{type: 'Line', properties: {x1:(this.startPoint.x*ratio), y1:(this.startPoint.y*ratio), x2:x2*ratio, y2:y2*ratio, stroke:this.getHSL(this.props.settings.lineColor), stroke_width:`${this.props.settings.lineWidth}`}}]
        })
    }

    drawRectangle = (x2, y2, ratio) => {
        this.setState({
            tempElements: [{type: 'Rectangle', properties: {x:(Math.min(this.startPoint.x,x2)*ratio), y:(Math.min(this.startPoint.y,y2)*ratio), width:Math.abs(x2-this.startPoint.x)*ratio, height:Math.abs(y2-this.startPoint.y)*ratio, stroke:this.getHSL(this.props.settings.lineColor), fill:this.getHSL(this.props.settings.fillColor), stroke_width:`${this.props.settings.lineWidth}`}}]
        })
    }

    drawPolyline = (x2, y2, ratio) => {
        if(this.state.tempElements.length){
            this.setState({
                tempElements: [{type: 'Polyline', properties: {...this.state.tempElements[0].properties, points: this.state.tempElements[0].properties.points + ` ${x2*ratio} ${y2*ratio}`}}] 
            })
        }else{
            this.setState({
                tempElements: [{type: 'Polyline', properties: {points:`${this.startPoint.x*ratio} ${this.startPoint.y*ratio} ${x2*ratio} ${y2*ratio}`, stroke:this.getHSL(this.props.settings.lineColor), stroke_width:`${this.props.settings.lineWidth}`}}]
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSave(this.props.currentSketch.id, this.state)
    }

    getHSL = ({h, s, l}) => `hsl(${h},${s}%,${l}%)`

    handleOnKeyPress = (e) => {
        if(e.keyCode === 100){
            this.setState({
                elements: this.state.elements.slice(0,-1),
                isDrawing: false,
            })
            this.startPoint={x:0, y:0}
        }
    }


    render(){
        const elementsToRender = () => [...this.state.elements, ...this.state.tempElements, ...this.state.cursorElement]
        return(
            <>
                <SketchWrapper ref={this.sketchArea} viewBox = {`0 0 1000 500`} onMouseDown={this.handleOnMouseDown} onMouseMove={this.handleOnMouseMove} onMouseUp={this.handleOnMouseUp} onMouseLeave={e => this.setState({cursorElement: []})}>
                <ElementsContainer elements={elementsToRender()} />
                </SketchWrapper>
                <SaveButton onClick={this.handleSubmit}>SAVE</SaveButton>
            </>
        )
    }
}

export default SketchContainer

const SketchWrapper = styled.svg`
    box-sizing: border-box;
    clear: none;
    text-align: center;
    float: right;
    height: 100%;
    width: 84%;
    box-sizing: border-box ;
    border-radius: 10px;
    background: hsl(207, 5%, 90%);
`;

const SaveButton = styled.button`
      position: absolute;
      top: -8vh;
      z-index:2;
      right: 0;
      height: 8vh;
      width: 10vw;
      background: hsl(207, 80%, 50%);
      padding: 0;
      border: none;
`;