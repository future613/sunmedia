import React, { Component } from 'react'

import './user.css'

class Usersetting extends Component {
  state = {
    value:"",
    value2:"",
    value3:"",
    value4:"",
    value5:"",
    value6:"",
    value7:""
  }
  render() { 
    const{value,value2,value3,value4,value5,value6,value7} = this.state
    return ( 
      <div className='usersetting'>
    <h1>用户设置</h1>
    <div className="clearfix"><span>用户名：</span><input value={value} onChange={(event)=>this.handelvalue(event,"value")} type="text"/></div>
    <div className="clearfix"><span>密码：</span><input value={value2} onChange={(event)=>this.handelvalue(event,"value2")} type="password"/></div>
    <div className="clearfix"><span>新密码：</span><input value={value3} onChange={(event)=>this.handelvalue(event,"value3")} type="password"/></div>
    <div className="clearfix"><span>确认新密码：</span><input value={value4} onChange={(event)=>this.handelvalue(event,"value4")} type="password"/></div>     
    <div className="clearfix"><span>Email：</span><input value={value5} onChange={(event)=>this.handelvalue(event,"value5")} type="text"/></div>
    <div className="clearfix"><span>姓名：</span><input value={value6} onChange={(event)=>this.handelvalue(event,"value6")} type="text"/></div>
    <div className="clearfix"><span>电话：</span><input value={value7} onChange={(event)=>this.handelvalue(event,"value7")} type="text"/></div>
    <div className="clearfix"><button>提交</button> <button onClick={this.clearvalue}>重置</button></div>
  </div>
     );
  }
 handelvalue = (event,name)=>{
   this.setState({
     [name]:event.target.value
   })
 } 
 clearvalue = ()=>{
  this.setState({
    value:"",
    value2:"",
    value3:"",
    value4:"",
    value5:"",
    value6:"",
    value7:""
  })
} 
}
  export default Usersetting;


  
   