import { useEffect, useState } from 'react';

export default function HomePage() {
    const [vendors, setVendors] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/vendors')
        .then(res => res.json())
        .then(data => setVendors(data))
    }, []);

    console.log(vendors)
    return (
        <h1>Hi</h1>
    )
}