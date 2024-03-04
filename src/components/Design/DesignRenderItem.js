import React, { useState } from "react";
import "../index.css";
// import { useLocation } from "react-router-dom";
import { Button, Image } from "antd";
import { EditOutlined } from "@ant-design/icons";
import DesignInfoComponent from "./DesignInfoComponent";
import DifficultyIcon from "../../images/HardIconForDesignPage.svg";
import InnovationIcon from "../../images/InnovationIcon.svg";
import DesignUploadComponent from "./DesignUploadComponent";
import EnhanceIcon from "../../images/EnhanceIcon.svg";
import EditIcon from "../../images/EditIcon.svg";
import TextArea from "antd/es/input/TextArea";

const DesignRenderItem = ({
  item,
  idx,
  isEditMode,
  setIsEditMode,
  infoStyle,
}) => {
  const [ideaText, setIdeaText] = useState(
    "English idea comes from one of Senecas Epistles (58), written about a.d. 64 during his retirement from Emperor Neros court, in which the Roman philosopher uses idea in the sense of “Platonic idea, eternal archetype.” Seneca wrote idea in Latin letters; English idea comes from one of Senecas Epistles (58), written about a.d. 64 during his retirement from Emperor Neros court, in which the Roman philosopher uses idea in the sense of Platonic idea, eternal archetype.” Seneca wrote idea in Latin letters; English idea comes from one of Senecas Epistles (58), written about a.d. 64 during his retirement from Emperor Neros court, in which the Roman philosopher uses idea in the sense of Platonic idea, eternal archetype. Seneca wrote idea in Latin letters; English idea comes from one of Senecas Epistles (58), written about a.d. 64 during his retirement from Emperor Neros court, in which the Roman philosopher uses idea in the sense of Platonic idea, eternal archetype. Seneca wrote idea in Latin"
  );
  return (
    <div
      key={idx}
      style={{
        backgroundColor: "#F5F5F5",
        width: "90%",
        height: "90%",
        padding: "1%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
          width: "90%",
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
          <span style={{ fontWeight: "bolder", fontSize: 40 }}>Idea 1</span>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <DesignInfoComponent
              color="#00e15A"
              title="Very High"
              imgSrc={InnovationIcon}
              infoStyle={infoStyle}
            />

            <DesignInfoComponent
              color="#EA0054"
              title="Hard"
              imgSrc={DifficultyIcon}
              infoStyle={infoStyle}
            />
          </div>
        </div>

        {isEditMode ? (
          <TextEditor ideaText={ideaText} setIdeaText={setIdeaText} />
        ) : (
          <TextDisplay text={ideaText} />
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          justifyContent: "space-around",
          columnGap: 2,
          rowGap: 2,
        }}
      >
        <DesignUploadComponent />

        {!isEditMode ? (
          <Button
            style={{
              color: "#DE54FF",
              height: "15%",
              borderColor: "#F4C6FF",
              borderWidth: 1,
            }}
            onClick={() => {
              setIsEditMode(true);
            }}
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
                src={EditIcon}
                height={25}
                width={25}
                style={{ marginRight: 12 }}
                preview={false}
              />
              <span
                style={{ fontWeight: "bolder", color: "#D32EFF", fontSize: 24 }}
              >
                Edit
              </span>
            </div>
          </Button>
        ) : (
          <Button
            style={{
              backgroundColor: "#F4C6FF",
              color: "#DE54FF",
              height: "15%",
            }}
            icon={<EditOutlined width={120} height={120} />}
            onClick={() => {
              setIsEditMode(false);
            }}
          >
            <span
              style={{ fontWeight: "bolder", color: "#D32EFF", fontSize: 24 }}
            >
              Done
            </span>
          </Button>
        )}

        <Button
          style={{
            backgroundColor: "#DE54FF",
            color: "white",
            height: "15%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Image
              src={EnhanceIcon}
              height={25}
              width={25}
              style={{ marginRight: 12 }}
              preview={false}
            />
            <span style={{ fontWeight: "bolder", fontSize: 24 }}>Enhance</span>
          </div>
        </Button>
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

export default DesignRenderItem;
