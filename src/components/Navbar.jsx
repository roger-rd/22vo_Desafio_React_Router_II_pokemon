import "../assets/css/navbarFooter.css";
import { NavLink } from "react-router-dom";

import icon from '../assets/img/iconPoke.png'

export default function Navbar() {

    const activeLink = ({ isActive }) => (isActive ? 'active' : 'undefined')

    return (

        <nav>
            <div className=" d-flex ">
                <div className="p-1 flex-grow-1 icon">
                    <img src={icon} alt="poke" width={50} />
                </div>
                <div className="p-1 navHom">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/" >Home</NavLink>
                </div>
                <div className="p-1 navHom">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/Pokemons" >Pokemones</NavLink>
                </div>
            </div>
        </nav>
    );
}
