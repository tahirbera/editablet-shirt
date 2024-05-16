
import Draggable from 'react-draggable'; // The default

export default function TshirtArea({text, fontSize, fontType, textColor}) {
    return(
      <div className="tshirt">
        
        <div className="tshirt-image" style={{
            'fontSize': '15px',
            'color' : 'red',

            }}>
              <div className="textcontainer">
              <Draggable>
              <p className="textTshirt" style={{
                'fontSize': `${fontSize}px`,
                'fontFamily': `${fontType}`,
                'color': `${textColor}`
             }}>{text}</p>
              </Draggable>
              </div>
            
        </div>
       
      </div>
    )
  }
