import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormText,
} from "@ant-design/pro-components";
import { Divider, Tabs, theme } from "antd";
//   import type { CSSProperties } from 'react';
import { useState } from "react";
import Login from "./AccountForm";

//   type LoginType = 'phone' | 'account';

// const iconStyles = {
//   color: "rgba(0, 0, 0, 0.2)",
//   fontSize: "18px",
//   verticalAlign: "middle",
//   cursor: "pointer",
// };

const Signup = () => {
  const [loginType, setLoginType] = useState();
  const { token } = theme.useToken();

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <LoginFormPage
        hidden
        // backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        // backgroundImageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title="Login"
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0,0.65)",
          backdropFilter: "blur(4px)",
        }}
        actions={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Login />
            <Divider plain>
              <span
                style={{
                  // color: token.colorTextPlaceholder,
                  color: "white",
                  fontWeight: "normal",
                  fontSize: 14,
                }}
              >
                Don't have an account? Register
              </span>
            </Divider>
          </div>
        }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey)}
        >
          <Tabs.TabPane key={"account"} tab={"Account"} />
        </Tabs>
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: "large",
              prefix: (
                <UserOutlined
                  style={{
                    color: token.colorText,
                  }}
                  className={"prefixIcon"}
                />
              ),
            }}
            placeholder={"Username"}
            rules={[
              {
                required: true,
                message: "Username is required!",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: "large",
              prefix: (
                <LockOutlined
                  style={{
                    color: token.colorText,
                  }}
                  className={"prefixIcon"}
                />
              ),
            }}
            placeholder={"Password"}
            rules={[
              {
                required: true,
                message: "Password is required!",
              },
            ]}
          />
        </>
      </LoginFormPage>
    </div>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <ProConfigProvider dark>
      <Signup />
    </ProConfigProvider>
  );
};
