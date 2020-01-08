import React from 'react';
import styled from 'styled-components'

const SketchesList = ({ sketches, text, setSketch }) => {
  
  const renderSketches = () => sketches.map(sketch => <SketchLink key={sketch.id} onClick={e => setSketch(sketch.id)}>{sketch.name}</SketchLink>);
 
  return (
      <SketchListWrapper>
          <h3 style={{padding:'0px', margin: '0px auto 5px auto', width: '100%'}}>{text}</h3>
          {renderSketches()}
      </SketchListWrapper>
  );
};
export default SketchesList

const SketchListWrapper = styled.div`
  box-sizing: border-box ;
  padding: 1vw 0.5vw 1vw 0.5vw;
  margin: 0.75vw 0.75vw 0px 0.75vw;
  border-radius: 10px;
  width: 23vw;
  background:  hsl(207, 25%, 20%);
  float: left;
  clear: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  text-align: center;
`;

const SketchLink = styled.div`
  text-align: left;
  width: 100%;
  cursor: pointer;
  :hover{
    color: hsl(207, 80%, 50%);
  }
`;