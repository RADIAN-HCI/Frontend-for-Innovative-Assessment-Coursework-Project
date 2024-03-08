import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const NavigatorComponent = ({ firstText, secondText, thirdText }) => {
  const navigate = useNavigate();

  const navigationFunction = (text) => {
    if (text === "Assignments") {
      navigate("../assignments");
    } else if (text === "Generate") {
      navigate("../generate");
    } else if (text === "Design") {
      navigate("../design");
    }
  };
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
      <span
        style={{ color: "#676767", fontSize: 18 }}
        onClick={() => navigationFunction(firstText)}
      >
        {firstText}
      </span>

      <RightOutlined />

      <span
        style={{ color: "#676767", fontSize: 18 }}
        onClick={() => navigationFunction(secondText)}
      >
        {secondText}
      </span>

      <RightOutlined />

      <span
        style={{ color: "#676767", fontSize: 18 }}
        onClick={() => navigationFunction(thirdText)}
      >
        {thirdText}
      </span>
    </div>
  );
};

export default NavigatorComponent;
