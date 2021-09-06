import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";

export default function NavBar() {
  const customer = useSelector(state => state.customer)

  console.log(customer)
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        {customer ? null : <NavLink to="/signup">Sign-Up</NavLink>}
        {customer ? null : <NavLink to="login">Log-In</NavLink>}
        <NavLink to="/cart">Cart</NavLink>
        {customer ? <button>Sign Out!</button> : null}
      </div>
    );
}