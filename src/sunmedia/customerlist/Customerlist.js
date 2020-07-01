import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'  
import { message } from 'antd';
import './customerlist.css'
class Customerlist extends Component {
  state= {
    customer:[
      {
        id:"1111",
        number:"10002311",
        name:"DELL Computers",
        title:"Dell公司互动部代理",
        isSelect:false,
        activity:[
          {
            id:"22220",
            name:"FY 2007", 
            title:"2007财年活动集合",
            activities:[

              {
                id:"33333",
              name:"新机型XSP上述", 
              title:"2007财年活动集合"
            },
              {
                id:"33334",
              name:"第一网站", 
              title:"2008财年活动集合",
            },
            {
              id:"33335",
            name:"第二网站", 
            title:"网站建设",
          }
            ]
            
        },
        {
          id:"22221",
          name:"FY 2008", 
          title:"2008财年活动集合",  
          activities:[

              {
                id:"33336",
              name:"CCID", 
              title:"2007财年活动集合"
            },
              {
                id:"33337",
              name:"PCline", 
              title:"主机pc建设合集",
            }
            ]  
      },
      {
        id:"22222",
        name:"临时性活动集", 
        title:"每年都有可能发生",  
        activities:[

          {
            id:"33337",
          name:"IT168", 
          title:"2008财年活动集合"
        },
          {
            id:"33338",
          name:"简单生活", 
          title:"电子杂志集合",
        }
        ]
    }
       ]
      },
      {
        id:"1112",
        number:"10002312",
        name:"Volvo Cars",
        title:"Volvo Cars公司代理",
        isSelect:false,
        activity:[
          {
            id:"22223",
            name:"Volvo 2009", 
            title:"2009财年活动集合",
            activities:[

              {
                id:"33339",
              name:"Volvo", 
              title:"Volvo公司的集团建设"
            },
              {
                id:"33310",
              name:"第一次活动", 
              title:"公司第一次大型活动",
            }
            ]
            
        },
        {
          id:"22224",
          name:"Volvo 2008", 
          title:"2008财年活动集合", 
          activities:[

              {
                id:"33311",
              name:"招聘", 
              title:"招聘人才"
            },
              {
                id:"33312",
              name:"裁员", 
              title:"精简公司人员结构",
            }
            ]   
      },
      {
        id:"22225",
        name:"临时性活动集", 
        title:"每年都有可能发生",  
        activities:[

          {
            id:"33312",
          name:"Volvo", 
          title:"2007财年活动集合"
        },
          {
            id:"33313",
          name:"Volvo", 
          title:"2007财年活动集合",
        }
        ]
    }
       ]
      },
      {
        id:"1113",
        number:"10002313",
        name:"EPSON Printers",
        title:"EPSON Printers代理",
        isSelect:false,
        activity:[
          {
            id:"22226",
            name:"EPSON Printers 2007", 
            title:"2007财年活动集合",
            activities:[

              {
                id:"33314",
              name:"EPSON Printers 2007", 
              title:"2007财年活动集合"
            },
              {
                id:"33315",
              name:"EPSON Printers 2008", 
              title:"2008财年活动集合",
            }
            ]
            
        },
        {
          id:"22227",
          name:"EPSON Printers", 
          title:"活动一些",  
          activities:[

              {
                id:"33316",
              name:"EPSON Printers", 
              title:"Printers"
            },
              {
                id:"33317",
              name:"财政", 
              title:"营收过万亿",
            }
            ]  
      },
      {
        id:"22228",
        name:"临时性活动集", 
        title:"每年都有可能发的", 
        activities:[

          {
            id:"33319",
          name:"开会", 
          title:"每天都开会"
        },
          {
            id:"33320",
          name:"加班", 
          title:"6 10 7",
        }
        ] 
    }
       ]
      }
    ],
    selectvalue:"mingcheng",
    inputvalue:"",
    isEditor:false,
    value:"",
    value2:"",
    value3:"",
    value4:"",
    value5:"", 
  }
    render() { 
      const {customer,selectvalue,inputvalue} = this.state
      const{value,value2,value3,value4,value5,isEditor} = this.state
      return ( 
        <div>{isEditor?<div className='usersetting1'>
      <h1>客户编辑</h1>
      <div className="clearfix"><span>编号：</span><input value={value} onChange={(event)=>this.handelvalue(event,"value")} type="text"/></div>
      <div className="clearfix"><span>名称：</span><input value={value2} onChange={(event)=>this.handelvalue(event,"value2")} type="text"/></div>
      <div className="clearfix"><span>主要联系人：</span><input value={value3} onChange={(event)=>this.handelvalue(event,"value3")} type="text"/></div>
      <div className="clearfix"><span>联系方式：</span><input value={value4} onChange={(event)=>this.handelvalue(event,"value4")} type="text"/></div>     
      <div className="clearfix"><span>描述：</span><input value={value5} onChange={(event)=>this.handelvalue(event,"value5")} type="text"/></div>
      
      
      <div className="clearfix"> <button  onClick={this.submit}>提交</button><button onClick={this.clearvalue}>重置</button></div>
    </div>:<div className="customerlist" >
          <h2>客户列表</h2>
          <div className="editor"> <button onClick={this.add}>添加</button><button onClick={this.editor}>编辑</button> <button onClick={this.deletechecked}>删除</button> 再此列：<select value={selectvalue} onChange={(event)=>this.handleselect(event,"selectvalue")}>
            <option value="mingcheng">客户名称</option>
            <option value="miaoshu">客户描述</option>      
          </select> 查找：<input type="text" onKeyDown={event=>{
            if(event.which === 13){
              this.search();
              this.setState({
                inputvalue:""
            })
            }
          }} value={inputvalue} onChange={(event)=>this.handleselect(event,"inputvalue")} /></div>
          <div className="title clearfix"><input type="checkbox" checked={customer.every(item=>item.isSelect)} onChange={this.checkedall}/><span>客户编号</span><span>客户名称</span><span>客户描述</span><span>活动数</span></div>
    {
      customer? customer.map(item=><li className="customerlist-list clearfix" key={item.id}> <input  checked={item.isSelect} onChange={this.handlechange} onClick={()=>this.changechecked(item.id)} type="checkbox"/><span>{item.number}</span><NavLink to={`/home/customers/${item.id}/activities`}> <span>{item.name}</span></NavLink> <span>{item.title}</span><span>{item.activity?item.activity.length:0}</span></li>):""
     }     

    </div>}</div>
       );
    }


