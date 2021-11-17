import { Link } from 'react-router-dom';

function Navtab (props) {
    return (
        <Link to={props.link}>{props.title}</Link>
    )
}

export default Navtab