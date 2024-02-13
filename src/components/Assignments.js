/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../images/Logo.svg";
import "./index.css";
import { useLocation } from "react-router-dom";
import AssignmentFlatList from "./AssignmentFlatList";
import { Image } from "antd";
const Assignments = () => {
  const { state } = useLocation();
  const { username } = state;
  const data = [
    { title: "salam1" },
    { title: "salam2" },
    { title: "salam3" },
    { title: "salam4" },
    { title: "salam5" },
  ];

  return (
    <div style={{ width: "100%" }}>
      <Image
        src={Logo}
        preview={false}
        style={{ marginLeft: "10%", marginTop: "5%", marginRight: "10%" }}
      />
      <span style={{ marginLeft: "10%", marginTop: "12%", marginRight: "10%" }}>
        Welcome <b>{username}</b>, here is your:
      </span>
      <div style={{ marginLeft: "10%", marginTop: "12%", marginRight: "10%" }}>
        <AssignmentFlatList data={data} />
      </div>
    </div>
  );
};

export default Assignments;
