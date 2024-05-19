
import Draggable from 'react-draggable'; // The default


export default function TshirtArea({setImagePosition, textPosition, setTextPosition, imagePosition, text, fontSize, fontType, textColor, url, topOf, opacity}) {
 

  const handleTextDrag = (e, data) => {
    setTextPosition({ x: data.x, y: data.y });
  };

  const handleImageDrag = (e, data) => {
    setImagePosition({ x: data.x, y: data.y });
  };

  
  
      return(
      <div className="tshirt">
        
        <div className="tshirt-image" style={{
            'fontSize': '15px',
            'color' : 'red',

            }}>
              <div className="textcontainer">
              <Draggable
               position={textPosition}
               onDrag={handleTextDrag}
               >
                <p className="textTshirt" style={{
 
                'fontSize': `${fontSize}px`,
                'fontFamily': `${fontType}`,
                'zIndex': topOf ? '2' : '1' ,
                'color': `${textColor}`,
                'position': 'absolute',  // Added position absolute
                'margin': '0'  // Ensure no default margins affect the layout
             
                }}>
                {text}
                </p>
                
                </Draggable>
                <Draggable
                 position={imagePosition}
                 onDrag={handleImageDrag}
                 >
                  
                <div 
                className='imageText'
                style={{
                  'width': '100px',
                  'height': '100px',
                  'backgroundSize': '100% 100%',
                  'zIndex': topOf ? '1' : '2' ,
                  'backgroundImage': `url(${url})`,
                  'opacity': `${opacity}`,
                  'position': 'absolute'  // Added position absolute
                }}
                >

                </div>
                </Draggable>
              </div>
            
        </div>
       
      </div>
    )
  }
