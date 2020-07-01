import React from 'react';
import Home from '../home/Home';
import Usersetting from '../usersetting/Usersetting';
import Help from '../help/Help';
import { Route,withRouter, Switch } from 'react-router-dom'

import Contact from '../contact/Contact';
const Main = (props) => (
    <div>
      <Switch>
      <Route exact={props.location.pathname.includes("customer") || props.location.pathname.includes("report") || props.location.pathname.includes("editorlist") || props.location.pathname.includes("editoractive") || props.location.pathname.includes("editorcustomer")? false : true } path="/home" component={Home}/>     
      <Route path="/usersetting" component={Usersetting}/>
      <Route path="/helpcenter" component={Help}/>
      <Route path="/contactus" component={Contact}/>   
      </Switch>
    </div>
  )

  export default withRouter(Main)
