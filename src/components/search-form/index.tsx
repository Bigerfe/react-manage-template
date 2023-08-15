import React from 'react';
import {
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
  ProFormSelect
} from '@ant-design/pro-components';
import waitTime from '../../utils/wait';
const SearchForm =  () => {
  return (
    <QueryFilter defaultCollapsed split onFinish={async (values)=>{
      console.log(values);
    }}>
      <ProFormText name="name" label="应用名称" />
      <ProFormDatePicker name="createDate" label="创建时间" />
      <ProFormSelect rules={[{ required: true, message: '请选择一个!' }]} name="status" label="状态" 
      request={async ()=>{
        await waitTime(4000);
        return [
          {
            label: '不可用', value:1
          },
          {
            label: '可用', value:2
          }
        ]
      }}
      />
      <ProFormDatePicker name="replyDate" label="响应日期" />
      <ProFormDatePicker name="startDate" label="创建时间" />
      <ProFormDatePicker name="endDate" label="结束时间" />
    </QueryFilter>
  );
};


export default SearchForm;
