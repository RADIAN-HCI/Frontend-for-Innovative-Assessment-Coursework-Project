import React, { useState } from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
// import { useLocation } from "react-router-dom";
import { Image } from "antd";
import DesignCloudIcon from "../../images/DesignCloudIcon.svg";
import GeneralList from "../GeneralList";
import DesignRenderItem from "./DesignRenderItem";

const Design = () => {
  // const { state } = useLocation();
  // const { username } = state;
  const [selected, setSelected] = useState(-1);

  const data = [
    { title: "Idea 1" },
    { title: "Idea 2" },
    { title: "Idea 3" },
    { title: "Idea 4" },
    { title: "Idea 5" },
    { title: "Idea 6" },
  ];

  const RenderItem = (item, idx) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const infoStyle = {
      marginRight: 8,
      marginLeft: 8,
      height: 40,
    };
    return (
      <DesignRenderItem
        // infoStyle={infoStyle}
        isEditMode={isEditMode}
        selected={selected}
        setSelected={setSelected}
        setIsEditMode={setIsEditMode}
        item={item}
        idx={idx}
      />
    );
  };

  return (
    <>
      <img
        src={DesignCloudIcon}
        style={{
          position: "absolute",
          right: 0,
          top: 250,
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
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontWeight: "bolder",
              fontSize: 64,
              marginRight: 8,
            }}
          >
            Design
          </span>
        </div>
        <div
          style={{
            marginLeft: "10%",
            marginTop: "3%",
            marginRight: "10%",
          }}
        >
          <GeneralList data={data} RenderItem={RenderItem} numOfColumn={1} />
        </div>
      </div>
      <img
        src={DesignCloudIcon}
        style={{
          position: "absolute",
          left: -200,
          top: 250,
          width: "30%",
          height: "30%",
          color: "red",
          zIndex: -1,
          rotate: "revert",
        }}
        alt="salam"
      />
    </>
  );
};

export default Design;
