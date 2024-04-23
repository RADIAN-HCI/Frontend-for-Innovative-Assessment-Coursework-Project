/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
import { Button, Image } from "antd";
import CubeIcon from "../../images/CubeIcon.svg";
import GeneralList from "../GeneralList";
import GenerateSideIcon from "../../images/GenerateSideIcon.svg";
import GenerateLeftVector from "../../images/GenerateLeftVector.svg";

import GenerateEmptyVector from "../../images/GenerateEmptyVector.svg";

import GenerateRenderItem from "./GenerateRenderItem";
import NavigatorComponent from "../NavigatorComponent";
import api from "../api";

const Generate = () => {

  const [selected, setSelected] = useState(-1);

  const [generateData, setGenerateData] = useState([
    { title: "Idea 1" },
    { title: "Idea 2" },
    { title: "Idea 3" },
    { title: "Idea 4" },
    { title: "Idea 5" },
    { title: "Idea 6" },
  ]);

  const handleGeneratePDF = async (assignment_id) => {
    try {
      const objectData = new FormData();
      objectData.append("assignment_id", assignment_id);
      const response = await api.post("generate_pdf/", objectData);
      console.log(response.data);
    } catch (e) {
      console.log("Error 500");
    }
  };

  const RenderItem = (item, idx) => {
    const [add, setAdd] = useState(true);

    const [isEditMode, setIsEditMode] = useState(false);

    return (
      <GenerateRenderItem
        item={item}
        idx={idx}
        add={add}
        setAdd={setAdd}
        selected={selected}
        setSelected={setSelected}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        data={generateData}
        setData={setGenerateData}
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
        alt="cube icon"
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
            alignItems: "center",
          }}
        />
        <NavigatorComponent firstText="Assignments" secondText="Generate" />
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
        <img
          src={GenerateLeftVector}
          alt="Generate Left Icon"
          style={{ position: "absolute", left: 0, zIndex: -1 }}
        />
        {generateData && generateData.length > 0 ? (
          <div
            style={{
              marginLeft: "10%",
              marginTop: "3%",
              marginRight: "10%",
              alignItems: "center",
            }}
          >
            <GeneralList
              data={generateData}
              RenderItem={RenderItem}
              numOfColumn={1}
            />
            <Button
              style={{
                backgroundColor: "#98FFC1",
                borderColor: "#00C850",
                borderWidth: 1,
                borderRadius: 10,
                height: 40,
                marginLeft: "40%",
              }}
              onClick={() => {
                handleGeneratePDF(2);
              }}
            >
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: 20,
                  color: "#00C850",
                  marginBottom: 8,
                }}
              >
                Generate PDF
              </span>
            </Button>
          </div>
        ) : (
          <EmptyPage />
        )}
      </div>
    </>
  );
};

const EmptyPage = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img alt="background" src={GenerateEmptyVector} />
      <span style={{ color: "#676767" }}>
        There is no question here. you can either design
      </span>
      <span style={{ color: "#676767" }}>
        your own question in <b>Design/Brain storm</b>
      </span>
      <span style={{ color: "#676767" }}>
        section or Ask you assistants to do it.
      </span>
    </div>
  );
};
export default Generate;
