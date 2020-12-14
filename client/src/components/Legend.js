import React from "react"

const Legend = () => {
  function getColor(d){
    return d >= 112 ? '#b30000' :    // 112 +
               d >= 91  ? '#e34a33' : // 91 - 111
               d >= 70  ? '#fc8d59' :  // 70 - 90
               d >= 49  ? '#fdbb84' :  // 49 - 69
               d >= 28   ? '#fdd49e' : // 28 - 48
               d >= 7 ? '#fef0d9' : // 7 - 27
                          '#757575'; //  no cd rating
  }

  const grades  = [0, 7, 28, 49, 70, 91, 112]

  return (
    <div className="info">
      <div  className="legend">
     
          <span><span className="i" style={{backgroundColor: getColor(grades[1])}}></span>7 &ndash; 27</span>
          <br />

          <span><span className="i" style={{backgroundColor: getColor(grades[2])}}></span>28 &ndash; 48</span>
          <br />
        
          <span><span className="i" style={{backgroundColor: getColor(grades[3])}}></span>49 &ndash; 69</span>
          <br />

          <span><span className="i" style={{backgroundColor: getColor(grades[4])}}></span>70 &ndash; 90</span>
          <br />

          <span><span className="i" style={{backgroundColor: getColor(grades[5])}}></span>91 &ndash; 111</span>
          <br />

          <span><span className="i" style={{backgroundColor: getColor(grades[6])}}></span>112 &ndash; 133</span>
          <br />

          <span><span className="i" style={{backgroundColor: getColor(grades[0])}}></span>None</span>
          <br />
      
            
        </div>

    </div>
  )
}

export default Legend