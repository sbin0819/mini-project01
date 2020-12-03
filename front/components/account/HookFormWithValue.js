import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // 공식 문서 : https://react-hook-form.com/kr/api
import { Form, Button } from 'antd';
import Input from '../common/Input';

const ProfileInput = () => {
  const [info, setUserInfo] = useState({
    username: 'kim',
    email: 'kim@gmail.com',
  });
  const { watch, register, handleSubmit, errors } = useForm();

  const onUpdate = data => {
    console.log(data);
  };

  /* style 관련 props */
  //   const styles = { width: '100%' };

  return (
    <>
      <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} onFinish={handleSubmit(onUpdate)}>
        <Input type="username" value={info?.username} watch={watch} register={register} />
        <Input type="email" value={info?.email} watch={watch} register={register} />
        <Form.Item className="change-profile-btn-container">
          <Button type="primary" htmlType="submit">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProfileInput;
