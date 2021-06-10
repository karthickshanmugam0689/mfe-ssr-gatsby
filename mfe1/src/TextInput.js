import React from 'react';
import { MIN_CHAR } from './constants';



const TextInput = ({changeAction, value}) => {

  const handleChange = (textInput) => {
    if(textInput?.length > MIN_CHAR) {
      changeAction?.(textInput);
    }
  }

  return (
    <input type="text"
      placeholder="Enter your search here"
      onChange={(e) => handleChange(e.target.value)}
      value={value}
    />
  )
};

export default TextInput;