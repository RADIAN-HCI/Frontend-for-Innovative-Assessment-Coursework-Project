import { Button, Image } from "antd";
import React from "react";

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
        height: "5%",
        backgroundColor: backgroundColor,
        borderWidth: 1,
        borderRadius: 15,
        marginRight: 4,
        marginLeft: 4,
      }}
      onClick={onClick}
      type="default"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={icon}
          height={20}
          width={20}
          style={{ marginRight: 12 }}
          preview={false}
        />
        <span
          style={{
            fontWeight: "bolder",
            color: mainColor,
            fontSize: 24,
          }}
        >
          {buttonText}
        </span>
      </div>
    </Button>
  );
};

export default IconButton;
