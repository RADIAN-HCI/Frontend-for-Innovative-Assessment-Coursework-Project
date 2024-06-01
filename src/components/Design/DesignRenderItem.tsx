import React, { useState } from "react";
import "../index.css";
import { Image, message } from "antd";
import EditIcon from "../../images/EditIcon.svg";
import TextArea from "antd/es/input/TextArea";

import "../index.css";
import { CheckOutlined } from "@ant-design/icons";
import NoAttachmentComponent from "../NoAttachmentComponent.tsx";
import EyeIcon from "../../images/EyeIcon.svg";
import CheckIcon from "../../images/CheckIcon.svg";

import IconButton from "../IconButton.tsx";
import DesignUploadComponent from "./DesignUploadComponent.tsx";
import ViewAttachments from "../ViewAttachments.tsx";
import api from "../api.ts";

const DesignRenderItem = ({ item, idx, onClickEdit }) => {
  const [isSelected, setIsSelected] = useState(item.is_selected_for_assignment);
  const [ideaText, setIdeaText] = useState(
    item.details_modified !== "" ? item.details_modified : item.details_original
  );
  const [isEditMode, setIsEditMode] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [fileName, setFileName] = useState("");

  const editQuestion = async () => {
    try {
      await api.patch(`api/questions/${item.id}/`, {
        is_selected_for_assignment: !item.is_selected_for_assignment,
      });
    } catch (e) {
      messageApi.open({
        type: "error",
        content: "Something Went Wrong!",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <div
        key={idx}
        style={{
          backgroundColor: "#F5F5F5",
          width: "95%",
          height: "90%",
          borderColor: isSelected ? "#0066CC" : "#F5F5F5",
          borderWidth: 3,
        }}
        onClick={() => {
          setIsSelected(!isSelected);
          editQuestion();
        }}
        className="rounded-l justify-between flex flex-row rounded-lg overflow-hidden p-3"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "2%",
            marginRight: "2%",
            marginBottom: "5%",
            width: "95%",
          }}
        >
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <span style={{ fontWeight: "bolder", fontSize: 40 }}>
                {item.title}
              </span>
              {isSelected ? <SelectedComponent /> : null}
            </div>

            <div className="flex flex-row justify-end">
              <div className="flex flex-row items-center justify-between">
                {isEditMode ? (
                  <IconButton
                    icon={CheckIcon}
                    buttonText="Done"
                    backgroundColor="#F4C6FF"
                    mainColor="#D32EFF"
                    onClick={() => {
                      setIsEditMode(false);
                      onClickEdit({ ideaText, fileName });
                    }}
                  />
                ) : (
                  <IconButton
                    icon={EditIcon}
                    buttonText="Edit and Enhance"
                    backgroundColor="#F4C6FF"
                    mainColor="#D32EFF"
                    onClick={() => {
                      setIsEditMode(true);
                    }}
                  />
                )}
              </div>

              {isEditMode ? (
                item.attachment ? (
                  <ViewAttachments
                    id={idx}
                    attachment={item.attachment}
                    editFunction={onClickEdit}
                  />
                ) : (
                  <DesignUploadComponent setFileName={setFileName} />
                )
              ) : item.attachment ? (
                <ViewAttachments
                  id={idx}
                  attachment={item.attachment}
                  editFunction={onClickEdit}
                />
              ) : (
                <NoAttachmentComponent />
              )}
            </div>
          </div>

          {isEditMode ? (
            <div className="flex flex-row items-center">
              <Image src={EditIcon} preview={false} />
              <span style={{ color: "#D32EFF", fontSize: 16, marginLeft: 4 }}>
                Editing Mode
              </span>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <Image src={EyeIcon} preview={false} />
              <span style={{ color: "#D32EFF", fontSize: 16, marginLeft: 4 }}>
                Reading Mode
              </span>
            </div>
          )}

          {isEditMode ? (
            <TextEditor ideaText={ideaText} setIdeaText={setIdeaText} />
          ) : (
            <TextDisplay text={ideaText} />
          )}
          <div className="flex flex-row justify-between pb-2"></div>
        </div>
      </div>
    </>
  );
};

const TextDisplay = ({ text }) => {
  return (
    <div className="flex flex-row justify-between">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "95%",
          height: "100%",
        }}
      >
        <TextArea value={text} disabled autoSize style={{ color: "black" }} />
      </div>
    </div>
  );
};

const TextEditor = ({ ideaText, setIdeaText }) => {
  return (
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
          height: "100%",
        }}
      >
        <TextArea
          value={ideaText}
          onChange={(e) => setIdeaText(e.target.value)}
          placeholder="Controlled autosize"
          autoSize
        />
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
        height: "40%",
      }}
      className="flex flex-row p-1 items-center ml-1 rounded-md"
    >
      <CheckOutlined
        style={{ color: "#0066CC" }}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <span style={{ color: "#0066CC" }}>Selected</span>
    </div>
  );
};

export default DesignRenderItem;
