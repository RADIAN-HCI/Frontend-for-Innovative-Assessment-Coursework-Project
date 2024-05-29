import React, { useEffect, useState } from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
import { Button, Image, Input } from "antd";
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

  useEffect(() => {
    const fetchIdeasData = async () => {
      try {
        // const author_id = 1;
        const response = await api.get(
          `api/brainstorms/?assignment_id=${assignmentID}`
        );
        localStorage.setItem("ideas", JSON.stringify(response.data));
        console.log(response.data);
        setData(response.data);
      } catch (e) {
        navigate("/login");
      }
    };
    fetchIdeasData();
  }, [assignmentID]);

  const RenderItem = (item, idx) => {
    return <BrainStormingRenderItem item={item} idx={idx} />;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [text, setText] = useState("");

  return (
    <>
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
                alignItems: "center",
                width: "85%",
                marginLeft: "10%",
              }}
            >
              <GeneralList
                data={data}
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
                      console.log(text);
                    }}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                }
                style={{ width: "80%", height: 38 }}
                className="sticky bottom-4 border-1 rounded-lg"
              />
            </div>
          </div>
        ) : (
          <EmptyPage setIsModalOpen={setIsModalOpen} />
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

const EmptyPage = ({ setIsModalOpen }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img alt="background" src={DesignEmptyVector} />
      <span style={{ color: "#676767" }}>
        There is no question here but you can
      </span>
      <Button
        style={{
          backgroundColor: "#D6E5F5",
          borderColor: "#0066CC",
          height: 40,
        }}
        className="border-1 rounded-lg mt-2 mb-2"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <span
          style={{
            fontWeight: "bolder",
            fontSize: 20,
            color: "#0066CC",
            marginBottom: 8,
          }}
        >
          + Add Question
        </span>
      </Button>

      <span style={{ color: "#676767" }}>
        or go to <b>Brain Storm</b> and generate some ideas with AI.
      </span>
    </div>
  );
};
export default BrainStorming;
