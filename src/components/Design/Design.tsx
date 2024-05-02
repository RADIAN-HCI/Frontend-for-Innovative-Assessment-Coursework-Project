import React, { useEffect, useState } from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
import { Button, Image } from "antd";
import DesignCloudIcon from "../../images/DesignCloudIcon.svg";
import GeneralList from "../GeneralList.tsx";
import DesignRenderItem from "./DesignRenderItem.tsx";
import AddQuestionModal from "./AddQuestionModal.tsx";
import DesignEmptyVector from "../../images/DesignEmptyVector.svg";
import NavigatorComponent from "../NavigatorComponent.tsx";
import api from "../api.ts";

const Design = () => {
  const [data, setData] = useState([]);

  const fetchIdeasData = async () => {
    const response = await api.get("api/questions/");
    localStorage.setItem("questions", JSON.stringify(response.data));
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchIdeasData();
  }, []);

  const [selected, setSelected] = useState(-1);

  const RenderItem = (item, idx) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const editQuestion = async (ideaText) => {
      const response = await api.patch(`api/questions/${item.id}/`, {
        details_modified: ideaText,
      });
      // localStorage.setItem("questions", JSON.stringify(response.data));
      console.log(response.data);
      // setData(response.data);
    };

    return (
      <DesignRenderItem
        isEditMode={isEditMode}
        selected={selected}
        setSelected={setSelected}
        setIsEditMode={setIsEditMode}
        item={item}
        idx={idx}
        onClickEdit={editQuestion}
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
    <>
      <img
        src={DesignCloudIcon}
        style={{
          position: "absolute",
          right: -100,
          top: 250,
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
        <NavigatorComponent firstText="Assignments" secondText="Design" thirdText={undefined} />

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
        {data && data.length > 0 ? (
          <div
            style={{
              marginLeft: "10%",
              marginTop: "3%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "85%",
            }}
          >
            <GeneralList data={data} RenderItem={RenderItem} numOfColumn={1} />
            <Button
              style={{
                backgroundColor: "#D6E5F5",
                borderColor: "#0066CC",
                borderWidth: 1,
                borderRadius: 10,
                height: 40,
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
            <AddQuestionModal
              isModalOpen={isModalOpen}
              handleCancel={handleCancel}
              handleOk={handleOk}
            />
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

const EmptyPage = ({
  setIsModalOpen,
  isModalOpen,
  handleCancel,
  handleOk,
}) => {
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
export default Design;
