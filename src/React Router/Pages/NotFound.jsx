import React from 'react';

const NotFound = () => {
  const containerStyle = {
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    color: '#333',
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '6rem',
    fontWeight: 'bold',
    margin: '0',
    color: '#556ee6',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    margin: '10px 0',
    maxWidth: '600px',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#556ee6',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };
  /*
  Explanation:
  window.location.href is a JavaScript property that represents the current URL of the browser.
  Assigning a new value to window.location.href changes the URL and triggers a full page reload to the new location.
  In this case, it navigates the user to the root path ('/'), usually the home page.
  or
  we can also use useNavigate hook from react-router-dom to navigate programmatically without reloading the page.
  */

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <p style={subheadingStyle}>Oops! The page you're looking for doesn't exist or has been moved.</p>
      <button style={buttonStyle} onClick={handleGoHome}>
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
