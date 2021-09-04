import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useEffect } from "react"

import { getItems } from "../features/vendor/vendorSlice"

import Loading from "./Loading"
import Items from "./Items"


export default function VendorPage() {
    const { id } = useParams()
    const items = useSelector(state => state.vendor.items)
    // const { isLoading } = useSelector((state) => state.vendor)
    const dispatch = useDispatch()
    // const newName = name.replaceAll('_', ' ')
    const isLoading = false
 

    console.log("VENDOR PAGE", items)

    useEffect(() => {
        dispatch(getItems(`${id}`))
    }, [dispatch]);

    console.log('ISLOADING on VENDORPAGE', isLoading)
    console.log('VendorPage===', items)

    return (
        <div>
            {isLoading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <Items />
            )}
        </div>
    )
}