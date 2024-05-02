/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
// import "./index.css";
import { Image } from "antd";
import Quote from "../../images/Quote.svg";
import leftBubble from "../../images/LeftBubble.svg";
import LoginForm from "./LoginForm.tsx";

const AccountForm = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      {width >= 670 ? (
        <Image src={leftBubble} width={80} className="mt-48" preview={false} />
      ) : null}

      <LoginForm />

      {width >= 670 ? (
        <Image
          src={Quote}
          preview={false}
          // width={"50%"}
          className="mt-32 ml-24"
        />
      ) : null}
    </div>
  );
};

export default AccountForm;
