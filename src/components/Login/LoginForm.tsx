import loginIcon from "../../images/Vector.png";
import { Form, Input, Button, Image, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

const LoginForm = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(true);
  const navigate = useNavigate();

  const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

  const login = async () => {
    if (username === "" || password === "") {
      setAuthorized(false);
      return;
    }
    try {
      const response = await axios.post(
        "http://82.115.20.169:80/auth/jwt/create/",
        { username, password }
      );
      localStorage.setItem("username", username);
      const { access, refresh } = response.data;
      localStorage.setItem("token", access);
      localStorage.setItem("refreshToken", refresh);
      setAuthorized(true);
      messageApi.open({ type: "success", content: "Successfully Logged In!" });
      await sleep(1500);
      navigate("/assignments", { state: { username } });
    } catch (error) {
      messageApi.open({ type: "error", content: "Wrong Credentials!" });
    }
  };
  return (
    <>
      {contextHolder}

      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        className="w-2/5"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "15%",
          marginTop: "10%",
        }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
          className="w-4/5 align-middle"
        >
          <Image src={loginIcon} height={30} className="mt-0" preview={false} />
          <br />

          <span className="font-bold text-5xl mb-12 pb-3">Login</span>
        </Form.Item>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
          className="w-4/5"
        >
          <span>Username</span>

          <Input
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            prefix={
              <UserOutlined
                className="site-form-item-icon"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            }
            style={{ backgroundColor: authorized ? "white" : "#E3000025" }}
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
          className="w-4/5"
        >
          <span>Password</span>
          <Input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            prefix={
              <LockOutlined
                className="site-form-item-icon"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            }
            type="password"
            style={{ backgroundColor: authorized ? "white" : "#E3000025" }}
          />
        </Form.Item>
        {authorized ? null : <UnauthorizedMessage />}
        <Button
          onClick={login}
          className="w-4/5 rounded-full bg-blue-600"
          style={{ color: "white" }}
        >
          Login
        </Button>
      </Form>
    </>
  );
};

const UnauthorizedMessage = () => {
  return (
    <div
      className="mb-2 bg-red-100"
      style={{ borderRadius: 5, borderWidth: 1 }}
    >
      <span
        style={{
          color: "red",
          fontSize: 12,
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        Username or Password is Invalid or Wrong
      </span>
    </div>
  );
};

export default LoginForm;
