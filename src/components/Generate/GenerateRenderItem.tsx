import React, { useState } from "react";
import "../index.css";
import { CheckOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import EditIcon from "../../images/EditIcon.svg";
import NoAttachmentComponent from "../NoAttachmentComponent.tsx";
import EyeIcon from "../../images/EyeIcon.svg";
import TextArea from "antd/es/input/TextArea";
import { Image, Typography } from "antd";
import ButtonsSideBySide from "../ButtonsSideBySide.tsx";
import api from "../api.ts";
import ViewAttachments from "../ViewAttachments.tsx";
import DesignUploadComponent from "../Design/DesignUploadComponent.tsx";

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
  onClickEdit,
}) => {
  const [ideaText, setIdeaText] = useState(
    item.details_modified !== "" ? item.details_modified : item.details_original
  );

  const [fileName, setFileName] = useState("");

  console.log(fileName);

  const swapElements = (arr, pos1, pos2) => {
    const temp = arr[pos1];

    arr[pos1] = arr[pos2];

    arr[pos2] = temp;

    return [...arr];
  };

  const sortAPICall = async (data: []) => {
    const sendingData: Object[] = [];
    const assignment_id = localStorage.getItem("assignment_id");

    for (let i = 0; i < data.length; i++) {
      sendingData.push({ order: i + 1, id: data[i].id });
    }

    await api.put(`api/questions/order/${assignment_id}/`, sendingData);
  };

  return (
    <div
      key={idx}
      style={{
        backgroundColor: "#F5F5F5",
        width: "95%",
        height: "90%",
        padding: "1%",
        borderColor: selected === idx ? "#0066CC" : "#F5F5F5",
      }}
      className="rounded-xl justify-between flex flex-row border-2"
    >
      <div
        style={{ height: "30%" }}
        className="flex flex-col mb-3 justify-between items-center self-center"
      >
        <UpOutlined
          onClick={async () => {
            if (idx !== 0) {
              await setData(swapElements(data, idx, idx - 1));

              sortAPICall(data);
            }
          }}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Text code>{idx + 1}</Text>
        <DownOutlined
          onClick={async () => {
            if (idx !== data.length - 1) {
              await setData(swapElements(data, idx, idx + 1));
              sortAPICall(data);
            }
          }}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
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
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <span style={{ fontWeight: "bolder", fontSize: 40 }}>
              {item.title}
            </span>
            {selected === idx ? <SelectedComponent /> : null}
          </div>
          <div className="flex flex-row justify-between">
            <ButtonsSideBySide
              isEditMode={isEditMode}
              setIsEditMode={setIsEditMode}
              add={add}
              setAdd={setAdd}
              ideaText={ideaText}
              onClickEdit={onClickEdit}
            />

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
      <CheckOutlined
        style={{ color: "#0066CC" }}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <span style={{ color: "#0066CC" }}>Selected</span>
    </div>
  );
};

export default GenerateRenderItem;
