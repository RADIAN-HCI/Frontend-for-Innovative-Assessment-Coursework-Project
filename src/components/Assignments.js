/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../images/Logo.svg";
import "./index.css";
import { useLocation } from "react-router-dom";
import AssignmentFlatList from "./AssignmentFlatList";
import { Image } from "antd";
import Kites from "../images/Kites.svg";
const Assignments = () => {
  const { state } = useLocation();
  const { username } = state;
  const data = [
    { title: "salam1" },
    { title: "salam2" },
    { title: "salam3" },
    { title: "salam4" },
    { title: "salam5" },
    { title: "salam5" },
    { title: "salam5" },
    { title: "salam5" },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "4%",
      }}
    >
      <Image
        src={Logo}
        preview={false}
        style={{
          marginLeft: "10%",
          marginTop: "5%",
          marginRight: "10%",
          width: "10%",
          height: "10%",
        }}
      />
      <span
        style={{
          marginLeft: "10%",
          marginTop: "2%",
          marginRight: "10%",
          fontSize: 24,
        }}
      >
        Welcome <b>{username}</b>, here is your:
      </span>
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
          style={{
            fontWeight: "bolder",
            fontSize: 64,
          }}
        >
          Assignments
        </span>
        <Image
          src={Kites}
          preview={false}
          style={{ marginLeft: "5%", marginTop: "2%" }}
        />
      </div>
      <div
        style={{
          marginLeft: "10%",
          marginTop: "3%",
          marginRight: "10%",
        }}
      >
        <AssignmentFlatList data={data} />
      </div>
    </div>
  );
};

export default Assignments;
