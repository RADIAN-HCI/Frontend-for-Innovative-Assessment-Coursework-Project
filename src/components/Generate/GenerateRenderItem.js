import React, { useState } from "react";
import "../index.css";
// import { useLocation } from "react-router-dom";
import { CheckOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import EditIcon from "../../images/EditIcon.svg";
import GenerateUploadComponent from "./GenerateUploadComponent";
import NoAttachmentComponent from "./NoAttachmentComponent";
import EyeIcon from "../../images/EyeIcon.svg";
import TextArea from "antd/es/input/TextArea";
import { Image, Typography } from "antd";
import ButtonsSideBySide from "../ButtonsSideBySide";

const { Text } = Typography;

const GenerateRenderItem = ({
  item,
  idx,
  add,
  setAdd,
  selected,
  setSelected,
  isEditMode,
  setIsEditMode,
  data,
  setData,
}) => {
  const [ideaText, setIdeaText] = useState(
    "English idea comes from one of Senecas Epistles (58), written about a.d. 64 during his retirement from Emperor Neros court, in which the Roman philosopher uses idea in the sense of “Platonic idea, eternal archetype.” Seneca wrote idea in Latin letters; English idea comes from one of Senecas Epistles (58), written about a.d. 64 during his retirement from Emperor Neros court, in which the Roman philosopher uses idea in the sense of Platonic idea, eternal archetype.” Seneca wrote idea in Latin letters; English idea comes from one of Senecas Epistles (58), written about a.d. 64 during his retirement from Emperor Neros court, in which the Roman philosopher uses idea in the sense of Platonic idea, eternal archetype. Seneca wrote idea in Latin letters; English idea comes from one of Senecas Epistles (58), written about a.d. 64 during his retirement from Emperor Neros court, in which the Roman philosopher uses idea in the sense of Platonic idea, eternal archetype. Seneca wrote idea in Latin"
  );

  const swapElements = (arr, pos1, pos2) => {
    const temp = arr[pos1];

    arr[pos1] = arr[pos2];

    arr[pos2] = temp;

    return [...arr];
  };

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
      }}
      className="rounded-l"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "30%",
          marginBottom: 12,
          justifyContent: "space-between",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <UpOutlined
          onClick={() => {
            if (idx !== 0) {
              setData(swapElements(data, idx, idx - 1));
            }
          }}
        />
        <Text code>{idx + 1}</Text>
        <DownOutlined
          onClick={() => {
            if (idx !== data.length - 1) {
              setData(swapElements(data, idx, idx + 1));
            }
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "2%",
          marginRight: "2%",
          marginBottom: "5%",
          width: "95%",
        }}
        onClick={() => {
          setSelected(idx);
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
          <ButtonsSideBySide
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            add={add}
            setAdd={setAdd}
          />
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "10%",
          justifyContent: "center",
        }}
      >
        {add ? <GenerateUploadComponent /> : <NoAttachmentComponent />}
      </div>
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
        <span>{text}</span>
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
      <CheckOutlined style={{ color: "#0066CC" }} />
      <span style={{ color: "#0066CC" }}>Selected</span>
    </div>
  );
};

export default GenerateRenderItem;
