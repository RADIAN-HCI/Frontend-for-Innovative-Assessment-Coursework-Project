import loginIcon from "../../images/Vector.png";
import { Form, Input, Button, Radio, Image } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(true);
  const navigate = useNavigate();
  const alert = useAlert();

  const login = () => {
    if (username === "" || password === "") {
      setAuthorized(false);
      alert.error(
        <div style={{ textTransform: "initial" }}>
          Please Provide Username and Password!
        </div>
      );
      return;
    }
    setAuthorized(true);
    localStorage.setItem("username", username);
    navigate("/assignments", { state: { username } });
  };
  const [placement, SetPlacement] = useState("TA");

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
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

      <Form.Item>
        <span className="mt-8">Role</span>
        <br />
        <Radio.Group value={placement} onChange={placementChange}>
          <Radio.Button value="TA">TA</Radio.Button>
          <Radio.Button value="LeadTA">Lead TA</Radio.Button>
          <Radio.Button value="Lecturer">Lecturer</Radio.Button>
        </Radio.Group>
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
          prefix={<UserOutlined className="site-form-item-icon" />}
          style={{ backgroundColor: authorized ? null : "#E3000025" }}
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
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          style={{ backgroundColor: authorized ? null : "#E3000025" }}
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
