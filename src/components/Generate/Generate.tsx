/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
import { Button, Image, Input, message, Switch } from "antd";
import CubeIcon from "../../images/CubeIcon.svg";
import GeneralList from "../GeneralList.tsx";
import GenerateSideIcon from "../../images/GenerateSideIcon.svg";
import GenerateLeftVector from "../../images/GenerateLeftVector.svg";
import GenerateEmptyVector from "../../images/GenerateEmptyVector.svg";

import GenerateRenderItem from "./GenerateRenderItem.tsx";
import NavigatorComponent from "../NavigatorComponent.tsx";
import api from "../api.ts";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const Generate = () => {
  const navigate = useNavigate();
  const [spinning, setSpinning] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [searchText, setSearchText] = useState("");
  const [mineOnly, setMineOnly] = useState(true);
  const username = localStorage.getItem("username");

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const GenerateListItem = ({ item, idx }) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const editQuestion = async (objectData) => {
      try {
        setSpinning(true);
        await api.patch(
          `api/questions/${item.id}/`,
          objectData.fileName
            ? {
                details_modified: objectData.ideaText,
                attachment: objectData.fileName,
              }
            : { details_modified: objectData.ideaText },
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setSpinning(false);
        messageApi.open({
          type: "success",
          content: "Successfully Edited!",
        });
      } catch (e) {
        messageApi.open({
          type: "error",
          content: "Something Went Wrong!",
        });
      }
    };

    return (
      <GenerateRenderItem
        item={item}
        idx={idx}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        data={generateData}
        setData={setGenerateData}
        onClickEdit={async (objectData) => {
          await editQuestion(objectData);
          fetchGenerateData();
        }}
      />
    );
  };

  const RenderItem = (item, idx) => {
    return <GenerateListItem item={item} idx={idx} />;
  };

  const [generateData, setGenerateData] = useState([]);
  const assignmentID = localStorage.getItem("assignment_id");

  const fetchGenerateData = async () => {
    setSpinning(true);
    try {
      const response = await api.get(`api/questions/sorted/${assignmentID}/`);
      localStorage.setItem("questions", JSON.stringify(response.data));
      response.data.sort(function (x, y) {
        return x.is_selected_for_assignment === y.is_selected_for_assignment
          ? 0
          : x.is_selected_for_assignment
            ? -1
            : 1;
      });
      setGenerateData(response.data);
    } catch (e) {
      navigate("/login");
    } finally {
      setSpinning(false);
    }
  };

  useEffect(() => {
    fetchGenerateData();
  }, []);

  const handleGeneratePDF = async (assignment_id) => {
    setSpinning(true);
    try {
      const objectData = new FormData();
      const baseUrl = process.env.REACT_APP_BASE_URL;

      objectData.append("assignment_id", assignment_id);
      await api.post("generate_pdf/", objectData);
      openInNewTab(`${baseUrl}/assignment_pdf.pdf`);
    } catch (e) {
      console.log("Error 500");
    } finally {
      setSpinning(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Spin spinning={spinning} fullscreen />
      <img
        src={CubeIcon}
        style={{
          position: "absolute",
          right: 0,
          top: 50,
          color: "red",
          zIndex: 0,
        }}
        alt="cube icon"
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
            alignItems: "center",
          }}
        />
        <NavigatorComponent
          firstText="Assignments"
          secondText="Generate"
          thirdText={undefined}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "10%",
            marginTop: "2%",
            marginRight: "10%",
          }}
        >
          <span
            style={{
              fontWeight: "bolder",
              fontSize: 64,
            }}
          >
            Generate
          </span>
          <Image
            src={GenerateSideIcon}
            preview={false}
            style={{ marginLeft: "5%", marginTop: "5%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "10%",
            marginTop: 8,
            marginRight: "10%",
          }}
        >
          <Input
            placeholder="Search questions"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 320 }}
          />
          <div className="flex flex-row items-center" style={{ gap: 6, marginLeft: 12 }}>
            <Switch checked={mineOnly} onChange={setMineOnly} />
            <span>Mine only</span>
          </div>
        </div>
        <img
          src={GenerateLeftVector}
          alt="Generate Left Icon"
          style={{ position: "absolute", left: 0, zIndex: -1 }}
        />
        {generateData && generateData.length > 0 ? (
          <div
            style={{
              marginLeft: "10%",
              marginTop: "3%",
              marginRight: "10%",
              alignItems: "center",
            }}
          >
            <GeneralList
              data={generateData
                .filter((q) =>
                  (
                    (q?.title || "") + " " + (q?.details_modified || q?.details_original || "")
                  )
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
                .filter((q) => (mineOnly ? String(q?.created_by) === String(username) : true))}
              RenderItem={RenderItem}
              numOfColumn={1}
            />
            <Button
              style={{
                backgroundColor: "#98FFC1",
                borderColor: "#00C850",
                borderWidth: 1,
                borderRadius: 10,
                height: 40,
                marginLeft: "40%",
              }}
              onClick={() => {
                handleGeneratePDF(assignmentID);
              }}
            >
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: 20,
                  color: "#00C850",
                  marginBottom: 8,
                }}
              >
                Generate PDF
              </span>
            </Button>
          </div>
        ) : (
          <EmptyPage />
        )}
      </div>
    </>
  );
};

const EmptyPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img alt="background" src={GenerateEmptyVector} />
      <span style={{ color: "#676767" }}>
        There is no question here. You can design
      </span>
      <span style={{ color: "#676767" }}>
        your own questions in{" "}
        <b
          onClick={() => {
            navigate("/design");
          }}
          style={{ cursor: "pointer" }}
        >
          Design Page
        </b>{" "}
        and{" "}
        <b
          onClick={() => {
            navigate("/brainstorm");
          }}
          style={{ cursor: "pointer" }}
        >
          Brainstorm Page
        </b>
      </span>
      <span style={{ color: "#676767" }}>or ask you assistants to do it.</span>
    </div>
  );
};
export default Generate;
