import { NavLink, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../features/allUsers/allUsersSlice";

export default function NavBar() {
  const customerLoggedIn = useSelector(state => state.allusers.customerLoggedIn)
  const vendorLoggedIn = useSelector(state => state.allusers.vendorLoggedIn)
  const dispatch = useDispatch();
  const history = useHistory()

  function handleLogOut(e) {
    e.preventDefault()
    dispatch(userLogout())
    history.push('/')
  }

    return (
      <div>
        <NavLink to="/">Home</NavLink>
        {customerLoggedIn || vendorLoggedIn ? null : <NavLink to="/signup">Sign-Up</NavLink>}
        {customerLoggedIn || vendorLoggedIn ? null : <NavLink to="/login">Log-In</NavLink>}
        <NavLink to="/cart">Cart</NavLink>
        {!vendorLoggedIn ? null : <NavLink to="/vendor_homepage">Vendor Home Page</NavLink>}
        {customerLoggedIn || vendorLoggedIn ? (
          <button onClick={handleLogOut}>Sign Out!</button>
        ) : null}
      </div>
    );
}