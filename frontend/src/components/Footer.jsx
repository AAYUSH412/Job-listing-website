import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-8 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} React Jobs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;