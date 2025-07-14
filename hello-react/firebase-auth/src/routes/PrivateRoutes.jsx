import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

export default function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="max-w-11/12 mx-auto flex justify-center items-center lg:my-80">
        <progress className="progress w-56 h-5"></progress>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to="/" />;
}
