/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
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
    <div className="flex flex-row w-full">
      <Image src={leftBubble} width={80} className="mt-48" preview={false} />
      <LoginForm />
      {width >= 1030 ? (
        <Image src={Quote} preview={false} className="mt-32" />
      ) : null}
    </div>
  );
};

export default AccountForm;
