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
        borderRadius: 8,
        borderColor: color,
        borderWidth: 1,
        marginTop: 4,
        marginBottom: 4,
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
            marginLeft: 4,
            fontSize: 20,
            color: color,
            fontWeight: "bold",
          }}
        >
          {subtitle}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
        <Rate disabled defaultValue={score} style={{ fontSize: 16 }} />
      </div>
    </div>
  );
};

export default IdeasInfoComponent;
