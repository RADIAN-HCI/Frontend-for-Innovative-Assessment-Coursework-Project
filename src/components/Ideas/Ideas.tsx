import React, { useEffect, useState } from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
import { Button, Image } from "antd";
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
  const { brainstormId } = state;

  useEffect(() => {
    const fetchIdeasData = async () => {
      const response = await api.get(
        `api/ideas/?brainstorm_id=${brainstormId}`
      );
      localStorage.setItem("ideas", JSON.stringify(response.data));
      console.log(response.data);
      setData(response.data);
    };
    fetchIdeasData();
  }, [brainstormId]);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
              numOfColumn={data.length >= 2 ? 2 : 1}
            />

            {/* <Input
              placeholder="Please Enter your subject to brainstorm"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              suffix={
                <SendOutlined
                  style={{ color: "blue" }}
                  onClick={() => {
                    console.log(text);
                  }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
              }
              style={{
                width: "100%",
                position: "sticky",
                bottom: 15,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                height: 38,
              }}
            /> */}
          </div>
        ) : (
          <EmptyPage
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            handleOk={handleOk}
          />
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

const EmptyPage = ({ setIsModalOpen, isModalOpen, handleCancel, handleOk }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img alt="background" src={DesignEmptyVector} />
      <span style={{ color: "#676767" }}>
        There is no question here but you can
      </span>
      <Button
        style={{
          backgroundColor: "#D6E5F5",
          borderColor: "#0066CC",
          borderWidth: 1,
          borderRadius: 10,
          height: 40,
          marginTop: 8,
          marginBottom: 8,
        }}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <span
          style={{
            fontWeight: "bolder",
            fontSize: 20,
            color: "#0066CC",
            marginBottom: 8,
          }}
        >
          + Add Question
        </span>
      </Button>

      <span style={{ color: "#676767" }}>
        or go to <b>Brain Storm</b> and generate some ideas with AI.
      </span>
    </div>
  );
};
export default Ideas;
