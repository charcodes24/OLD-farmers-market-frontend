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


  console.log("NAVBAR", isLoggedIn)
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? null : <NavLink to="/signup">Sign-Up</NavLink>}
        {isLoggedIn ? null : <NavLink to="login">Log-In</NavLink>}
        <NavLink to="/cart">Cart</NavLink>
        {isLoggedIn ? <button onClick={handleLogOut}>Sign Out!</button> : null}
      </div>
    );
}