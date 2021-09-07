import { useState } from "react"
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../features/signup/customerSlice";

export default function CustomerSignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const customer = useSelector(state => state.customer.customer)
    const [form, setForm] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })
  
   console.log("CUSTOMER", customer);

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
  
  

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createCustomer(form))
    history.push('/')
  }
 

    return (
      <div>
        <div>
          <h1>Sign Up Page.</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleInput}
              type="text"
              name="username"
              value={form.username}
              placeholder="name"
            />
            <input
              onChange={handleInput}
              type="text"
              name="password"
              value={form.password}
              placeholder="password"
            />
            <input
              onChange={handleInput}
              type="text"
              name="password_confirmation"
              value={form.password_confirmation}
              placeholder="re-type password"
            />
            <button>Sign Up!</button>
          </form>
        </div>
      </div>
    );
}