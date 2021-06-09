import React, { useEffect } from 'react';

const TextInput = ({changeAction, isSSR, value}) => {

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
      placeholder="Enter your search here"
      value={value}
    />
  )
};

export default TextInput;