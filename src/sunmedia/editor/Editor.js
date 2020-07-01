import React, { Component } from 'react'
import './editor.css'
import { message } from 'antd';
class Editor extends Component {
  state = {
    value:"",
    value2:"",
    value3:"",
    value4:"",
    value5:"", 
  }
  render() { 
    const{value,value2,value3,value4,value5} = this.state
    return ( 
      <div className='usersetting1'>
    <h1>编辑</h1>
    <div className="clearfix"><span>编号：</span><input value={value} onChange={(event)=>this.handelvalue(event,"value")} type="text"/></div>
    <div className="clearfix"><span>名称：</span><input value={value2} onChange={(event)=>this.handelvalue(event,"value2")} type="password"/></div>
    <div className="clearfix"><span>主要联系人：</span><input value={value3} onChange={(event)=>this.handelvalue(event,"value3")} type="password"/></div>
    <div className="clearfix"><span>联系方式：</span><input value={value4} onChange={(event)=>this.handelvalue(event,"value4")} type="password"/></div>     
    <div className="clearfix"><span>描述：</span><input value={value5} onChange={(event)=>this.handelvalue(event,"value5")} type="text"/></div>
    
    
    <div className="clearfix"><button onClick={this.submit}>提交</button> <button onClick={this.clearvalue}>重置</button></div>
  </div>
     );
  }
 handelvalue = (event,name)=>{
   this.setState({
     [name]:event.target.value
   })
 }
 submit = () =>{
  const{value,value2,value3,value4,value5} = this.state
   if( value==="" ||  value2==="" || value3==="" || value4==="" || value5===""
  ){ message.error('请填写完所有表单');}
    else{window.history.back()} 
 } 
 clearvalue = ()=>{
  this.setState({
    value:"",
    value2:"",
    value3:"",
    value4:"",
    value5:"",
    
  })
} 
}
  export default Editor