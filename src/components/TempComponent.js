/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";

import { Typography } from "antd";
import { useLocation } from "react-router-dom";

const TempComponent = () => {
  const { Text } = Typography;
  const { state } = useLocation();
  const { username, password } = state;

  return (
    <div style={{ backgroundColor: "red", width: 100, height: 100 }}>
      <Text mark>{username}</Text>
      <Text mark>{password}</Text>
    </div>
  );
};

export default TempComponent;
