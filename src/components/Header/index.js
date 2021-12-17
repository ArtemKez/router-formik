import {Link} from "react-router-dom";
import "./style.sass"

export default function Header(props) {
    return (
        <header className={"header"}>
            <img src="https://www.squadhelp.com/img/logo.png" alt="img"/>
            <Link to={props.button.to} className={"btn"}>{props.button.text}</Link>
        </header>
    )
}