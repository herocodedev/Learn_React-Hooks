import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react/cjs/react.development";

function randomColor(currentColor) {
  const colorList = ["red", "pink", "aqua", "yellow", "purple", "green"];

  const currentIndex = colorList.indexOf(currentColor);
  let newIndex = currentIndex;
  do {
    newIndex = Math.trunc(Math.random() * colorList.length);
  } while (currentIndex === newIndex);

  const randomIndex = newIndex;
  console.log(colorList[randomIndex]);
  return colorList[randomIndex];
}

function useMagicColor(currentColor) {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");
  // Change color every one seconds
  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log("change Color: ", colorRef.current);
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
