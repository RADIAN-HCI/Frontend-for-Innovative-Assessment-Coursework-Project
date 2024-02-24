import React from "react";
import { Image } from "antd";

const GenerateInfoComponent = ({title, color, subtitle, imgSrc}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 8,
        borderColor: color,
        borderWidth: 1,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image preview={false} src={imgSrc} style={{ marginTop: 6 }} />
        <span style={{ marginLeft: 4, fontSize: 12, color: color }}>
          {subtitle}
        </span>
      </div>
      <span style={{ fontSize: 24, color: color, fontWeight: "bold" }}>
        {title}
      </span>
    </div>
  );
};

export default GenerateInfoComponent;
