import React from 'react'
import './login.css'
import img from '../img/img.png'
import { Form, Input, Button} from 'antd';
const layout = {
    labelCol: { span: 6},
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 11, span: 10 },
  };
  
  const Login = (props) => {
    const onFinish = () => {
      props.history.push("/home")
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  

    return <div className='main clearfix'><img src={img} alt=""/><div className='form clearfix'><Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true,message: '请输入您的用户名!' },{max:10,min:5,message: '用户名不正确!'}]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入您的密码!' },{max:10,min:5,message: '密码不正确!'}]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form></div>
    </div> 
  }
  export default Login;