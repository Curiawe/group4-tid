import './cards.css'
import FeatherIcon from 'feather-icons-react';

function MainIcons(props) {
    return (
        <FeatherIcon icon={props.icon} className={props.className}/> 
    )
}

function MainDescription(props) {
    return (
        <div className={props.className}>{props.title}</div>
    )
}

function IconBody(props) {
    return (
    <div className="iconBody">
        <MainIcons className="mainIcons" icon={props.icon} ></MainIcons> 
        <MainDescription className="mainDescription" title={props.title}></MainDescription>
    </div>
    )
}

export {IconBody, MainDescription}