import React, { useState } from 'react';
import { MIN_CHAR } from './constants';
import TextInput from './TextInput';

function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>MFE1</h1>
      <TextInput changeAction={textInput => setText(textInput)} value={text}/>
      <br />
      {!!text && (
        <>
          Entered text after {MIN_CHAR} characters is {text}
        </>
      )}
    </div>
  );
}

export default App;