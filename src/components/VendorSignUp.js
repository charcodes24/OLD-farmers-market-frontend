import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { createVendor } from "../features/vendor/vendorSlice"

import Loading from "./Loading"

export default function VendorSignUp() {
    const errors = useSelector(state => state.vendor.errors)
    const hasError = useSelector(state => state.vendor.hasError)
    const isLoading = useSelector(state => state.customer.isLoading)
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: "",
        description: "",
        username: "",
        password: "",
        password_confirmation: ""
    })

    console.log("VENDOR SIGN UP", errors)

    function handleInput(e) {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createVendor(form))
    }

    {
        return isLoading ? (
          <Loading />
        ) : (
          <div>
            <div>
              <h1>Vendor Sign Up Page</h1>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleInput}
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="name"
                />
                <textarea
                  onChange={handleInput}
                  type="text"
                  name="description"
                  value={form.description}
                  placeholder="description"
                />
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
                  placeholder="password confirmation"
                />
                <button>Sign Up!</button>
              </form>
            </div>
            {hasError ? (
              <div>
                {errors.map((error) => (
                  <h3>{error}</h3>
                ))}
              </div>
            ) : null}
          </div>
        );
    }
}