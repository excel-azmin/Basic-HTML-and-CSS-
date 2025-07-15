import { Navigate } from 'react-router';

function NotFound() {
  return (
    <div>
      404 Not Found
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or return to the home page.</p>
      <Navigate href="/">Go to Home Page</Navigate>
    </div>
  );
}

export default NotFound;
