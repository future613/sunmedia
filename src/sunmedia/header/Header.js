import React, { Component } from 'react';
import './header.css'
import { Link, NavLink,withRouter,Route  } from 'react-router-dom' 
import img from '../img/img.png'
import Login from '../login';


  class Header extends Component {
    render() { 
      return ( 
        <div className="header">


        {this.props.location.pathname === '/'?<Route exact path="/" component={Login}/>:<ul className='list1 clearfix'><Link to="/home"><img src={img} alt=""/></Link><li><NavLink exact to="/home">首页</NavLink></li>
        <li><NavLink to="/usersetting">用户设置</NavLink></li>
        <li><NavLink to="/helpcenter">帮助中心</NavLink></li>
        <li><NavLink to="/contactus">联系我们</NavLink></li>
        <li><NavLink isActive={()=>this.props.location.pathname === '/'} to="/">退出登录</NavLink></li></ul>}
      

    </div>
       );
    }
    
  }
   
  export default withRouter(Header)