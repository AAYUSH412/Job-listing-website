import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

const override = {
  display: 'block',
  margin: '100px auto',
  borderColor: 'white',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#1100ff"
      loading={loading}
      cssOverride={override}
      size={100}
    />
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Spinner;