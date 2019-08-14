import React from 'react';
import ReactDOM from 'react-dom';
import Global from './Layout/Global';
import Header from './components/Header/Header';

const App = () => (
  <Global>
    <Header />
  </Global>
);

ReactDOM.render(<App />, document.getElementById('root'));
