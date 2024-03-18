import React, { useState } from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
import { Button, Image, Input } from "antd";
import DesignCloudIcon from "../../images/DesignCloudIcon.svg";
import GeneralList from "../GeneralList";
import AddQuestionModal from "./AddQuestionModal";
import DesignEmptyVector from "../../images/DesignEmptyVector.svg";
import NavigatorComponent from "../NavigatorComponent";
import BrainStormingRenderItem from "./BrainStormingRenderItem";
import { SendOutlined } from "@ant-design/icons";

import BrainstormVector from "../../images/BrainstormVector.svg";

const BrainStorming = () => {
  const [selected, setSelected] = useState([]);

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

    // const infoStyle = {
    //   marginRight: 8,
    //   marginLeft: 8,
    //   height: 40,
    // };
    return (
      <BrainStormingRenderItem
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [text, setText] = useState("");

  return (
    <>
      <img
        src={DesignCloudIcon}
        style={{
          position: "absolute",
          right: -100,
          top: 400,
          width: "30%",
          height: "30%",
          color: "red",
          zIndex: 0,
        }}
        alt="cloud icon"
      />

      <img
        src={BrainstormVector}
        style={{
          position: "absolute",
          right: -100,
          top: 100,
          width: "30%",
          height: "30%",
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
            Brain Storming
          </span>
        </div>
        {data && data.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* <div
              style={{
                backgroundColor: "red",
                marginLeft: "15%",
                marginRight: "2%",
                width: "8%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F5F5F5",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>Brainstorm 1</p>
                <EditFilled />
                <DeleteFilled />
              </div>

              <div
                style={{
                  backgroundColor: "#F5F5F5",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>Brainstorm 2</p>
                <EditFilled />
                <DeleteFilled />
              </div>

              <div
                style={{
                  backgroundColor: "#F5F5F5",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>Brainstorm 3</p>
                <EditFilled />
                <DeleteFilled />
              </div>
            </div> */}
            <div
              style={{
                marginTop: "3%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // width: "75%",
                width: "85%",

                marginLeft: "10%",
              }}
            >
              <GeneralList
                data={data}
                RenderItem={RenderItem}
                numOfColumn={2}
              />

              <Input
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
                  />
                }
                style={{
                  width: "80%",
                  position: "sticky",
                  bottom: 15,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              />
            </div>
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
    </>
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
      <AddQuestionModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </div>
  );
};
export default BrainStorming;
