import { Input, Modal, Button, Image } from "antd";
import React, { useState } from "react";
import EnhanceIcon from "../../images/EnhanceIcon.svg";
import TextArea from "antd/es/input/TextArea";
import api from "../api.ts";
import { message } from "antd";
// import DesignUploadComponent from "./DesignUploadComponent.tsx";

const AddQuestionModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const [questionText, setQuestionText] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  // const [fileName, setFileName] = useState(null);

  const sendAddQuestionRequest = async () => {
    let dataToBeSent = {
      details_original: questionText,
      lang: "fa",
      title: questionTitle,
      assignment: localStorage.getItem("assignment_id"),
      author: 1,
      details_modified: "",
    };

    try {
      const response = await api.post("api/questions/", dataToBeSent);
      if (response.status.toString().startsWith("2")) {
        await handleOk();
        messageApi.open({
          type: "success",
          content: "Question Added!",
        });
        // await fetchDesignData();
      }
    } catch (e) {
      console.log(e);

      // messageApi.open({
      //   type: "error",
      //   content: "Something Went Wrong!",
      // });
      // handleOk();
    }
  };

  return (
    <>
      {contextHolder}
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
                // style={{ height: "40%" }}
              />

              <ButtonForModal
                icon={EnhanceIcon}
                buttonText="Create and Enhance"
                backgroundColor="#DE54FF"
                mainColor="#FFFFFF"
                onClick={() => {
                  sendAddQuestionRequest();
                  // setTimeout(fetchDesignData, 1000);
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
        // height: "40%",
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
