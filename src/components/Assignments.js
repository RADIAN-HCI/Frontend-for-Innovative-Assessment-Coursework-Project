/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
import AssignmentFlatList from "./AssignmentFlatList";
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
    <div style={{ backgroundColor: "red", width: "100%", height: 100 }}>
      <span>
        Welcome <b>{username}</b>, here is your:
      </span>
      {/* {data.map((item, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "35%",
            marginLeft: "5%",
            marginTop: 5,
            flexGrow: 0,
            backgroundColor: "blue",
          }}
          key={index}
        >
          <span>{item?.title}</span>
        </div>
      ))} */}
      <AssignmentFlatList data={data} />
    </div>
  );
};

export default Assignments;
