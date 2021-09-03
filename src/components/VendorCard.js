import { Link } from 'react-router-dom';

export default function VendorCard({ vendor }) {
    const { name } = vendor

    const newName = name.replaceAll(" ", "_");
    return (
      <div>
        <Link to={`/vendors/${newName}`}>
          <button>{name}</button>
        </Link>
      </div>
    );
}