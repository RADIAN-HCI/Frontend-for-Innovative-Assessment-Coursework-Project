import React from "react";
import { Image } from "antd";
import { Rate } from "antd";

const IdeasInfoComponent = (props) => {
  const { score, color, imgSrc, subtitle } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 10,
        borderColor: color,
        borderWidth: 2,
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        padding: 8,
        marginTop: 6,
        marginBottom: 6,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 2,
          width: "auto",
        }}
      >
        <Image
          preview={false}
          src={imgSrc}
          style={{ marginTop: 4, height: 22 }}
        />
        <span
          style={{
            marginLeft: 6,
            fontSize: 16,
            color: color,
            fontWeight: "bold",
          }}
        >
          {subtitle}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Rate disabled value={score} style={{ color: color }} />
      </div>
    </div>
  );
};

export default IdeasInfoComponent;
