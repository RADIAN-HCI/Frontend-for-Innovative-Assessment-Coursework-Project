import { Button, Image } from "antd";
import React from "react";
import "./ButtonStyle.css";

const IconButton = ({
  icon,
  buttonText,
  mainColor,
  backgroundColor,
  onClick,
}) => {
  return (
    <Button
      style={{
        color: mainColor,
        backgroundColor: backgroundColor,
      }}
      className="flex mr-2 border-2 rounded-2xl h-auto"
      onClick={onClick}
      type="default"
    >
      <div className="flex justify-center align-middle flex-row items-center">
        <Image
          src={icon}
          height={20}
          width={20}
          className="mr-3"
          preview={false}
        />
        <span
          style={{
            color: mainColor,
          }}
          className="BtnStyle"
        >
          {buttonText}
        </span>
      </div>
    </Button>
  );
};

export default IconButton;
