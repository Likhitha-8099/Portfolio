import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    
       <nav className="navbar">
         <h1>PORTFOLIO</h1>
         <div className="nav-links">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/projects">Projects</NavLink>
         <NavLink to="/contact">Contact</NavLink>
         </div>
       </nav>
    
  )
}
export default Navbar;
