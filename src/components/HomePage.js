

import VendorCard from './VendorCard';

export default function HomePage({ vendors }) {

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