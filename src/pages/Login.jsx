/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("me@me.com");
  const [password, setPassword] = useState("me");
  const existDialog = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((authInfo) => {
        if (authInfo.token) {
          localStorage.setItem("rare_token", JSON.stringify(authInfo));
          navigate("/");
        } else {
          existDialog.current.showModal();
        }
      });
  };

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={existDialog}>
        <div>User does not exist</div>
        <button
          className="button--close"
          onClick={(e) => existDialog.current.close()}
        >
          Close
        </button>
      </dialog>

      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1 className="text-4xl mt-7 mb-3">V-H-YES!</h1>
          <div>
            As streaming media continues to grow, physical media is becoming more and more difficult to find. V-H-YES takes you back to the good old days of the original physical movie media: VHS cassette tapes!
            For $49/year through Venmo, sign up and you can join our rental service where you can rent one tape at a time. The tape will ship to your mailbox in a resealable, returnable mailer. You just send it back whenever you're ready to get another tape.
            Come take a walk down memory lane and check out all your favorite classics!
          </div>
          <h2 className="text-xl mb-10">Please sign in</h2>
          <fieldset className="mb-4">
            <label htmlFor="inputEmail"> Email </label>
            <input
              type="text"
              id="inputEmail"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              className="form-control"
              placeholder="Email"
              required
              autoFocus
            />
          </fieldset>
          <fieldset className="mb-4">
            <label htmlFor="inputPassword"> Password </label>
            <input
              type="password"
              id="inputPassword"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              className="form-control"
              placeholder="Password"
            />
          </fieldset>
          <fieldset>
            <button
              type="submit"
              className="button p-3 rounded-md bg-blue-800 text-blue-100"
            >
              Sign in
            </button>
          </fieldset>
        </form>
      </section>
      <div className="loginLinks">
        <section className="link--register">
          <Link
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            to="/register"
          >
            Not a member yet?
          </Link>
        </section>
      </div>
    </main>
  );
};
