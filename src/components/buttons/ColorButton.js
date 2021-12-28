import "./buttons.css";
import { COLORS } from "../../values/colors";
import { Link } from "react-router-dom";

const BtnColors = {
  LightBlueBtn: COLORS.Blue200,
  DarkBlueBtn: COLORS.Blue600,
  DarkRedBtn: COLORS.Red400,
  PurpleBtn: COLORS.Purple400,
  GreenBtn: COLORS.Green400,
  GrayBtn: COLORS.Gray200,
  LightBtn: COLORS.Gray100,
};

function colorPicker(props) {
  return BtnColors[props];
}

function TextColorBtn(props) {
  return (
    <div
      className={props.className}
      style={{ backgroundColor: colorPicker(props.color) }}
    >
      {props.title}
    </div>
  );
}

function ButtonStyled(props) {
  let backColor = "";
  let fontColor = "";
  let borderColor = "";

  switch (props.primary) {
    case "false":
      backColor = "white";
      fontColor = colorPicker(props.color);
      borderColor = colorPicker(props.color);
      break;

    default:
      backColor = colorPicker(props.color);
      fontColor = "white";
      borderColor = colorPicker(props.color);
      break;
  }
  return (
    <Link to={props.link}>
      <button
        style={{
          backgroundColor: backColor,
          color: fontColor,
          borderColor: borderColor,
        }}
        className={props.className}
      >
        <TextColorBtn title={props.title} />
      </button>
    </Link>
  );
}

function ButtonNoLink(props) {
  let backColor = "";
  let fontColor = "";
  let borderColor = "";

  switch (props.primary) {
    case "false":
      backColor = "white";
      fontColor = colorPicker(props.color);
      borderColor = colorPicker(props.color);
      break;

    default:
      backColor = colorPicker(props.color);
      fontColor = "white";
      borderColor = colorPicker(props.color);
      break;
  }

  return (
    <>
      <button
        style={{
          backgroundColor: backColor,
          color: fontColor,
          borderColor: borderColor,
        }}
        className={props.className}
        onClick={props.onClick}
      >
        <TextColorBtn title={props.title} />
      </button>
    </>
  );
}

function ButtonOnChange(props) {
  let backColor = "";
  let fontColor = "";
  let borderColor = "";

  switch (props.primary) {
    case "false":
      backColor = "white";
      fontColor = colorPicker(props.color);
      borderColor = colorPicker(props.color);
      break;

    default:
      backColor = colorPicker(props.color);
      fontColor = "white";
      borderColor = colorPicker(props.color);
      break;
  }

  return (
    <>
      <button
        style={{
          backgroundColor: backColor,
          color: fontColor,
          borderColor: borderColor,
        }}
        className={props.className}
        onClick={(e) => props.onClick(e.target)}
      >
        <TextColorBtn title={props.title} />
      </button>
    </>
  );
}

function SubmitButton(props) {
  let backColor = "";
  let fontColor = "";
  let borderColor = "";

  switch (props.primary) {
    case "false":
      backColor = "white";
      fontColor = colorPicker(props.color);
      borderColor = colorPicker(props.color);
      break;

    default:
      backColor = colorPicker(props.color);
      fontColor = "white";
      borderColor = colorPicker(props.color);
      break;
  }

  return (
    <>
      <button
        style={{
          backgroundColor: backColor,
          color: fontColor,
          borderColor: borderColor,
          marginLeft:"16px"
        }}
        className={props.className}
        type="submit"
      >
        <TextColorBtn title={props.title} />
      </button>
    </>
  );
}

export { ButtonStyled, ButtonNoLink, ButtonOnChange, SubmitButton };
