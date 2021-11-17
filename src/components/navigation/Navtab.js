import { Link } from 'react-router-dom';
import './navigation.css'

function IsActive (props) {
    return ({props} === document.documentURI)
}



function Navtab (props) {
    return (
        <Link to={props.link} className="Navtab" style={{ textDecoration: 'none', color: "white" }}>{props.title}</Link>
    )
}

export default Navtab