import './buttons.css'
import { COLORS } from '../../values/colors'

const BtnColors = {
    LightBlueBtn: COLORS.Blue200,
    DarkBlueBtn: COLORS.Blue600,
    DarkRedBtn: COLORS.Red400,
    PurpleBtn: COLORS.Purple400,
    GrayBtn: COLORS.Gray200,
    LightBtn: COLORS.Light100,
}

function colorPicker(props) {
    return BtnColors[props]
}

function TextColorBtn(props) {
    return (
    <div className={props.className} style={{backgroundColor: colorPicker(props.color)}}>{props.title}</div>
    )
}

function ButtonStyled(props) {
    let backColor = ""
    let fontColor = ""
    let borderColor = ""

    switch (props.primary) {
        case "true":
            backColor = colorPicker(props.color);
            fontColor = "white";
            borderColor = colorPicker(props.color);
            break;
   
        default:
            backColor = "white";
            fontColor = colorPicker(props.color)
            borderColor = colorPicker(props.color)
            break;
    }
    return (
    <button style={{backgroundColor: backColor, color: fontColor, borderColor: borderColor}} className={props.className}>  
        <TextColorBtn title={props.title}></TextColorBtn>
    </button>

        )
    }

export default ButtonStyled