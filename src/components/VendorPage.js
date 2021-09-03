import { useParams } from 'react-router-dom';

export default function VendorPage({ vendors }) {
    const { name } = useParams();

    console.log(vendors)

    const newName = name.replaceAll("_", " ");

    return (
      <div>
        <h1>{newName}</h1>
      </div>
    );
}