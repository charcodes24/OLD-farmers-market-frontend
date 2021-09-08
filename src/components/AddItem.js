import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addItem } from "../features/items/itemSlice"

export default function AddItem() {
    const dispatch = useDispatch()
    const vendorID = useSelector(state => state.allusers.vendor.id)
    const [form, setForm] = useState({
        name: "",
        image_url: "",
        price: 0,
        vendor_id: `${vendorID}`
    })

    console.log(vendorID)

    function handleInput(e) {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addItem(form))
    }

    console.log(form)
    return (
        <div>
            <div>
                <h1>Add an item:</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleInput} type="text" name="name" value={form.name} placeholder="name" />
                    <input onChange={handleInput} type="text" name="image_url" value={form.image_url} placeholder="image" />
                    <input onChange={handleInput} type="integer" name="price" value={form.price} placeholder="price" />
                    <button>Delete</button>
                </form>
            </div>
        </div>
    )
}