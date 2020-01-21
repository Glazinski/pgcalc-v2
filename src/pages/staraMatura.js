import React from 'react';
import PropTypes from 'prop-types';
import matura from './matura';

const StaraMatura = ({ children }) => <>{children}</>;

StaraMatura.propTypes = {
  children: PropTypes.node.isRequired,
};

export default matura(StaraMatura);
