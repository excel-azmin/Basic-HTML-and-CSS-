import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

export default function Register() {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Creating user with email:', email, password);
    createUser(email, password)
      .then(() => {
        console.log('User created successfully');
        toast.success('User created successfully');
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        toast.error('Error creating user: ' + error.message);
      });
    event.target.reset();
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
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
            <form onSubmit={handleCreateUser}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    required
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    name="password"
                    required
                    placeholder="Password"
                  />
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </div>
            </form>
            <div className="card-actions justify-end">
              <NavLink to="/login">
                <button className="btn btn-link">
                  Already have an account?
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
