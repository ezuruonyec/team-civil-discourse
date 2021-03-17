import React from "react"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import * as ColorScheme from "../ColorScheme.js"


const Legend = () => {

  function getColor(ranking, newColors) {
    if (ranking >= 146) return newColors.colorTheme[5];
    else if (ranking >= 117) return newColors.colorTheme[4];
    else if (ranking >= 88) return newColors.colorTheme[3];
    else if (ranking >= 58) return newColors.colorTheme[2];
    else if (ranking >= 29) return newColors.colorTheme[1];
    else if (ranking >= 1) return newColors.colorTheme[0];
    else return newColors.colorTheme[6];
  }

  const grades = [1, 29, 58, 88, 117, 146, 174, "None"]

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const onColorChange = (newColors) => {
    Array.from(document.querySelectorAll('#a')).map(function (value, index) {
      return value.style.backgroundColor = getColor(grades[index], newColors);
    });
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const deuter = (e) => {
    setAnchorEl(null);
    ColorScheme.setColorDeuter();
    onColorChange(ColorScheme.getActiveColorScheme());
  };

  const protan = (e) => {
    setAnchorEl(null);
    ColorScheme.setColorProtan();
    onColorChange(ColorScheme.getActiveColorScheme());
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const tritan = (e) => {
    setAnchorEl(null);
    ColorScheme.setColorTritan();
    onColorChange(ColorScheme.getActiveColorScheme());
  };

  const Default = (e) => {
    setAnchorEl(null);
    ColorScheme.setColorDefault();
    onColorChange(ColorScheme.getActiveColorScheme());
  };

  return (
    <div className="info">
      <div className="legend">
        <span className="title">Rank
        <Button title="Theme Selection" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <MoreVertIcon />
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
                        <span className="i" id="a" style={{ backgroundColor: getColor(grades[i] + 1, ColorScheme.getActiveColorScheme()) }}></span>
                        {grades[i]} &ndash; {grades[i + 1] - 1}
                      </span><br />
                    </> :
                    i === 7 ?
                      <>
                        <span>
                          <span className="i" id="na" style={{ backgroundColor: getColor(grades[7], ColorScheme.getActiveColorScheme()) }}></span>
                          {"NA"}
                        </span><br />
                      </> : ""
                }
              </>)
          })
          /*<form> 
            <div className="radio">
            <label>
        
            <input 
            type="radio" 
            name="Colorblind" 
            value="Deuter" 
            checked={false}
            /> 
            Deuter Colorblind
            </label> 
            </div>
          	
            <div className="radio> 
            <label>
            <input 
            type="radio"
            name="Colorblind"
            value="Proto"
            checked={false}
            />
            Proto Colorblind 
            </label>
            </div>
            <input type="radio" name="Proto Colorblind" value="no"/> 
          </form>*/
        }

      </div>

    </div>

  )

}

export default Legend
