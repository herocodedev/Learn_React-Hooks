import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function getRandomColor(){
    const data = ['black','blue','pink','#ccc','orange']
    const colorIdx = Math.trunc(Math.random()*data.length)
    return data[colorIdx]
}

function ColorBox() {
    const [color,setColor] = useState('pink')

    const handleSetColor = () => {
        const newColor = getRandomColor()
        setColor(newColor)
    }

    return (
        <div 
        className="color-box" 
        style={{backgroundColor:color}}
        onClick = {() => handleSetColor()}
        >
            Color Box
        </div>
    );
}

export default ColorBox;