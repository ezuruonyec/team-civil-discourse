import React from "react"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';


const Legend = () => {

  function getColor(ranking, colorScheme){
    if(colorScheme == 1){
      return ranking >= 146 ? '#08519c' :    // 112 +
                ranking >= 117  ? '#3182bd' : // 91 - 111
                ranking >= 88  ? '#6baed6' :  // 70 - 90
                ranking >= 58  ? '#9ecae1' :  // 49 - 69
                ranking >= 29   ? '#c6dbef' : // 28 - 48
                ranking >= 1 ? '#eff3ff' : // 7 - 27
                            '#757575'; //  no cd rating
    }
    else{
      return ranking >= 146 ? '#b30000' :    // 112 +
                ranking >= 117  ? '#e34a33' : // 91 - 111
                ranking >= 88  ? '#fc8d59' :  // 70 - 90
                ranking >= 58  ? '#fdbb84' :  // 49 - 69
                ranking >= 29   ? '#fdd49e' : // 28 - 48
                ranking >= 1 ? '#fef0d9' : // 7 - 27
                          '#757575'; //  no cd rating
    }
  }

//   #eff3ff
// #c6dbef
// #9ecae1
// #6baed6
// #3182bd
// #08519c

  //const grades  = [0, 7, 28, 49, 70, 91, 112]
  const grades  = [0, 28, 57, 87, 116, 145, 173, "None"]
  var colorScheme = 0;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = (e) => {
    setAnchorEl(null);
    console.log("inside handle close")
    colorScheme = 1;
    var i = 0;
    var elem = Array.from(document.querySelectorAll('#a'))
    elem.forEach(getColor(grades[i]+1,colorScheme))    
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    
  };


  return (
    <div className="info">
      <div  className="legend">
        <span className="title">Rank
        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
          <MoreVertIcon/>
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose1}>Deu</MenuItem>
          <MenuItem onClick={handleClose}>Pro</MenuItem>
          <MenuItem onClick={handleClose}>Tri</MenuItem>
        </Menu>
        </span>

        {
          grades.map((value, i) => {
            return (
            <>
            { 
              i <= 5 ?  
              <>
                <span>
                  <span className="i" id="a" style={{backgroundColor: getColor(grades[i]+1,colorScheme)}}></span>
                  {grades[i]+1} &ndash; {grades[i+1]}
                </span><br />
              </> :
              i === 7 ?
              <>
                <span>
                  <span className="na" style={{backgroundColor: getColor(grades[7],colorScheme)}}></span>
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
