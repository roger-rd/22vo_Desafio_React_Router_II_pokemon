import { Link  } from "react-router-dom";
import "../assets/css/navbarFooter.css";

const Footer = () => {

    return ( 
        <footer className=" text-center text-light p-2 footer">
            <div className="d-flex">
                <p className="p-2 flex-grow-1 fs-4">Roger Rodriguez  © 2023. Todos los derechos reservados.</p>
                <Link className="p-2 text-decoration-none text-light fs-3" to={"https://www.facebook.com/settings?tab=account&section=username"} target="_blank">
                    <i className="fa-brands fa-square-facebook fa-2x pe-2"></i> </Link>
                <Link className="p-2 text-decoration-none text-light fs-3" to={"https://www.instagram.com/roger_david.r/"} target="_blank" >
                    <i className="fa-brands fa-instagram fa-2x pe-2"></i></Link>
                    <a className="p-2 text-decoration-none text-light fs-1" to={"https://www.linkedin.com/in/roger-rodriguez-rdrp/"} target="_blank" >
                    <i className="fa-brands fa-linkedin"></i></a>
                </div>
            </footer>
    );
}

export default Footer;
