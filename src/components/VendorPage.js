import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useEffect } from "react"

import { getItems } from "../features/vendor/vendorSlice"


export default function VendorPage() {
    const { id } = useParams()
    const items = useSelector(state => state = state.vendor.items)
    const dispatch = useDispatch()
    // const newName = name.replaceAll('_', ' ')

    useEffect(() => {
        dispatch(getItems(`${id}`))
    }, []);

    console.log('VendorPage===', items.name)


    return (
      <div>
        <h1>{items.name}</h1>
        <h4>{items.description}</h4>
        {items.items.map((item) => {
                return (
                <div>
                    <p>{item.name}</p>
                    <img src={item.image_url}/>
                    <p>${item.price}</p>
                </div>
                )
            })}
      </div>
    );
}