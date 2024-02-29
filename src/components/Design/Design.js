/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
// import { useLocation } from "react-router-dom";
import { Button, Image } from "antd";
import DesignCloudIcon from "../../images/DesignCloudIcon.svg";
import GeneralList from "../GeneralList";
import { EditOutlined, UploadOutlined } from "@ant-design/icons";
import DesignInfoComponent from "./DesignInfoComponent";
import DifficultyIcon from "../../images/DifficultyIcon.svg";
import InnovationIcon from "../../images/InnovationIcon.svg";

const Design = () => {
  // const { state } = useLocation();
  // const { username } = state;

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

  return (
    <>
      <img
        src={DesignCloudIcon}
        style={{
          position: "absolute",
          right: -150,
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
          <DesignInfoComponent
            color="#00e15A"
            title="Very High"
            imgSrc={InnovationIcon}
          />

          <DesignInfoComponent
            color="#EA0054"
            title="Hard"
            imgSrc={DifficultyIcon}
          />
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
          top: 50,
          width: "30%",
          height: "30%",
          color: "red",
          zIndex: 0,
          rotate: "revert",
        }}
        alt="salam"
      />
    </>
  );
};

const RenderItem = (item, idx) => {
  return (
    <div
      key={idx}
      style={{
        backgroundColor: "#F5F5F5",
        width: "90%",
        height: "90%",
        padding: "1%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      className="rounded-l"
      // onClick={() => {
      //   setSelected(idx);
      // }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "2%",
          marginRight: "2%",
          marginBottom: "5%",
          width: "90%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ fontWeight: "bolder", fontSize: 40 }}>Idea 1</span>
        </div>
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
              width: "80%",
            }}
          >
            <span>
              English idea comes from one of Seneca’s Epistles (58), written
              about a.d. 64 during his retirement from Emperor Nero’s court, in
              which the Roman philosopher uses idea in the sense of “Platonic
              idea, eternal archetype.” Seneca wrote idea in Latin letters;
              English idea comes from one of Seneca’s Epistles (58), written
              about a.d. 64 during his retirement from Emperor Nero’s court, in
              which the Roman philosopher uses idea in the sense of “Platonic
              idea, eternal archetype.” Seneca wrote idea in Latin letters;
              English idea comes from one of Seneca’s Epistles (58), written
              about a.d. 64 during his retirement from Emperor Nero’s court, in
              which the Roman philosopher uses idea in the sense of “Platonic
              idea, eternal archetype.” Seneca wrote idea in Latin letters;
              English idea comes from one of Seneca’s Epistles (58), written
              about a.d. 64 during his retirement from Emperor Nero’s court, in
              which the Roman philosopher uses idea in the sense of “Platonic
              idea, eternal archetype.” Seneca wrote idea in Latin
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          justifyContent: "space-around",
          columnGap: 2,
          rowGap: 2,
        }}
      >
        <Button
          type="dashed"
          icon={<UploadOutlined />}
          style={{ height: "20%" }}
        >
          Upload
          <br />
          Attachment
          <br />
          Drag and drop or
          <br />
          click to choose
        </Button>

        <Button
          style={{ backgroundColor: "#F4C6FF", color: "#DE54FF" }}
          icon={<EditOutlined />}
        >
          Edit
        </Button>

        <Button style={{ backgroundColor: "#DE54FF", color: "white" }}>
          Enhance
        </Button>
      </div>
    </div>
  );
};

export default Design;
