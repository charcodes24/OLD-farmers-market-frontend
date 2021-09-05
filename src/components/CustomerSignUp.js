import { useState } from "react"

export default function CustomerSignUp() {
    const [form, setForm] = useState({
        username: "",
        password: "",
        confirmation: ""
    })

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch()
            .then(res => {
                if (res.ok) {
                // do something w success
                } else {
                    return res.json().then(data => {
                        //show an error modal/message
                        console.log(data)
                    })
            }
        })

    }

    return (
        <div>
            <div>
                <h1>Welcome! We're excited to have you join our community :).</h1>
            </div>
            <div>
                <form>
                    <input onChange={handleInput} type="text" name="username" value={form.username} placeholder="name"/>
                    <input onChange={handleInput} type="text" name="password" value={form.password} placeholder="password" />
                    <input onChange={handleInput} type="text" name="confirmation" value={form.confirmation} placeholder="re-type password" />
                    <button>Sign Up!</button>
                </form>
            </div>
        </div>
    )
}