import React from 'react';
import PropTypes from 'prop-types';
import * as config from '../data/ibConfig';
import matura from './matura';

const MaturaIb = ({ children }) => <>{children}</>;

MaturaIb.propTypes = {
  children: PropTypes.node.isRequired,
};

export default matura(MaturaIb, config);
