import React from 'react';

function NotFoundPage() {
  return (
    <div className="page not-found">
      <div className="container not-found__container">
        <h1 className="not-found__title">404 - Page Not Found</h1>
        <p className="not-found__description">
          Sorry, the page you are looking for does not exist.
        </p>
        <button className="not-found__button button" >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export { NotFoundPage };
