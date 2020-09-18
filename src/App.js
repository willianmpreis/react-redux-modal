import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import Modal from './modal'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'

import store from './store'
import users from './store/users'
import Users from './Users';

function App() {
  return (
    <>
      <Provider store={store}>
        <Modal />
      </Provider>
      <hr />
      <Provider store={users}>
        <Users/>
      </Provider>
    </>
  );
}

export default App;
