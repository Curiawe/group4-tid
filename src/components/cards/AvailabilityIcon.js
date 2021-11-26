import './cards.css';
import { COLORS } from '../../values/colors'
import { MainDescription } from './IconBody';

const colorMap = {
    // this first part is used for availability
    Unavailable: COLORS.Red300,
    Available: COLORS.Green400,
    Rented: COLORS.Blue300,
    Transfer: COLORS.Purple300,
    Service: COLORS.Yellow400,
    // this part is used for car colors
    RED: "red",
    BLK: "black",
    SLV: "gray"
}

function colorPicker(props) {
    return colorMap[props]
}


function ColorIcon(props) {
    return (
        <div className = "iconBody"> 
        <text className = "mainIcon" style = {{color: colorPicker(props.title)}}>
            ██
        </text>
        <MainDescription className="mainDescription" title={props.title}></MainDescription>
        </div>

    )

}

export default ColorIcon