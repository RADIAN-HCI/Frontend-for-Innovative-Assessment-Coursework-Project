/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
// import { useLocation } from "react-router-dom";
import { Image } from "antd";
import CubeIcon from "../../images/CubeIcon.svg";
import GeneralList from "../GeneralList";
import GenerateSideIcon from "../../images/GenerateSideIcon.svg";
import GenerateRenderItem from "./GenerateRenderItem";

const Generate = () => {
  // const { state } = useLocation();
  // const { username } = state;

  const [selected, setSelected] = useState(-1);
  const data = [
    { title: "salam1", selected: true },
    { title: "salam2", selected: false },
    { title: "salam3", selected: false },
    { title: "salam4", selected: false },
    { title: "salam5", selected: false },
    { title: "salam5", selected: false },
    { title: "salam5", selected: false },
    { title: "salam5", selected: false },
  ];

  const RenderItem = (item, idx) => {
    const [add, setAdd] = useState(true);

    return (
      <GenerateRenderItem
        item={item}
        idx={idx}
        add={add}
        setAdd={setAdd}
        selected={selected}
        setSelected={setSelected}
      />
    );
  };

  return (
    <>
      <img
        src={CubeIcon}
        style={{
          position: "absolute",
          right: 0,
          top: 50,
          width: "30%",
          height: "30%",
          color: "red",
          zIndex: 0,
        }}
        alt="salam"
      />
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
            Generate
          </span>
          <Image
            src={GenerateSideIcon}
            preview={false}
            style={{ marginLeft: "5%", marginTop: "5%" }}
          />
        </div>
        <div
          style={{
            marginLeft: "10%",
            marginTop: "3%",
            marginRight: "10%",
          }}
        >
          <GeneralList data={data} RenderItem={RenderItem} numOfColumn={2} />
        </div>
      </div>
    </>
  );
};

export default Generate;
