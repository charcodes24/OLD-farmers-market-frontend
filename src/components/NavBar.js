import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../features/allUsers/allUsersSlice";

export default function NavBar() {
  const customerLoggedIn = useSelector(state => state.allusers.customerLoggedIn)
  const vendorLoggedIn = useSelector(state => state.allusers.vendorLoggedIn)
  const dispatch = useDispatch();

  function handleLogOut(e) {
    e.preventDefault()
    dispatch(userLogout())
  }

    return (
      <div>
        <NavLink to="/">Home</NavLink>
        {/* {isLoggedIn ? null : <NavLink to="/signup">Sign-Up</NavLink>}
        {isLoggedIn ? null : <NavLink to="/login">Log-In</NavLink>} */}
        <NavLink to="vendor_signup">Vendor Sign-Up</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/vendor_homepage">Vendor Home Page</NavLink>
        <NavLink to="/vendor_login">Vendor Log-In</NavLink>
        {customerLoggedIn || vendorLoggedIn ? <button onClick={handleLogOut}>Sign Out!</button> : null}
      </div>
    );
}