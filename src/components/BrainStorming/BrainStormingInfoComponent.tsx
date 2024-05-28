import React from "react";
import { Image } from "antd";
import { Rate } from "antd";

const BrainStormingInfoComponent = (props) => {
  const { score, color, imgSrc, subtitle } = props;
  return (
    <div
      style={{ borderColor: color }}
      className="border-1 rounded-lg items-center flex flex-col"
    >
      <div className="flex flex-row">
        <Image
          preview={false}
          src={imgSrc}
          style={{ marginTop: 6, height: 22 }}
        />
        <span
          style={{
            marginLeft: 4,
            fontSize: 24,
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

export default BrainStormingInfoComponent;
