import React, { useEffect, useState } from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
import { Image } from "antd";
import DesignCloudIcon from "../../images/DesignCloudIcon.svg";
import GeneralList from "../GeneralList.tsx";
import DesignEmptyVector from "../../images/DesignEmptyVector.svg";
import NavigatorComponent from "../NavigatorComponent.tsx";
import IdeasRenderItem from "./IdeasRenderItem.tsx";
import api from "../api.ts";

import BrainstormVector from "../../images/BrainstormVector.svg";
import { useLocation } from "react-router-dom";

const Ideas = () => {
  const [selected, setSelected] = useState([]);

  const [data, setData] = useState([]);

  const { state } = useLocation();

  const [width, setWidth] = useState(window.innerWidth);

  const { brainstormId } = state;

  useEffect(() => {
    const fetchIdeasData = async () => {
      const response = await api.get(
        `api/ideas/?brainstorm_id=${brainstormId}`
      );
      localStorage.setItem("ideas", JSON.stringify(response.data));
      console.log("Ideas Data: ", response.data);
      setData(response.data);
    };
    fetchIdeasData();
  }, [brainstormId]);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const RenderItem = (item, idx) => {
    return (
      <IdeasRenderItem
        selected={selected}
        setSelected={setSelected}
        item={item}
        idx={idx}
      />
    );
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <img
        src={DesignCloudIcon}
        style={{
          position: "absolute",
          right: 0,
          top: 400,
          color: "red",
          zIndex: 0,
        }}
        alt="cloud icon"
      />

      <img
        src={BrainstormVector}
        style={{
          position: "absolute",
          right: 0,
          top: 100,
          color: "red",
          zIndex: 0,
        }}
        alt="cloud icon"
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
        <NavigatorComponent
          firstText="Assignments"
          secondText="Brain Storming"
          thirdText={undefined}
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
            Ideas
          </span>
        </div>
        {data && data.length > 0 ? (
          <div
            style={{
              marginLeft: "10%",
              marginTop: "3%",
              marginRight: "10%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GeneralList
              data={data}
              RenderItem={RenderItem}
              numOfColumn={data.length < 2 ? 1 : width > 1050 ? 2 : 1}
            />
          </div>
        ) : (
          <EmptyPage />
        )}
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
        alt="cloud icon"
      />
    </div>
  );
};

const EmptyPage = () => {
  return (
    <div className="flex flex-col items-center">
      <img alt="background" src={DesignEmptyVector} />
      <span style={{ color: "#676767" }}>
        <b>No Ideas Yet!</b>
      </span>
    </div>
  );
};
export default Ideas;
