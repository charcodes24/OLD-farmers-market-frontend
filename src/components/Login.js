import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { logIn, clearErrors } from "../features/customer/customerSlice"
import { userLogin } from "../features/login/loginSlice"

import Loading from "./Loading"

export default function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const customer = useSelector(state => state.customer.customer)
    const errors = useSelector(state => state.allusers.errors)
    const isLoading = useSelector(state => state.customer.isLoading)
    const hasError = useSelector(state => state.allusers.hasError)
    const loggedIn = useSelector(state => state.customer.loggedIn)
    const [toggleError, setToggleError] = useState(false)
    // const [errors, setErrors] = useState([])
    const [form, setForm] = useState({
        username: "",
        password: ""
    })
  
  console.log(errors)
  
  useEffect(() => {
    dispatch(clearErrors())
  }, []);
  

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // console.log("ERRORS", errors)
    // console.log("CUSTOMER", customer)

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //       },
    //       body: JSON.stringify({
    //         username: form.username,
    //         password: form.password,
    //       }),
    //     })
    //         .then(res => {
    //             if (res.ok) {
    //                 res.json().then((form) => {
    //                     dispatch(logIn(form))
    //                     history.push('/')
    //                 })
    //             } else {
    //                 res.json().then((error) => {
    //                     setErrors(error.errors)
    //                     setForm({
    //                       username: "",
    //                       password: "",
    //                     });
    //                 })
    //         }
    //     })
    // }
    // function handleLogin() {
    //     if (customer) {
    //         history.push('/')
    //         dispatch(clearErrors())
    //     } else {
    //         setToggleError(!toggleError)
    //     }
    // }

    function handleSubmit(e) {
      e.preventDefault();
        dispatch(userLogin(form));
        // handleLogin();
      // if (loggedIn) {
      //     history.push('/')
      // }
      // else {
      //     setToggleError(!toggleError)
      // }
    }

 


    {
        return isLoading ? (
          <Loading />
        ) : (
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
              <button>Log-In!</button>
            </form>
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