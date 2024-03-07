import React from "react";
import { RightOutlined } from "@ant-design/icons";

const NavigatorComponent = ({ firstText, secondText, thirdText }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "10%",
        marginTop: "2%",
        marginRight: "10%",
      }}
    >
      <span style={{ color: "#676767", fontSize: 18 }}>{firstText}</span>

      <RightOutlined />

      <span style={{ color: "#676767", fontSize: 18 }}>{secondText}</span>

      <RightOutlined />

      <span style={{ color: "#676767", fontSize: 18 }}>{thirdText}</span>
    </div>
  );
};

export default NavigatorComponent;
