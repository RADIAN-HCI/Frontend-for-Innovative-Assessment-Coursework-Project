/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./index.css";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const AccountForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    navigate("/tempcomponent", { state: { username, password } });
  };

  return (
    <div className="container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Button
          style={{
            width: "80%",
            marginLeft: "10%",
          }}
          onClick={login}
        >
          Login
        </Button>

        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item> */}

        {/* <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default AccountForm;
