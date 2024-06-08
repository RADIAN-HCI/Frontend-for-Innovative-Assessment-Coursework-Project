import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const NavigatorComponent = ({ firstText, secondText, thirdText }) => {
  const navigate = useNavigate();

  const navigationFunction = (text) => {
    const username = localStorage.getItem("username");
    if (text === "Assignments") {
      navigate("../assignments", { state: { username } });
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
        style={{ color: "#676767", fontSize: 18, cursor: "pointer" }}
        onClick={() => navigationFunction(firstText)}
      >
        {firstText}
      </span>

      <RightOutlined />

      <span
        style={{ color: "#676767", fontSize: 18, cursor: "pointer" }}
        onClick={() => navigationFunction(secondText)}
      >
        {secondText}
      </span>

      {thirdText ? (
        <>
          <RightOutlined />
          <span
            style={{ color: "#676767", fontSize: 18, cursor: "pointer" }}
            onClick={() => navigationFunction(thirdText)}
          ></span>
        </>
      ) : null}
    </div>
  );
};

export default NavigatorComponent;
