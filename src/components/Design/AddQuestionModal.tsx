import { Input, Modal, Button, Image } from "antd";
import React, { useState } from "react";
import GenerateUploadComponent from "../Generate/GenerateUploadComponent.tsx";
import EnhanceIcon from "../../images/EnhanceIcon.svg";
import TextArea from "antd/es/input/TextArea";
import api from "../api.ts";

const AddQuestionModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  const [questionText, setQuestionText] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");

  const sendAddQuestionRequest = async () => {
    const data = {
      details_original: questionText,
      lang: "fa",
      title: questionTitle,
      assignment: localStorage.getItem("assignment_id"),
      author: 1,
      details_modified: "",
    };

    try {
      const response = await api.post("api/questions/", data);
      console.log(response.data);
      handleOk();
      // refetchFunction();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Modal
        title="+ Add a Question"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="50%"
        okType="default"
        footer={null}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "500%",
            }}
          >
            <Input
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
              placeholder="Enter your question title"
              style={{ height: "40%" }}
            />

            <ButtonForModal
              // icon={PlusIcon}
              icon={EnhanceIcon}
              buttonText="Create and Enhance"
              // backgroundColor="#D6E5F5"
              backgroundColor="#DE54FF"
              // mainColor="#0066CC"
              mainColor="#FFFFFF"
              // onClick={sendAddQuestionRequest}
              onClick={sendAddQuestionRequest}
            />
          </div>
          <GenerateUploadComponent />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "82%",
          }}
        >
          <TextArea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter your question"
            autoSize={{
              minRows: 3,
              maxRows: 7,
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

const ButtonForModal = ({
  icon,
  buttonText,
  mainColor,
  backgroundColor,
  onClick,
}) => {
  return (
    <Button
      style={{
        color: mainColor,
        height: "40%",
        backgroundColor: backgroundColor,
        borderWidth: 1,
        borderRadius: 15,
        marginRight: 4,
        marginLeft: 4,
      }}
      onClick={onClick}
      type="default"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={icon}
          height={20}
          width={20}
          style={{ marginRight: 12 }}
          preview={false}
        />
        <span
          style={{
            fontWeight: "bolder",
            color: mainColor,
            fontSize: 20,
          }}
        >
          {buttonText}
        </span>
      </div>
    </Button>
  );
};
export default AddQuestionModal;
