import { NavLink, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../features/login/loginSlice";

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
      <div className="nav active">
        <div className="container">
          <NavLink className="navlink" to="/">Home</NavLink>
          {customerLoggedIn || vendorLoggedIn ? null : (
            <NavLink className="navlink" to="/signup">Sign-Up</NavLink>
          )}
          {customerLoggedIn || vendorLoggedIn ? null : (
            <NavLink className="navlink" to="/login">Log-In</NavLink>
          )}
          <NavLink className="navlink" to="/cart">Cart</NavLink>
          {!vendorLoggedIn ? null : (
            <NavLink className="navlink" to="/vendor_homepage">Vendor Home Page</NavLink>
          )}
          {customerLoggedIn || vendorLoggedIn ? (
            <button onClick={handleLogOut}>Sign Out!</button>
          ) : null}
        </div>
      </div>
    );
}