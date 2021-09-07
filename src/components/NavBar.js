import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { customerLogout } from "../features/signup/customerSlice";

export default function NavBar() {
  const isLoggedIn = useSelector(state => state.customer.loggedIn)
  const dispatch = useDispatch();

  function handleLogOut(e) {
    e.preventDefault()
    dispatch(customerLogout())
  }


  console.log("LOGGED IN NAVBAR", isLoggedIn)
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? null : <NavLink to="/signup">Customer Sign-Up</NavLink>}
        {isLoggedIn ? null : <NavLink to="/login">Log-In</NavLink>}
        <NavLink to="vendor_signup">Vendor Sign-Up</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="vendorhomepage">Vendor Home Page</NavLink>
        {isLoggedIn ? <button onClick={handleLogOut}>Sign Out!</button> : null}
      </div>
    );
}