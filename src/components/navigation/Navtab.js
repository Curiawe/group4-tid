import { Link } from 'react-router-dom';
import './navigation.css'

function Navtab (props) {
    return (
        <Link to={props.link} className="Navtab" color="white">{props.title}</Link>
    )
}

export default Navtab