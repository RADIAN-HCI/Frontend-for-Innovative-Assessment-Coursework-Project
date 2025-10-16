import React, { useEffect, useState } from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
import { Button, Image, Input, Spin, message } from "antd";
import DesignCloudIcon from "../../images/DesignCloudIcon.svg";
import GeneralList from "../GeneralList.tsx";
import DesignEmptyVector from "../../images/DesignEmptyVector.svg";
import NavigatorComponent from "../NavigatorComponent.tsx";
import BrainStormingRenderItem from "./BrainStormingRenderItem.tsx";
import { SendOutlined } from "@ant-design/icons";
import api from "../api.ts";
import BrainstormVector from "../../images/BrainstormVector.svg";
import { useNavigate } from "react-router-dom";

const BrainStorming = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const assignmentID = localStorage.getItem("assignment_id")!;
  const courseID = localStorage.getItem("course_id")!;
  const username = localStorage.getItem("username")!;
  const token = localStorage.getItem("token") || "";
  let currentUserId: string | undefined;
  try {
    const payload = JSON.parse(atob(token.split(".")[1] || ""));
    currentUserId = String(
      payload?.user_id ?? payload?.userId ?? payload?.id ?? payload?.sub
    );
  } catch (e) {
    currentUserId = undefined;
  }

  const [spinning, setSpinning] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");

  const fetchIdeasData = async () => {
    try {
      const response = await api.get(
        `api/brainstorms/?assignment_id=${assignmentID}&created_by=${username}`
      );
      localStorage.setItem("ideas", JSON.stringify(response.data));
      const belongsToCurrentUser = (b: any) => {
        const possibleUsernameMatches = [
          b?.created_by_username,
          b?.owner_username,
          b?.user_username,
          b?.creator_username,
          b?.created_by?.username,
          b?.owner?.username,
          b?.user?.username,
          b?.creator?.username,
        ].filter(Boolean);
        const possibleIdMatches = [
          b?.created_by,
          b?.owner,
          b?.user,
          b?.creator,
          b?.created_by?.id,
          b?.owner?.id,
          b?.user?.id,
          b?.creator?.id,
        ].filter((v) => v !== undefined && v !== null);
        return (
          possibleUsernameMatches.map(String).includes(String(username)) ||
          (currentUserId !== undefined &&
            possibleIdMatches.map(String).includes(String(currentUserId)))
        );
      };
      const filtered = (response.data || [])
        .filter((b) => String(b?.assignment) === String(assignmentID))
        .filter(belongsToCurrentUser);
      setData(filtered);
    } catch (e) {
      navigate("/login");
    }
  };

  useEffect(() => {
    const fetchIdeasData = async () => {
      try {
        const response = await api.get(
          `api/brainstorms/?assignment_id=${assignmentID}&created_by=${username}`
        );
        localStorage.setItem("ideas", JSON.stringify(response.data));
        const belongsToCurrentUser = (b: any) => {
          const possibleUsernameMatches = [
            b?.created_by_username,
            b?.owner_username,
            b?.user_username,
            b?.creator_username,
            b?.created_by?.username,
            b?.owner?.username,
            b?.user?.username,
            b?.creator?.username,
          ].filter(Boolean);
          const possibleIdMatches = [
            b?.created_by,
            b?.owner,
            b?.user,
            b?.creator,
            b?.created_by?.id,
            b?.owner?.id,
            b?.user?.id,
            b?.creator?.id,
          ].filter((v) => v !== undefined && v !== null);
          return (
            possibleUsernameMatches.map(String).includes(String(username)) ||
            (currentUserId !== undefined &&
              possibleIdMatches.map(String).includes(String(currentUserId)))
          );
        };
        const filtered = (response.data || [])
          .filter((b) => String(b?.assignment) === String(assignmentID))
          .filter(belongsToCurrentUser);
        setData(filtered);
      } catch (e) {
        navigate("/login");
      }
    };
    fetchIdeasData();
  }, [assignmentID, navigate, username]);

  const [text, setText] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const RenderItem = (item, idx) => {
    return <BrainStormingRenderItem item={item} idx={idx} />;
  };

  const sendPrompt = async (text) => {
    try {
      setSpinning(true);

      await api.post(`api/brainstorms/`, {
        prompt: text,
        course: courseID,
        lang: "en",
        assignment: assignmentID,
      });
      setSpinning(false);
      fetchIdeasData();

      messageApi.open({
        type: "success",
        content: "New Brainstorm Added!",
      });
      setText("");
    } catch (e) {
      navigate("/login");
    }
  };

  return (
    <>
      {contextHolder}
      <Spin spinning={spinning} fullscreen />
      <img
        src={DesignCloudIcon}
        style={{ top: 400 }}
        className="absolute right-0 top-100 z-0"
        alt="cloud icon"
      />

      <img
        src={BrainstormVector}
        className="absolute right-0 top-24 z-0"
        alt="cloud icon"
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
          }}
        />
        <NavigatorComponent
          firstText="Assignments"
          secondText="Brain Storming"
          thirdText={undefined}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "10%",
            marginTop: "2%",
            marginRight: "10%",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontWeight: "bolder",
              fontSize: 64,
              marginRight: 8,
            }}
          >
            Brain Storming
          </span>
          <div className="flex flex-row items-center ml-6" style={{ gap: 12 }}>
            <Input
              placeholder="Search brainstorms"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 280 }}
            />
          </div>
        </div>
        {data && data.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                marginTop: "3%",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                width: "100%",
              }}
            >
              <GeneralList
                data={data.filter((d) =>
                  (d?.prompt || "").toLowerCase().includes(searchText.toLowerCase())
                )}
                RenderItem={RenderItem}
                numOfColumn={1}
              />

              <Input
                placeholder="Please Enter your subject to brainstorm"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                suffix={
                  <SendOutlined
                    style={{ color: "blue" }}
                    onClick={() => {
                      sendPrompt(text);
                    }}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                }
                style={{
                  width: "65%",
                  height: 38,
                  borderWidth: 2,
                  borderColor: "black",
                }}
                className="sticky bottom-4 border-1 rounded-lg"
              />
            </div>
          </div>
        ) : (
          <EmptyPage text={text} setText={setText} sendPrompt={sendPrompt} />
        )}
      </div>
      <img
        src={DesignCloudIcon}
        style={{
          position: "absolute",
          left: -200,
          top: 250,
          width: "30%",
          height: "30%",
          color: "red",
          zIndex: -1,
          rotate: "revert",
        }}
        alt="cloud icon"
      />
    </>
  );
};

const EmptyPage = ({ text, setText, sendPrompt }) => {
  return (
    <div className="flex flex-col items-center mb-2">
      <img alt="background" src={DesignEmptyVector} />
      <span style={{ color: "#676767" }}>
        There is no brainstorm here but you can use the following{" "}
        <b>Text Box</b> and generate some brainstorms with AI.
      </span>

      <Input
        placeholder="Please Enter your subject to brainstorm"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        suffix={
          <SendOutlined
            style={{ color: "blue" }}
            onClick={() => {
              sendPrompt(text);
            }}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        }
        style={{
          width: "65%",
          height: 38,
          borderWidth: 2,
          borderColor: "black",
        }}
        className="sticky bottom-4 border-1 rounded-lg"
      />
    </div>
  );
};
export default BrainStorming;
