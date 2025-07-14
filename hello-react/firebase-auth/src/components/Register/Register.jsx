import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

export default function Register() {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // Handle registration logic here
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        toast.success('Registration successful!');
        const user = userCredential.user;
        console.log('User registered:', user);
        navigate('/dashboard');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        console.error('Error during registration:', errorCode, errorMessage);
      });
    event.target.reset();
  };

  const handleGoogleSignUp = () => {
    console.log('Google Sign Up clicked');
    signInWithGoogle()
      .then((result) => {
        toast.success('Registration successful!');
        const user = result.user;
        console.log('User signed in with Google:', user);
        navigate('/dashboard');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        console.error('Error during Google sign in:', errorCode, errorMessage);
      });
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
                    required
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    required
                    name="password"
                    placeholder="Password"
                  />
                  <button className="btn btn-neutral mt-4">Register</button>
                  <p className="pt-5 text-end">
                    Already Have an account?{' '}
                    <NavLink to="/" className="text-teal-700 font-bold">
                      Login
                    </NavLink>
                  </p>
                </fieldset>
              </div>
            </form>
            <div className="pb-10 text-center">
              <p className="text-gray-500 text-xl font-bold">Social Login</p>
              <button
                type="submit"
                className="btn btn-neutral mt-4"
                onClick={handleGoogleSignUp}
              >
                <FaGoogle />
                Sign Up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
