import React from 'react';
import { NavLink } from 'react-router';

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registration form submitted');
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(`Email: ${email}, Password: ${password}`);
    // Handle registration logic here
  };

  return (
    <>
      <div className="hero my-auto lg:py-50 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                  <button className="btn btn-neutral mt-4">Register</button>
                  <p className="pt-5 text-end">
                    Already Have an account? <NavLink to="/">Login</NavLink>
                  </p>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
