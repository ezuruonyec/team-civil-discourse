import React from "react"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import * as ColorScheme from "../ColorScheme.js"


const Legend = () => {

  // function getColorScreen(){
  //   return color.colorScreen;
  // }

  function getColor(ranking, newColors){
    if(newColors.colorScreen == 1){
      return ranking >= 146 ? newColors.colorTheme[5] :    // 112 +
                ranking >= 117  ? newColors.colorTheme[4] : // 91 - 111
                ranking >= 88  ? newColors.colorTheme[3] :  // 70 - 90
                ranking >= 58  ? newColors.colorTheme[2] :  // 49 - 69
                ranking >= 29   ? newColors.colorTheme[1] : // 28 - 48
                ranking >= 1 ? newColors.colorTheme[0] : // 7 - 27
                newColors.colorTheme[6]; //  no cd rating
    }
    else{
      return ranking >= 146 ? newColors.colorTheme[5] :    // 112 +
                ranking >= 117  ? newColors.colorTheme[4] : // 91 - 111
                ranking >= 88  ? newColors.colorTheme[3] :  // 70 - 90
                ranking >= 58  ? newColors.colorTheme[2] :  // 49 - 69
                ranking >= 29   ? newColors.colorTheme[1] : // 28 - 48
                ranking >= 1 ? newColors.colorTheme[0] : // 7 - 27
                newColors.colorTheme[6]; //  no cd rating
    }
  }

//   #eff3ff
// #c6dbef
// #9ecae1
// #6baed6
// #3182bd
// #08519c

  //const grades  = [0, 7, 28, 49, 70, 91, 112]
  const grades  = [1, 29, 58, 88, 117, 146, 174, "None"]

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const onColorChange = (newColors) => {
    Array.from(document.querySelectorAll('#a')).map(function(value, index){
      return value.style.backgroundColor = getColor(grades[index], newColors);
    });
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const deuter= (e) => {
    setAnchorEl(null);

    ColorScheme.setColorDeuter();
    onColorChange(ColorScheme.getActiveColorScheme().colorScreen);
  };

  const protan = (e) => {
    setAnchorEl(null);
    ColorScheme.setColorProtan();
    onColorChange(ColorScheme.getActiveColorScheme().colorScreen);
  };
  
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const tritan = (e) => {
    setAnchorEl(null);
    ColorScheme.setColorTritan();
    onColorChange(ColorScheme.getActiveColorScheme().colorScreen);
  };

  const Default= (e) => {
    setAnchorEl(null);
    ColorScheme.setColorDefault();
    onColorChange(ColorScheme.getActiveColorScheme().colorScreen);
  };

  return (
    <div className="info">
      <div  className="legend">
        <span className="title">Rank
        <Button title="Theme Selection" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
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
          <MenuItem onClick={deuter}>Deu</MenuItem>
          <MenuItem onClick={protan}>Pro</MenuItem>
          <MenuItem onClick={tritan}>Tri</MenuItem>
          <MenuItem onClick={Default}>Default</MenuItem>
        </Menu>
        </span>

        {
          //ColorScheme.subscribe(onColorChange)
        
          grades.map((value, i) => {
            return (
            <>
            { 
              i <= 5 ?  
              <>
                <span>
                  <span className="i" id="a" style={{backgroundColor: getColor(grades[i]+1,ColorScheme.getActiveColorScheme())}}></span>
                  {grades[i]} &ndash; {grades[i+1]-1}
                </span><br />
              </> :
              i === 7 ?
              <>
                <span>
                  <span className="i" id="na" style={{backgroundColor: getColor(grades[7],ColorScheme.getActiveColorScheme())}}></span>
                  {"NA"}
                </span><br />
              </> : ""
            }
            </>)
          })
        }
            
        </div>

    </div>
  
  )
  
}

export default Legend