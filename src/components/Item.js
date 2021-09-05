import { useDispatch, useSelector } from "react-redux";

export default function Item({ item }) {
    const { name, image_url, price } = item 
    return (
      <div>
        <img src={image_url} />
        <h3>{name}</h3>
            <p>${price}</p>
            <button>Add To Cart</button>
      </div>
    );
}