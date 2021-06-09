import React, { useEffect } from 'react';

const TextInput = ({changeAction, isSSR}) => {

  React.useEffect(
    () => {
      if(!isSSR) {
        changeAction?.(document.getElementById("textInput")?.value);
      }
    },
    [isSSR]
  );

  return (
    <input type="text" 
    id="textInput"
      placeholder="Enter your search herereeere"
    />
  )
};

export default TextInput;