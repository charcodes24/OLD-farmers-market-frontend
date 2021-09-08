import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { clearErrors, vendorLogin } from "../features/vendor/vendorSlice";

import Loading from "./Loading";

export default function VendorLogIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const customer = useSelector((state) => state.customer.customer);
  const errors = useSelector((state) => state.customer.errors);
  const isLoading = useSelector((state) => state.customer.isLoading);
  const hasError = useSelector((state) => state.customer.hasError);
  const loggedIn = useSelector((state) => state.customer.loggedIn);
  const [toggleError, setToggleError] = useState(false);
  // const [errors, setErrors] = useState([])
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    dispatch(clearErrors());
  }, []);

  function handleInput(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(vendorLogin(form));
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
