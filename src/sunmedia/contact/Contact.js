import React, { Component } from 'react'

import './contact.css'

class Contact extends Component {
  state = {
    value:"",
    value2:"",
    value3:"",
    value4:"",
   
  }
  render() { 
    const{value,value2,value3,value4} = this.state
    return ( 
      <div className='contact'>
    <h3>请在下面留下您的任何意见、建议、想法或投诉，我们会本着服务至上的原则尽快处理：</h3>
    <div className="clearfix"><span>您的姓名：</span><input value={value} onChange={(event)=>this.handelvalue(event,"value")} type="text"/></div>
    <div className="clearfix"><span>你的Email：</span><input value={value2} onChange={(event)=>this.handelvalue(event,"value2")} type="text"/></div>
    <div className="clearfix"><span>您的电话：</span><input value={value3} onChange={(event)=>this.handelvalue(event,"value3")} type="text"/></div>
    <div className="clearfix"><span>您的留言：</span><textarea value={value4} onChange={(event)=>this.handelvalue(event,"value4")} name="" id="" cols="30" rows="3"></textarea></div>
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

  })
} 
}
  export default Contact