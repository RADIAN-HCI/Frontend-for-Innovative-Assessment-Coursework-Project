/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../images/Logo.svg";
import "./index.css";
// import { useLocation } from "react-router-dom";
import { Button, Dropdown, Image } from "antd";
import Kites from "../images/Kites.svg";
import GeneralList from "./GeneralList";
import { DownloadOutlined } from "@ant-design/icons";
import GenerateInfoComponent from "./GenerateInfoComponent";
import DifficultyIcon from "../images/DifficultyIcon.svg";
import InnovationIcon from "../images/InnovationIcon.svg";

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
  const items = [
    {
      key: "1",
      label: "1st item",
    },
    {
      key: "2",
      label: "2nd item",
    },
    {
      key: "3",
      label: "3rd item",
    },
  ];

  const onMenuClick = (e) => {
    console.log("click", e);
  };

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
        <span style={{ fontWeight: "bolder", fontSize: 40 }}>Idea 1</span>
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
            {/* <Image src={BookIcon} width={15} /> */}
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
          <Button
            className="rounded-xl bg-blue-600"
            style={{
              color: "#0066CC",
              backgroundColor: "#D6E5F5",
              width: "90%",
              fontWeight: "bolder",
              fontSize: 16,
            }}
          >
            + Add
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
        <Dropdown.Button menu={{ items, onClick: onMenuClick }}>
          ... More
        </Dropdown.Button>
      </div>
    </div>
  );
};

export default Generate;
