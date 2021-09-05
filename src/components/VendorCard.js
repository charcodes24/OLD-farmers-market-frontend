import { Link } from "react-router-dom";



export default function VendorCard({ vendor }) {
    const { id, name } = vendor
    
    return (
      <div>
        <div>
          <Link to={`/vendors/${id}`}>
            <div className="vendor-card">{name}</div>
          </Link>
        </div>
      </div>
    );
}