import React from "react";
import { Image } from "antd";

const DesignInfoComponent = (props) => {
  const { title, color, imgSrc } = props;
  return (
    <div
      style={{
        height: "50%",
        borderRadius: 7,
        borderColor: color,
        borderWidth: 1,
        ...props.infoStyle,
      }}
      className="flex flex-row items-center p-1"
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image preview={false} src={imgSrc} style={{ marginTop: 6 }} />
        {props.subtitle ? (
          <span style={{ marginLeft: 4, fontSize: 12, color: color }}>
            {props.subtitle}
          </span>
        ) : null}
      </div>
      <span
        style={{
          fontSize: 24,
          color: color,
          fontWeight: "bold",
          marginLeft: 4,
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default DesignInfoComponent;
