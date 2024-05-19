import './App.css';
import Header from './compoents/Header';
import ValueArea from './compoents/ValueArea';
import TshirtArea from './compoents/TshirtArea'
import { useState } from 'react';



function App() {
  const [textPosition, setTextPosition] = useState({ x: 42, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: -100, y: 0 });
  const [saved, setSaved] = useState([]);
  const [text, setText] = useState('This is my dream T-shirt');
  const [fontType, setFontType] = useState('Arial');
  const [fontSize, setFontSize] = useState(20);
  const [textColor, setTextColor] = useState('white');
  const [url, setUrl] = useState('');
  const [topOf, setTopOf] = useState(false);
  const [opacity, setOpacity] = useState(1);

  return (
    <>
    <div className='header'>
    <Header />

    </div>

    <div className='grid'>
        <div className='values'>
        <ValueArea
        imagePosition = {imagePosition}
        textPosition = {textPosition}

        saved={saved}
        text={text}
        fontType={fontType}
        fontSize={fontSize}
        textColor={textColor}
        topOf={topOf}
        opacity={opacity}
        setSaved={setSaved} 
        setOpacity={setOpacity}
        setUrl={setUrl}        
        setText={setText}
        setFontType={setFontType}
        setFontSize={setFontSize}
        setTextColor={setTextColor}
        setTopOf={setTopOf}
        />

        </div>

        <div className='tshirtarea'>
        <TshirtArea
        textPosition={textPosition}
        setTextPosition={setTextPosition}
        imagePosition={imagePosition}
        setImagePosition={setImagePosition}
        text={text}
        opacity={opacity}
        url={url}
        topOf={topOf}
        textColor={textColor}
        fontSize={fontSize}
        fontType={fontType}
        />

        </div>
    </div>
      <SavedDesigns saved={saved} />
    
    </>
  );
}

function SavedDesigns({saved}){
  return(
    <>
    <div>
      {saved.map((save, i)=>
        
        <div className="tshirt2" key={i}>
        
        <div className="tshirt-image" style={{
            'fontSize': '15px',
            'color' : 'red',

            }}>
              <div className="textcontainer">
            
                <p className="textTshirt" style={{
 'position': 'absolute',
 'left': `${save.savedTextPosition.x}px`,
 'top': `${save.savedTextPosition.y}px`,
                'fontSize': `${save.savedSize}px`,
                'fontFamily': `${save.savedFont}`,
                'zIndex': save.savedTopOf ? '2' : '1' ,
                'color': `${save.savedColor}`,
             
                }}>
                {save.savedText}
                </p>
                
                
      
                  
                <div 
                className='imageText'
                style={{
                  
                  'width': '100px',
                  'height': '100px',
                  'backgroundSize': '100% 100%',
                  'zIndex': save.savedTopOf ? '1' : '2' ,
                  'backgroundImage': `url(${save.savedUrl})`,
                  'opacity': `${save.savedOpacity}`,
                }}
                >

                </div>
              </div>
            
        </div>
       
      </div>
      )}
    </div>
    </>
  )
}
export default App;
