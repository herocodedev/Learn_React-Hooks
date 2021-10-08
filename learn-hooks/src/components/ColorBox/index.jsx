import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
ColorBox.propTypes = {
    
};

function getRandomColor(){
    const data = ['black','blue','pink','#ccc','orange']
    const colorIdx = Math.trunc(Math.random()*data.length)
    return data[colorIdx]
}

function ColorBox() {
    const [color,setColor] = useState(() => {
        const initColor = localStorage.getItem('ColorBox') || 'aqua'
        return initColor
    })

    const handleSetColor = () => {
        const newColor = getRandomColor()
        setColor(newColor)
        localStorage.setItem('ColorBox',newColor)
    }

    return (
        <div 
        className="color-box" 
        style={{backgroundColor:color}}
        onClick = {() => handleSetColor()}
        >
            <p style={{color:'rebeccapurple'}}>Color Box</p>
        </div>
        
    );
}

export default ColorBox;