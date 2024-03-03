import React from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
// import { useLocation } from "react-router-dom";
import { Button, Image } from "antd";
import DesignCloudIcon from "../../images/DesignCloudIcon.svg";
import GeneralList from "../GeneralList";
import { EditOutlined } from "@ant-design/icons";
import DesignInfoComponent from "./DesignInfoComponent";
import DifficultyIcon from "../../images/HardIconForDesignPage.svg";
import InnovationIcon from "../../images/InnovationIcon.svg";
import DesignUploadComponent from "./DesignUploadComponent";

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

const RenderItem = (item, idx) => {
  const infoStyle = {
    marginRight: 8,
    marginLeft: 8,
    height: 40,
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: "bolder", fontSize: 40 }}>Idea 1</span>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <DesignInfoComponent
              color="#00e15A"
              title="Very High"
              imgSrc={InnovationIcon}
              infoStyle={infoStyle}
            />

            <DesignInfoComponent
              color="#EA0054"
              title="Hard"
              imgSrc={DifficultyIcon}
              infoStyle={infoStyle}
            />
          </div>
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
              width: "95%",
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
          width: "20%",
          justifyContent: "space-around",
          // alignItems: "center",
          columnGap: 2,
          rowGap: 2,
        }}
      >
        <DesignUploadComponent />

        <Button
          style={{
            backgroundColor: "#F4C6FF",
            color: "#DE54FF",
            height: "15%",
          }}
          icon={<EditOutlined width={120} height={120} />}
        >
          <span
            style={{ fontWeight: "bolder", color: "#D32EFF", fontSize: 24 }}
          >
            Edit
          </span>
        </Button>

        <Button
          style={{ backgroundColor: "#DE54FF", color: "white", height: "15%" }}
        >
          <span style={{ fontWeight: "bolder", fontSize: 24 }}>Enhance</span>
        </Button>
      </div>
    </div>
  );
};

export default Design;
