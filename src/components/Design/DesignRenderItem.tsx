import React, { useState } from "react";
import "../index.css";
import { Image } from "antd";
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

import { Typography } from "antd";

const { Text, Paragraph } = Typography;

const DesignRenderItem = ({
  item,
  idx,
  selected,
  setSelected,
  isEditMode,
  setIsEditMode,
  onClickEdit,
}) => {
  const [ideaText, setIdeaText] = useState(
    item.details_modified !== "" ? item.details_modified : item.details_original
  );

  const [fileName, setFileName] = useState("");
  return (
    <div
      key={idx}
      style={{
        backgroundColor: "#F5F5F5",
        width: "95%",
        height: "90%",
        padding: "1%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: selected === idx ? "#0066CC" : "#F5F5F5",
        borderWidth: 3,
        borderRadius: 10,
        overflow: "hidden",
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
          width: "95%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: "bolder", fontSize: 40 }}>
              {item.title}
            </span>
            {selected === idx ? <SelectedComponent /> : null}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
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

              {/* {isEditMode ? (
              item.attachment ? (
                <ViewAttachments
                  id={idx}
                  attachment={item.attachment}
                  editFunction={onClickEdit}
                />
              ) : (
                <DesignUploadComponent
                  fileName={fileName}
                  setFileName={setFileName}
                />
              )
            ) : item.attachment ? (
              <ViewAttachments
                id={idx}
                attachment={item.attachment}
                editFunction={onClickEdit}
              />
            ) : (
              <NoAttachmentComponent />
            )} */}

              {/* <IconButton
              icon={EnhanceIcon}
              buttonText="Enhance"
              backgroundColor="#DE54FF"
              mainColor="#FFFFFF"
              onClick={() => {
                setIsEditMode(false);
              }}
            /> */}
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image src={EditIcon} preview={false} />
            <span style={{ color: "#D32EFF", fontSize: 16, marginLeft: 4 }}>
              Editing Mode
            </span>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        ></div>
      </div>
      {/* 
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "10%",
          justifyContent: "center",
        }}
      >
        {isEditMode ? (
          item.attachment ? (
            <ViewAttachments
              id={idx}
              attachment={item.attachment}
              editFunction={onClickEdit}
            />
          ) : (
            <DesignUploadComponent
              fileName={fileName}
              setFileName={setFileName}
            />
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
      </div> */}
    </div>
  );
};

const TextDisplay = ({ text }) => {
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
        {/* <span>{text}</span> */}
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
        display: "flex",
        flexDirection: "row",
        borderRadius: 5,
        height: "40%",
        padding: 4,
        alignItems: "center",
        marginLeft: 4,
      }}
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
