import { NavLink } from "react-router-dom"

export default function VendorNavBar() {
    
    return (
      <div>
        <NavLink to="vendor_signup">Vendor Sign-Up</NavLink>
        <NavLink to="/vendor_homepage">Vendor Home Page</NavLink>
      </div>
    );
}