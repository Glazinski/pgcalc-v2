import React from 'react';
import PropTypes from 'prop-types';
import * as config from '../data/staraConfig';
import matura from './matura';

const StaraMatura = ({ children }) => <>{children}</>;

StaraMatura.propTypes = {
  children: PropTypes.node.isRequired,
};

export default matura(StaraMatura, config);
