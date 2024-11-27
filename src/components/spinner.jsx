import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

// Define custom styles
const override = {
  display: 'block',
  margin: '100px auto',
  borderColor: 'white',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#1100ff" // Add # for hex color
      loading={loading}
      cssOverride={override} // Correct prop for react-spinners v2+
      size={100} // Adjust size as needed
    />
  );
};

export default Spinner;
