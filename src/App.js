import React, { Component } from 'react';
import Login from './views/Login'
import { BrowserRouter } from "react-router-dom";

import LayoutScreen from './layout';

import './assets/css/App.css'

class App extends Component {
  render() {
    const isLogin = false;
    return (
      <BrowserRouter>
      {
        isLogin ? (
          <LayoutScreen/>
        ) : (
          // <p>Login page</p>
          <div class="bg">
            <h1 class="titleLogin">Park Of Nailert Admin Mangrment</h1>
              <Login/>
            <h3 class="foolter">PARK OF NAILERT @ 2018 Created by ....</h3>
          </div>
        )
      }
      </BrowserRouter>
    )
  }
}

export default App;
