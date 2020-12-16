import React from "react"

const Legend = () => {
  function getColor(d){
    return d >= 146 ? '#b30000' :    // 112 +
               d >= 117  ? '#e34a33' : // 91 - 111
               d >= 88  ? '#fc8d59' :  // 70 - 90
               d >= 58  ? '#fdbb84' :  // 49 - 69
               d >= 29   ? '#fdd49e' : // 28 - 48
               d >= 1 ? '#fef0d9' : // 7 - 27
                          '#757575'; //  no cd rating
  }

  //const grades  = [0, 7, 28, 49, 70, 91, 112]
  const grades  = [0, 28, 57, 87, 116, 145, 173, "None"]

  return (
    <div className="info">
      <div  className="legend">
        <span className="title">Rank</span>
        {
          grades.map((value, i) => {
            return (
            <>
            { 
              i <= 5 ?  
              <>
                <span>
                  <span className="i" style={{backgroundColor: getColor(grades[i]+1)}}></span>
                  {grades[i]+1} &ndash; {grades[i+1]}
                </span><br />
              </> :
              i === 7 ?
              <>
                <span>
                  <span className="i" style={{backgroundColor: getColor(grades[7])}}></span>
                  {"NA"}
                </span><br />
              </> : ""
            }
            </>)
          })
        }
     
          {/* <span><span className="i" style={{backgroundColor: getColor(grades[1])}}></span>7 &ndash; 27</span>
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
          <br /> */}
      
            
        </div>

    </div>
  )
}

export default Legend