    handleselect = (event,name)=>{
      this.setState({
        [name]:event.target.value
    })
    }

  search = () =>{
    const {customer,selectvalue,inputvalue} = this.state
    if(selectvalue === "mingcheng"){
      if(customer.find(item=>item.name.includes(inputvalue))){
    this.setState({  
      customer:customer.filter(item=>item.name.includes(inputvalue))
    })
  }
  else{
    message.error('没有所查项！');
  }
  }
  else if(selectvalue ==="miaoshu"){
    if(customer.find(item=>item.title.includes(inputvalue))){
      this.setState({  
        customer:customer.filter(item=>item.title.includes(inputvalue))
      })
    }
    else{
      message.error('没有所查项！');
    }
  }
  }

    handlechange = (event) =>{
      this.setState({
          checked:event.target.checked
      })
      }



    changechecked = (id) =>{
      const {customer} = this.state
      this.setState({
        customer:customer.map(item=> item.id === id? {...item,isSelect:!item.isSelect}:item)
      })
    }

    deletechecked = ()=>{
      const {customer} = this.state 
      if(customer.every(item=>!item.isSelect)){
        message.error('请勾选一个编辑项');
      }
      else{   
      this.setState({
        customer:customer.filter(item=>item.isSelect === false)
      })
    }
    }

    checkedall = (event)=>{
       const {customer} = this.state    
      this.setState({       
        customer:customer.map(item => item?  { ...item,isSelect:event.target.checked}:"")
      })
    }
    //编辑
editor = () =>{
  const {customer} = this.state 
  if(customer.every(item=>!item.isSelect)){
    message.error('请勾选一个编辑项');
  }
  else{
    this.setState({
      isEditor : true
    })  
  }
}

//添加
add = () =>{
    this.setState({
      isEditor : true
    })
}

// 编辑和添加
submit = () =>{
  const{customer,value,value2,value3,value4,value5} = this.state
   if( value==="" ||  value2==="" || value3==="" || value4==="" || value5===""
  ){ message.error('请填写完所有表单');}
    else{
      if(customer.every(item=>!item.isSelect)){
        this.setState({
          newcustomer : customer.push({id:new Date().getTime().toString(),
            number:value,
            name:value2,
            title:value5,
            isSelect:false,
            activity:[]
          }),
            isEditor : false,
            value:"",
            value2:"",
            value3:"",
            value4:"",
            value5:"",
        })
    } 
    else{     
      this.setState({
      customer:customer.map(item=>item.isSelect === true?{id:item.id,
        number:value,
        name:value2,
        title:value5,
        isSelect:false,
        activity:item.activity
      }:item),
        isEditor : false,
        value:"",
        value2:"",
        value3:"",
        value4:"",
        value5:"",
      })
    }
  }
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
   
 })
} 
  }
   
  export default Customerlist