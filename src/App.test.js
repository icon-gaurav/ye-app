import React from 'react';
import ReactDOM from 'react-dom';
import AuthorizedUser from './AuthorizedUser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorizedUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});
