import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createCustomer } from "../features/allUsers/allUsersSlice";

import Loading from "./Loading";

export default function CustomerSignUp() {
  const dispatch = useDispatch()
  const history = useHistory()
  const errors = useSelector(state => state.allusers.errors)
  const hasError = useSelector(state => state.allusers.hasError)
  const isLoading = useSelector(state => state.customer.isLoading)
    const [form, setForm] = useState({
        username: "",
        password: "",
        password_confirmation: "",
    })


    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
  

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createCustomer(form))
  }
 
{
  return isLoading ? (
    <Loading />
  ) : (
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
            placeholder="username"
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
            <Link to="/vendor_signup"><button>Are you a vendor?</button></Link>
        </form>
      </div>
      {hasError ? (
        <div>
            {errors.map((error) => <h3>{error}</h3> )}
        </div>
        ) : null}
    </div>
  );
}
}