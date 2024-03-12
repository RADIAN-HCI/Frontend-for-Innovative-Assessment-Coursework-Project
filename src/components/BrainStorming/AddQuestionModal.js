import { Input, Modal, Button, Image } from "antd";
import React, { useState } from "react";
import GenerateUploadComponent from "../Generate/GenerateUploadComponent";
import EnhanceIcon from "../../images/EnhanceIcon.svg";
import PlusIcon from "../../images/PlusIcon.svg";
import TextArea from "antd/es/input/TextArea";

const AddQuestionModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const [questionText, setQuestionText] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");

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
              icon={PlusIcon}
              buttonText="Add"
              backgroundColor="#D6E5F5"
              mainColor="#0066CC"
              // onClick={() => {
              //   setAdd(false);
              // }}
            />
            <ButtonForModal
              icon={EnhanceIcon}
              buttonText="Enhance"
              backgroundColor="#DE54FF"
              mainColor="#FFFFFF"
              // onClick={() => {
              //   setIsEditMode(false);
              // }}
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
