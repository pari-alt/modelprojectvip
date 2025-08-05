import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';

function ComingSoon() {
  return (
    <div className="container mt-5 text-center">
      <FaTools size={50} className="text-warning mb-3" />
      <h2 className="mb-2">🚧 Coming Soon!</h2>
      <p className="mb-4">This portal is currently under development. Please check back later.</p>
      <Link to="/" className="btn btn-info">Back to Home</Link>
    </div>
  );
}

export default ComingSoon;
