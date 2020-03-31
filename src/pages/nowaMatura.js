import React from 'react';
import PropTypes from 'prop-types';
import * as config from '../data/nowaConfig';
import matura from './matura';

const NowaMatura = ({ children }) => <>{children}</>;

NowaMatura.propTypes = {
  children: PropTypes.node.isRequired,
};

export default matura(NowaMatura, config);
