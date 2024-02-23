/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../images/Logo.svg";
import "./index.css";
// import { useLocation } from "react-router-dom";
import { Button, Image } from "antd";
import Kites from "../images/Kites.svg";
import GeneralList from "./GeneralList";
const Generate = () => {
  // const { state } = useLocation();
  // const { username } = state;
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
        Welcome <b>Madar</b>, here is your:
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
        <GeneralList data={data} RenderItem={RenderItem} />
      </div>
    </div>
  );
};

const RenderItem = (person, idx) => {
  return (
    <div
      key={idx}
      style={{
        backgroundColor: "#F5F5F5",
        width: "90%",
        height: "90%",
        padding: "1%",
      }}
      className="rounded-l"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "2%",
          marginRight: "2%",
          marginBottom: "5%",
        }}
      >
        <span style={{ fontWeight: "bolder", fontSize: 40 }}>FOP Project</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
            }}
          >
            {/* <Image src={BookIcon} width={15} /> */}
            <span>Course</span>
            <span>Fundamentals of Programming</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
            }}
          >
            {/* <Image src={ProfileIcon} width={15} /> */}
            <span>Owner</span>
            <span>Prof. Mohammad Amin Fazli</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
            }}
          >
            {/* <Image src={CalendarIcon} width={15} /> */}
            <span>Deadline</span>
            <span>26 Jan 23:59</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            className="rounded-xl bg-blue-600"
            style={{
              color: "#0066CC",
              backgroundColor: "#D6E5F5",
              width: "30%",
              fontWeight: "bolder",
              fontSize: 16,
            }}
          >
            Brain Storm
          </Button>
          {/* <Button
            className="w-1/3 rounded-xl"
            style={{
              backgroundColor: "#DDCDFF",
              color: "#7330FF",
              width: "30%",
              fontWeight: "bolder",
              fontSize: 16,
            }}
          >
            Design
          </Button>
          <Button
            className="w-1/3 rounded-xl bg-blue-600"
            style={{
              color: "#D32EFF",
              backgroundColor: "#F4C6FF",
              width: "30%",
              fontWeight: "bolder",
              fontSize: 16,
            }}
          >
            Generate
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Generate;
