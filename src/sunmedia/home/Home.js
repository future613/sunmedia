import React from 'react';
import './home.css'
import { Menu } from 'antd';
import { NavLink,Route } from 'react-router-dom'  
import Customer from '../customerlist/Customer'
import Customerlist from '../customerlist/Customerlist'
import Actives from '../customerlist/Actives'
import Report from '../report/Report';
import Editor from '../editor/Editor';
const { SubMenu } = Menu;
  class Home extends React.Component {
    state = {
      theme: 'light',
      current: '',
      customer:[
        {
          id:"1111",
          number:"10002311",
          name:"DELL Computers",
          title:"Dell公司互动部代理",
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
      ]
      
    };
  
  
    handleClick = e => {
      this.setState({
        current: e.key,
      });
    };
 
    render() {
      const {customer} = this.state
      return (
       <div>
        <div className="menu">
        <ul>
       <li  style={{backgroundColor: this.props.location.pathname.includes("customerlist")?"#ccc":"" }}><NavLink  to="/home/customerlist">客户管理</NavLink></li>
        <li style={{backgroundColor: this.props.location.pathname.includes("customers" ) ?"#ccc":"" }}>活动管理</li>
        <li style={{backgroundColor: this.props.location.pathname.includes("activity" )?"#ccc":"" }}>活动详情</li>
        <li style={{backgroundColor: this.props.location.pathname.includes("report")?"#ccc":"" }} >查看报告</li>
      </ul>
          
        </div>
        {this.props.location.pathname.includes("customers")?<Route path="/home/customers/:customeId/activities" component={Customer}/>:this.props.location.pathname.includes("editoractive") ?<Route path="/editoractive" component={Customer}/>:this.props.location.pathname.includes("customerlist") ?<Route path="/home/customerlist" component={Customerlist}/>:this.props.location.pathname.includes("editorlist") ?<Route path="/editorlist" component={Customerlist}/>:this.props.location.pathname.includes("activity")?<Route path="/home/customer/:customeId/activity/:id" component={Actives}/>:this.props.location.pathname.includes("report")?<Route path="/home/report" component={Report}/>:<div className="contant2">
          <div className="section-top">
            <h3>SunMedia监测系统已正式上线，感谢您的使用！</h3>
            <p>经过精心的研发，SunMedia采用最新的国际化监测理念研发成功的监测系统已正式上线，在此过程中您如果遇到任何问题或有任何意见或建议，请随时点击最上方的“联系我们”或点击这里来给我们留言。</p>
          </div>
          <div className="section-middle">
          <h3>[通知]您有些帐户还没有添加任何监测点。</h3>
            <p>系统检测到您的如下客户还没有添加任何监测点：DELL Computers，Volvo Cars ，您可以点击链接直接进入活动管理以便添加。</p>
          </div>
          <div className="section-bottom clearfix" >
            <div className="section-bottom-left">
              <h3>您的帐户信息</h3>
<p>dddjdjdj@111.com</p>
<NavLink to="/usersetting">进入用户设置</NavLink>
<p>您上次登陆是在2007-5-10 18:55:20
  <br/>

最后一次登陆IP为 202.114.88.10</p>
<p>您是管理员，您下面有三个标准用户:

Sherry, Lisa, Andy</p>
            </div>
            <div className="section-bottom-right">
            <h3>尊敬的客户：</h3>
             {
               customer? customer.map(item=><li className="home-customer clearfix" key={item.id}><NavLink to={`/home/customers/${item.id}/activities`}><span>{item.name}</span></NavLink> <span>({item.activity.length}活动)</span><span>最后访问的活动</span><NavLink to={`/home/customers/${item.id}/activities`}><span>查看列表</span></NavLink></li>):""
             }
            </div>
          </div>
          <div className="section-footer">
          <NavLink to="/helpcenter">帮助中心</NavLink>
          <p>如果您是第一次登陆或对某些地方不了解，请点击最上面的“帮助中心”.</p>
          </div>
        </div>
        }
        </div>
        
      );
    }
  }
  export default Home;