import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';


export interface formConfigItem{
  label:string,
  name:string,
  type: Function,
  props: any
}

interface IProps{
  formConfig: Array<formConfigItem>
}

const onFinish= (values:any)=>{
  console.log('values', values);
}
const onFinishFail = (errorInfo: any)=>{
  console.log('fail info,', errorInfo);
}



const ComForm = function(props: IProps) {
  const {formConfig} = props;
  return (
    <Form labelCol={{span:4}}      style={{ maxWidth: 600 }}
    initialValues={{ remember: true }} 
    autoComplete="off"
    wrapperCol={{span:16}} name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFail}
    >
      {/* <Form.Item label="用户名:" name="username" rules={[{required:true,message:'不能为空.'}]}>
      <Input/>
      </Form.Item>
      <Form.Item label="密码:" name="pwd" rules={[{required:true, message:'请输入密码.'}]}>
        <Input.Password/>
      </Form.Item>
      <Form.Item name="remember" valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>记住我</Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{offset:8, span:16}}>
      <Button type="primary" htmlType='submit'>提 交</Button>
      </Form.Item> */}

      {
        formConfig.map(item=>{
          const Com = item.type;
          return  <Form.Item label={item.label} name={item.name} rules={[{required:true, message:'请输入.'}]}>
                  <Com {...item.props}/>
          </Form.Item>
        })
      }
      <Form.Item wrapperCol={{offset:8, span:16}}>
      <Button type="primary" htmlType='submit'>提 交</Button>
      </Form.Item>

    </Form>
  );
}

export default ComForm;
