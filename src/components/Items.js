import { useDispatch, useSelector } from "react-redux";

export default function Items() {
    const items = useSelector(state => state.vendor.items)
    
    console.log("ITEMS", items)

    return <h1>{items[0]}</h1>
}