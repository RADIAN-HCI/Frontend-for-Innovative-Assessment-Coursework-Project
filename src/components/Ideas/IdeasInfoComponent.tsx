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
      <div style={{ display: "flex", flexDirection: "row" }}>
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
      <span style={{ fontSize: 24, color: color, fontWeight: "bold" }}>
        <Rate disabled defaultValue={score} />
      </span>
    </div>
  );
};

export default IdeasInfoComponent;
