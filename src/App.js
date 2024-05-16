import './App.css';
import Header from './compoents/Header';
import ValueArea from './compoents/ValueArea';
import TshirtArea from './compoents/TshirtArea'
import { useState } from 'react';



function App() {
  const [text, setText] = useState('This is my dream T-shirt');
  const [fontType, setFontType] = useState('Arial');
  const [fontSize, setFontSize] = useState(20);
  const [textColor, setTextColor] = useState('white');
  return (
    <>
    <div className='header'>
    <Header />

    </div>

    <div className='grid'>
        <div className='values'>
        <ValueArea 
        text={text}
        setText={setText}
        fontType={fontType}
        setFontType={setFontType}
        fontSize={fontSize}
        setFontSize={setFontSize}
        textColor={textColor}
        setTextColor={setTextColor}
        />

        </div>

        <div className='tshirtarea'>
        <TshirtArea
        text={text}
        textColor={textColor}
        fontSize={fontSize}
        fontType={fontType}
        />

        </div>
    </div>
    
    </>
  );
}

export default App;
