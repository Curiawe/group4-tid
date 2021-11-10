import './content.css';
import Sidebar from './components/Sidebar'
import App from './App'

function Content () {
    return (
    <div class="content">
        <div class="subContent">
    <Sidebar /></div>
    <div class="subContent" background-color="blue"><button height="200px"></button></div>
    </div>

    )
}

export default Content;