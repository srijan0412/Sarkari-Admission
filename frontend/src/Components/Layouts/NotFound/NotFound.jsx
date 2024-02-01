import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
        <Link to="/">
          <h1>Go to Home</h1>
        </Link>

    </div>
  );
};

export default NotFound;
