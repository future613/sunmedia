import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import Main from './sunmedia/main/Main';
import Header from './sunmedia/header/Header';
import moment from 'moment'
import "moment/locale/zh-cn"
moment.locale("zh-cn"); 
const App = () => (
      <Router>
      <Header/>
      <br/>
      <br/>
      <br/>
      <Main/>       
      </Router>

  )

  export default App;
