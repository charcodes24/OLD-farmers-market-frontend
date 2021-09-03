import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function VendorPage() {
    const [items, setItems] = useState([]);
    const { name } = useParams();

    


    const newName = name.replaceAll("_", " ");

    return (
        <h1>{newName}</h1>
    )
}