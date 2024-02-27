/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../images/Logo.svg";
import "./index.css";
// import { useLocation } from "react-router-dom";
import { Button, Image } from "antd";
import CubeIcon from "../images/CubeIcon.svg";
import GeneralList from "./GeneralList";
import {
  DownloadOutlined,
  DeleteFilled,
  CheckOutlined,
} from "@ant-design/icons";
import GenerateInfoComponent from "./GenerateInfoComponent";
import DifficultyIcon from "../images/DifficultyIcon.svg";
import InnovationIcon from "../images/InnovationIcon.svg";
import GenerateSideIcon from "../images/GenerateSideIcon.svg";

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
          <GeneralList data={data} RenderItem={RenderItem} />
        </div>
      </div>
    </>
  );
};

const RenderItem = (item, idx) => {
  const [add, setAdd] = useState(true);
  // const [selected, setSelected] = useState(false);
  // const items = [
  //   {
  //     key: "1",
  //     label: "1st item",
  //   },
  //   {
  //     key: "2",
  //     label: "2nd item",
  //   },
  //   {
  //     key: "3",
  //     label: "3rd item",
  //   },
  // ];

  // const onMenuClick = (e) => {
  //   console.log("click", e);
  // };

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
        borderColor: item.selected ? "#0066CC" : null,
        borderWidth: item.selected ? 3 : null,
        borderRadius: item.selected ? 10 : null,
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
          {item.selected === true ? <SelectedComponent /> : null}
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
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 8,
          }}
        >
          {add ? (
            <Button
              className="rounded-xl"
              style={{
                color: "#0066CC",
                backgroundColor: "#D6E5F5",
                width: "90%",
                fontWeight: "bolder",
                fontSize: 16,
              }}
              onClick={() => {
                setAdd(false);
              }}
            >
              + Add
            </Button>
          ) : (
            <Button
              className="rounded-xl"
              style={{
                color: "#E72424",
                backgroundColor: "#FFF2F4",
                width: "90%",
                fontWeight: "bolder",
                fontSize: 16,
              }}
              onClick={() => {
                setAdd(true);
              }}
              icon={<DeleteFilled />}
            >
              Remove
            </Button>
          )}

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
        <Button type="dashed" icon={<DownloadOutlined />}>
          Attachments
        </Button>

        <GenerateInfoComponent
          color="#00e15A"
          title="High"
          subtitle="Innovation"
          imgSrc={InnovationIcon}
        />

        <GenerateInfoComponent
          color="#EA0054"
          title="Easy"
          subtitle="Difficulty"
          imgSrc={DifficultyIcon}
        />
        {/* <Dropdown.Button
          menu={{ items, onClick: onMenuClick }}
          style={{ width: "100%", back }}
        >
          ... More
        </Dropdown.Button> */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 8,
            borderColor: "#F2F2F2",
            backgroundColor: "#676767",
            borderWidth: 1,
          }}
        >
          <span style={{ fontSize: 24, fontWeight: "bold", color: "#Dadada" }}>
            ... More
          </span>
        </div>
      </div>
    </div>
  );
};

const SelectedComponent = () => {
  return (
    <div
      style={{
        borderColor: "#0066CC",
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        borderRadius: 5,
        height: "40%",
        padding: 4,
        marginTop: 18,
        alignItems: "center",
        marginLeft: 4,
      }}
    >
      <CheckOutlined style={{ color: "#0066CC" }} />
      <span style={{ color: "#0066CC" }}>Selected</span>
    </div>
  );
};
export default Generate;
