import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { customerLogin, logInErrors, logIn } from "../features/signup/customerSlice"

export default function CustomerLogin() {
    const dispatch = useDispatch()
    const history = useHistory()
    const customer = useSelector(state => state.customer.customer)
    // const errors = useSelector(state => state.customer.errors)
    // const [toggleError, setToggleError] = useState(false)
    const [errors, setErrors] = useState([])
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    console.log("CUSTOMER",errors)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username: form.username,
            password: form.password,
          }),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then((form) => dispatch(logIn(form)))
                    history.push('/')
                } else {
                    res.json().then((error) => setErrors(error.errors))
            }
        })
    }


    return (
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
            {errors.length > 0 ? 
                <div>
                    <h1>Invalid username or password</h1>
            </div> : null}
        </div>
    )
}