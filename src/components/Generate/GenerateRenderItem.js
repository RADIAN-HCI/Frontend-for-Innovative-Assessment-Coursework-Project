import React from "react";
import "../index.css";
// import { useLocation } from "react-router-dom";
import { Button } from "antd";
import {
  DownloadOutlined,
  DeleteFilled,
  CheckOutlined,
} from "@ant-design/icons";
import GenerateInfoComponent from "./GenerateInfoComponent";
import DifficultyIcon from "../../images/DifficultyIcon.svg";
import InnovationIcon from "../../images/InnovationIcon.svg";

const GenerateRenderItem = ({
  item,
  idx,
  add,
  setAdd,
  selected,
  setSelected,
}) => {
  console.log(item);
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
        borderColor: selected === idx ? "#0066CC" : "#F5F5F5",
        borderWidth: 3,
        borderRadius: 10,
      }}
      onClick={() => {
        setSelected(idx);
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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ fontWeight: "bolder", fontSize: 40 }}>Idea 1</span>
          {selected === idx ? <SelectedComponent /> : null}
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
            paddingBottom: 10,
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
                marginTop: 28,
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
                marginTop: 28,
              }}
              onClick={() => {
                setAdd(true);
              }}
              icon={<DeleteFilled />}
            >
              Remove
            </Button>
          )}
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

export default GenerateRenderItem;