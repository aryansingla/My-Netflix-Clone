import React , {useState , useEffect} from "react";
import {useNavigate} from "react-router-dom";
import netflixLogo from "./assets/netflixLogo.png";
import netflixAvatar from "./assets/netflixAvatar.png";
import "./Nav.css";
import { ImSearch } from 'react-icons/im';
import { BsFillBellFill } from 'react-icons/bs';

const Nav = () => {
const [show, handleShow] = useState(false);
const navigate = useNavigate();

  useEffect(()=>{
    window.addEventListener("scroll" , ()=>{
if (window.scrollY > 100){
  handleShow(true);
} else handleShow(false);
    });
    return ()=>{
      window.removeEventListener("scroll");
    }
  } , []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img onClick={()=> navigate("/profile")}
        className="nav__logo"
        src={netflixLogo}
        alt="Netflix Logo"
      />


      <h3 className="c1">Home</h3>
      <h3 className="c2">TV Shows</h3>
      <h3 className="c3">Movies</h3>
      <h3 className="c4">My List</h3>
      <h3 className="searchicon"><ImSearch/></h3>
      <h3 className="bellicon"><BsFillBellFill/></h3>



      <img onClick={()=> navigate("/profile")} className="nav__avatar" src={netflixAvatar} alt="Netflix Logo" />
    </div>
  );
}

export default Nav;
