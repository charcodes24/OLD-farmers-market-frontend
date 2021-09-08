import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { customerLogout } from "../features/customer/customerSlice";

export default function CustomerNavBar() {
  const isCustomerLoggedIn = useSelector(state => state.customer.loggedIn)
  const isVendorLoggedIn = useSelector(state => state.vendor.loggedIn)
  const dispatch = useDispatch();

  function handleLogOut(e) {
    e.preventDefault()
    dispatch(customerLogout())
  }

    return (
      <div>
        <NavLink to="/">Home</NavLink>
        {isCustomerLoggedIn ? null : <NavLink to="/signup">Customer Sign-Up</NavLink>}
        {isCustomerLoggedIn ? null : <NavLink to="/login">Log-In</NavLink>}
        <NavLink to="/cart">Cart</NavLink>
        {isCustomerLoggedIn ? <button onClick={handleLogOut}>Sign Out!</button> : null}
      </div>
    );
}