import { Input, Modal, Button, Image, Spin } from "antd";
import React, { useState } from "react";
import EnhanceIcon from "../../images/EnhanceIcon.svg";
import TextArea from "antd/es/input/TextArea";
import api from "../api.ts";
import { message } from "antd";

const AddQuestionModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  title,
  text,
}) => {
  const [questionText, setQuestionText] = useState(text);
  const [questionTitle, setQuestionTitle] = useState(title);

  const [messageApi, contextHolder] = message.useMessage();

  const [spinning, setSpinning] = useState<boolean>(false);

  const sendAddQuestionRequest = async () => {
    let dataToBeSent = {
      details_original: questionText,
      lang: "en",
      title: questionTitle,
      assignment: localStorage.getItem("assignment_id"),
      details_modified: "",
    };

    setSpinning(true);
    try {
      const response = await api.post("api/questions/", dataToBeSent);
      if (response.status.toString().startsWith("2")) {
        await handleOk();
        setSpinning(false);
        messageApi.open({
          type: "success",
          content: "Idea Added As a Question!",
        });
      }
    } catch (e) {
      messageApi.open({
        type: "error",
        content: "Something Went Wrong!",
      });
    } finally {
      setSpinning(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Spin spinning={spinning} fullscreen />

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
          <div className="flex flex-row">
            <div className="flex flex-row mb-2">
              <Input
                value={questionTitle}
                onChange={(e) => setQuestionTitle(e.target.value)}
                placeholder="Enter your question title"
              />

              <ButtonForModal
                icon={EnhanceIcon}
                buttonText="Create and Enhance"
                backgroundColor="#DE54FF"
                mainColor="#FFFFFF"
                onClick={() => {
                  sendAddQuestionRequest();
                  setQuestionText("");
                  setQuestionTitle("");
                }}
              />
            </div>
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
    </>
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
        backgroundColor: backgroundColor,
        borderWidth: 1,
        height: "auto",
      }}
      className="ml-1 mr-1 rounded-2xl"
      onClick={onClick}
      type="default"
    >
      <div className="flex flex-row justify-center items-center">
        <Image
          src={icon}
          height={20}
          width={20}
          className="mr-3"
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
