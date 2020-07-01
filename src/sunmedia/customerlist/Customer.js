import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'  
import './customer.css'
import { message } from 'antd';
class Customer extends Component {
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
              isSelect:false,
              activities:[

                {
                  id:"33333",
                name:"新机型XSP上述", 
                title:"2007财年活动集合",
                isSelect:false,
              },
                {
                  id:"33334",
                name:"第一网站", 
                title:"2008财年活动集合",
                isSelect:false,
              },
              {
                id:"33335",
              name:"第二网站", 
              title:"网站建设",
              isSelect:false,
            }
              ]
              
          },
          {
            id:"22221",
            name:"FY 2008", 
            title:"2008财年活动集合", 
            isSelect:false, 
            activities:[

                {
                  id:"33336",
                name:"CCID", 
                title:"2007财年活动集合",
                isSelect:false,
              },
                {
                  id:"33337",
                name:"PCline", 
                title:"主机pc建设合集",
                isSelect:false,
              }
              ]  
        },
        {
          id:"22222",
          name:"临时性活动集", 
          title:"每年都有可能发生",  
          isSelect:false,
          activities:[

            {
              id:"33337",
            name:"IT168", 
            title:"2008财年活动集合",
            isSelect:false,
          },
            {
              id:"33338",
            name:"简单生活", 
            title:"电子杂志集合",
            isSelect:false,
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
              isSelect:false,
              activities:[

                {
                  id:"33339",
                name:"Volvo", 
                title:"Volvo公司的集团建设",
                isSelect:false,
              },
                {
                  id:"33310",
                name:"第一次活动", 
                title:"公司第一次大型活动",
                isSelect:false,
              }
              ]
              
          },
          {
            id:"22224",
            name:"Volvo 2008", 
            title:"2008财年活动集合", 
            isSelect:false,
            activities:[

                {
                  id:"33311",
                name:"招聘", 
                title:"招聘人才",
                isSelect:false,
              },
                {
                  id:"33312",
                name:"裁员", 
                title:"精简公司人员结构",
                isSelect:false,
              }
              ]   
        },
        {
          id:"22225",
          name:"临时性活动集", 
          title:"每年都有可能发生",  
          isSelect:false,
          activities:[

            {
              id:"33312",
            name:"Volvo", 
            title:"2007财年活动集合",
            isSelect:false,
          },
            {
              id:"33313",
            name:"Volvo", 
            title:"2007财年活动集合",
            isSelect:false,
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
              isSelect:false,
              activities:[

                {
                  id:"33314",
                name:"EPSON Printers 2007", 
                title:"2007财年活动集合",
                isSelect:false,
              },
                {
                  id:"33315",
                name:"EPSON Printers 2008", 
                title:"2008财年活动集合",
                isSelect:false,
              }
              ]
              
          },
          {
            id:"22227",
            name:"EPSON Printers", 
            title:"活动一些", 
            isSelect:false, 
            activities:[

                {
                  id:"33316",
                name:"EPSON Printers", 
                title:"Printers",
                isSelect:false,
              },
                {
                  id:"33317",
                name:"财政", 
                title:"营收过万亿",
                isSelect:false,
              }
              ]  
        },
        {
          id:"22228",
          name:"临时性活动集", 
          title:"每年都有可能发的", 
          isSelect:false,
          activities:[

            {
              id:"33319",
            name:"开会", 
            title:"每天都开会",
            isSelect:false,
          },
            {
              id:"33320",
            name:"加班", 
            title:"6 10 7",
            isSelect:false,
          }
          ] 
      }
         ]
        }
      ],
      newcustomer:null,
      selectvalue:"mingcheng",
      inputvalue:"",
      isEditor:false,
    value:"",
    value2:"",
    value3:"",
    value4:"",
    value5:"", 
    customers:""
      

  }
  componentDidMount(){
    const {customer} = this.state
    const id = this.props.match.params.customeId
    if(customer.find(item=>item.id === id)){
    const newcustomer = customer.find(item=>item.id === id).activity
    this.setState({
        newcustomer:newcustomer
    })
  }
  else{
    this.setState({
      newcustomer:null
  })
  }
  }
    render() { 
        const {newcustomer,selectvalue,inputvalue} = this.state
        const{value,value2,value3,value4,value5,isEditor} = this.state
        const id = this.props.match.params.customeId
      return ( 
        <div >
 {isEditor?<div className='usersetting1'>
      <h1>活动编辑</h1>
      <div className="clearfix"><span>活动编号：</span><input value={value} onChange={(event)=>this.handelvalue(event,"value")} type="text"/></div>
      <div className="clearfix"><span>活动名称：</span><input value={value2} onChange={(event)=>this.handelvalue(event,"value2")} type="text"/></div>
      <div className="clearfix"><span>活动方式：</span><input value={value3} onChange={(event)=>this.handelvalue(event,"value3")} type="text"/></div>
      <div className="clearfix"><span>联系概述：</span><input value={value4} onChange={(event)=>this.handelvalue(event,"value4")} type="text"/></div>     
      <div className="clearfix"><span>活动描述：</span><input value={value5} onChange={(event)=>this.handelvalue(event,"value5")} type="text"/></div>
      
      
      <div className="clearfix"> <button onClick={this.submit}>提交</button><button onClick={this.clearvalue}>重置</button></div>
    </div>:<div className="customer">
        <h2>活动管理</h2>
          <div className="editor1"><button onClick={this.add}>添加</button><button onClick={this.editor}>编辑</button>  <button onClick={this.deletechecked}>删除</button> 再此列：<select  value={selectvalue} onChange={(event)=>this.handleselect(event,"selectvalue")} >
            <option value="mingcheng">活动名称</option>
            <option value="miaoshu">活动描述</option>     
          </select> 查找：<input type="text" onKeyDown={event=>{
            if(event.which === 13){
              this.search();
              this.setState({
                inputvalue:""
            })
            }
          }} value={inputvalue} onChange={(event)=>this.handleselect(event,"inputvalue")} /></div>
          <div className="title1 clearfix"><input type="checkbox" checked={newcustomer? newcustomer.every(item=>item.isSelect):""} onChange={this.checkedall}/><span>名字</span><span>描述</span><span>活动数</span></div>
          {
      newcustomer? newcustomer.map(item=><li className="customer-list clearfix" key={item.id}> <input checked={item.isSelect} onChange={this.handlechange} onClick={()=>this.changechecked(item.id)} type="checkbox"/><NavLink to={`/home/customer/${id}/activity/${item.id}`}> <span>{item.name}</span></NavLink> <span>{item.title}</span> <span>{item.activities?item.activities.length:0}</span></li>):"暂无活动"
     }     

    </div>}
    </div>
       );
    }


    handleselect = (event,name)=>{
      this.setState({
        [name]:event.target.value
    })
    }

  search = () =>{
    const {newcustomer,selectvalue,inputvalue} = this.state
    if(selectvalue === "mingcheng"){
      if(newcustomer.find(item=>item.name.includes(inputvalue))){
    this.setState({  
      newcustomer:newcustomer.filter(item=>item.name.includes(inputvalue))
    })
  }
  else{
    message.error('没有所查项！');
  }
  }
  else if(selectvalue ==="miaoshu"){
    if(newcustomer.find(item=>item.title.includes(inputvalue))){
      this.setState({  
        newcustomer:newcustomer.filter(item=>item.title.includes(inputvalue))
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
        const {newcustomer} = this.state 
        this.setState({
            newcustomer:newcustomer.map(item=> item.id === id? {...item,isSelect:!item.isSelect}:item)
        })
        console.log(newcustomer.map(item=> item.id === id? {...item,isSelect:!item.isSelect}:item))
      }
  
      deletechecked = ()=>{
        const {newcustomer} = this.state      
        if(newcustomer.every(item=>!item.isSelect)){
          message.error('请勾选一个编辑项');
        }
        else{   
        this.setState({
            newcustomer:newcustomer.filter(item=>item.isSelect === false)
        })
      }
      }
      checkedall = (event)=>{
        const {newcustomer} = this.state    
        this.setState({       
            newcustomer:newcustomer.map(item => item?{ ...item,isSelect:event.target.checked}:"")
        }) 
      }
       //编辑
editor = () =>{
  const {newcustomer} = this.state   
  if(newcustomer.every(item=>!item.isSelect)){
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
  const{newcustomer,value,value2,value3,value4,value5} = this.state
   if( value==="" ||  value2==="" || value3==="" || value4==="" || value5===""
  ){ message.error('请填写完所有表单');}
    else{
      if(newcustomer.every(item=>!item.isSelect)){
        this.setState({
          customers : newcustomer.push({id:new Date().getTime().toString(),
            name:value2,
            title:value5,
            isSelect:false}),
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
        newcustomer:newcustomer.map(item=>item.isSelect === true?{id:item.id,
        name:value2,
        title:value5,
        isSelect:false,
        activities:item.activities
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
   
  export default Customer