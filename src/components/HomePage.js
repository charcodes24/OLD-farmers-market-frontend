import { useEffect, useState } from 'react';

import VendorCard from './VendorCard';

export default function HomePage() {
    const [vendors, setVendors] = useState([])

    useEffect(() => {
        fetch('/vendors')
        .then(res => res.json())
        .then(data => setVendors(data))
    }, []);

    const displayVendors = vendors.map((vendor) => {
        return <VendorCard
            key={vendor.id}
            vendor={vendor}
            />
    })

    return (
        <div>
            <h1>Welcome to the Farmer's Market</h1>
            {displayVendors}
        </div>
    )
}