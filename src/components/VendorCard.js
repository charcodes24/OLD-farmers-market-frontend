import { Link } from "react-router-dom";

export default function VendorCard({ vendor }) {
    const { id, name, description } = vendor
    

    // const newName = name.replaceAll(' ', '_')
    return (
      <div>
        <Link to={`/vendors/${id}`}>
          <button>{name}</button>
        </Link>
      </div>
    );
}