export default function ValueArea ({textPosition, imagePosition, text, url, topOf, opacity, saved, setSaved, setText, fontType, setFontType, fontSize, setFontSize, textColor, setTextColor, setUrl, setTopOf, setOpacity}) {
    
  function saveDesign(){
    setSaved([
      {
        savedText: text,
        savedColor: textColor,
        savedFont: fontType,
        savedSize: fontSize,
        savedUrl: url,
        savedTopOf: topOf,
        savedOpacity: opacity,
        savedTextPosition: textPosition,
        savedImagePosition: imagePosition,
      },
      ...saved,

    ]
    );
    console.log(saved.savedText)

  }

  return(
      <div className="valueArea">
        <div>
          
                <div className="values">
                    <label>Enter Text :</label>
                    <input type="text"  onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="values">
                    <label>Select font type :</label>
                    <select value={fontType} onChange={(e) => setFontType(e.target.value)}>
                      <option value='Times New Roman'>Times New Roman</option>
                      <option value='Courier New'>Courier New</option>
                    </select>
                </div>
                <div className="values">
                    <label>Select font size :</label>
                    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
                      <option value='12'>12</option>
                      <option value='14'>14</option>
                      <option value='16'>16</option>
                      <option value='18'>18</option>
                      <option value='20'>20</option>
                      <option value='22'>22</option>
                      <option value='24'>24</option>
                      <option value='26'>26</option>

                    </select>
                </div>
                <div className="values">
                    <label>Select text color :</label>
                    <select value={textColor} onChange={(e) => setTextColor(e.target.value)}>
                      <option value='white'>white</option>
                      <option value='yellow'>yellow</option>
                      <option value='blue'>blue</option>
                      <option value='red'>red</option>
                      <option value='pink'>pink</option>
                      <option value='orange'>orange</option>
                    </select>
                </div>
                <div className="values">
                  <label>
                    Add IMG with URL :
                  </label>
                  <input type="text" onChange={(e) => setUrl(e.target.value)} />
                  <br></br>
                  <br></br>

                  <label>
                    Text is top of image
                  </label>
                  <input type="checkbox" onChange={(e) => setTopOf(e.target.checked)} />
                  <br></br>
                  <br></br>

                  <label>
                    Image opacity
                  </label>
                  <input type="range" min="0" max="1" step="0.01" onChange={(e) => setOpacity(e.target.value)} />
                </div>
                <div>
{/*                   
                  <button onClick={saveDesign}>
                    Save Design
                  </button> */}
                </div>

            
        </div>
      </div>
    )
  }