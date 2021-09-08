import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

import { createCustomer, clearErrors } from "../features/signup/customerSlice";

import Loading from "./Loading";

export default function CustomerSignUp() {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.customer.errors)
  const hasError = useSelector(state => state.customer.hasError)
  const customer = useSelector(state => state.customer.customer)
  const isLoading = useSelector(state => state.customer.isLoading)
  const [isVendor, setIsVendor] = useState(false)
    const [form, setForm] = useState({
        username: "",
        password: "",
        password_confirmation: "",
        name: "",
        description: ""
    })
  
  console.log("CUSTOMER", customer);
  console.log("ERRORS", errors)
  console.log("HAS ERRORS?", hasError)

  useEffect(() => {
    dispatch(clearErrors());
  }, []);

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
  
  function toggleIsVendor(e) {
    e.preventDefault();
    setIsVendor(!isVendor)
  }

  console.log("IS VENDOR", isVendor)
  console.log("SIGNUP FORM", form)
  
  

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