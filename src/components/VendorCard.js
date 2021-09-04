import { Link } from "react-router-dom";

export default function VendorCard({ vendor }) {
    const { id, name } = vendor
    

    // const newName = name.replaceAll(' ', '_')
    return (
      <div className="column">
        <div className="ui segment">
          <Link to={`/vendors/${id}`}>
            <button>{name}</button>
          </Link>
        </div>
      </div>
    );
}