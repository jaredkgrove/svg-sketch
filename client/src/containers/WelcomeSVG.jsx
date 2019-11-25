import React, {useState, useEffect} from 'react';

import ElementsContainer from './ElementsContainer'

    const WelcomeSVG = (props) => {
        const [visibleElements, setVisibleElements] = useState([])


        useEffect(() => {
            if(props.elements.length){
                let elementIndex = 0
                // setCurrentImage(listingData.images[imageIndex])
                const id = setInterval(() => {
                    // setVisibleElements([...visibleElements, props.elements[elementIndex]])
                    // elementIndex = elementIndex + 1
                    setVisibleElements( () => {

                        if(elementIndex === props.elements.length){clearInterval(id)}
                        elementIndex = elementIndex + 1
                        return props.elements.slice(0, elementIndex)

                    })
                  }
                  , 200);
                  return () => clearInterval(id);
            }

          }, []);
        // const elements = 
        return(
            <svg viewBox = {`0 0 1000 100`} className={"sketch-board welcome"} >
                {console.log(props.elements)}
                <ElementsContainer elements={visibleElements}/>
            </svg>
        )
    }

export default WelcomeSVG
