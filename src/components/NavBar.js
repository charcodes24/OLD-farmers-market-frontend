import { NavLink } from "react-router-dom"

import CustomerSignUp from "./CustomerSignUp"

export default function NavBar() {
    return (
      <div>
            <NavLink to="/">Home</NavLink>
        <NavLink to="/signup">Sign-Up</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    );
}