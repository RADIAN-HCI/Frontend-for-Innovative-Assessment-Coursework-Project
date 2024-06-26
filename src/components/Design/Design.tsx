import React, { useEffect, useState } from "react";
import Logo from "../../images/Logo.svg";
import "../index.css";
import { Button, Image, Spin } from "antd";
import DesignCloudIcon from "../../images/DesignCloudIcon.svg";
import GeneralList from "../GeneralList.tsx";
import DesignRenderItem from "./DesignRenderItem.tsx";
import AddQuestionModal from "./AddQuestionModal.tsx";
import DesignEmptyVector from "../../images/DesignEmptyVector.svg";
import NavigatorComponent from "../NavigatorComponent.tsx";
import api from "../api.ts";
import { useNavigate } from "react-router-dom";

const Design = () => {
  const [data, setData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [spinning, setSpinning] = useState<boolean>(false);

  const navigate = useNavigate();

  const assignmentID = localStorage.getItem("assignment_id")!;

  const fetchDesignData = async () => {
    setSpinning(true);
    try {
      if (localStorage.getItem("token")) {
        const response = await api.get(
          `api/questions/assignment/${assignmentID}/`
        );
        localStorage.setItem("questions", JSON.stringify(response.data));
        response.data.sort(function (x, y) {
          return x.is_selected_for_assignment === y.is_selected_for_assignment
            ? 0
            : x.is_selected_for_assignment
              ? -1
              : 1;
        });
        setData(response.data);
      } else {
        navigate("/login");
      }
    } catch (e) {
      navigate("/login");
    } finally {
      setSpinning(false);
    }
  };

  useEffect(() => {
    fetchDesignData();
  }, []);

  const RenderItem = (item, idx) => {
    const editQuestion = async (objectData) => {
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
    };

    return (
      <DesignRenderItem
        item={item}
        idx={idx}
        onClickEdit={async (objectData) => {
          await editQuestion(objectData);
          fetchDesignData();
        }}
      />
    );
  };

  const handleOk = () => {
    setIsModalOpen(false);
    fetchDesignData();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Spin spinning={spinning} fullscreen />
      <img
        src={DesignCloudIcon}
        style={{ top: 250 }}
        className="flex absolute right-0 z-0"
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
          secondText="Design"
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
            Design
          </span>
        </div>
        {data && data.length > 0 ? (
          <div
            style={{
              marginLeft: "10%",
              marginTop: "3%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "85%",
            }}
          >
            <GeneralList data={data} RenderItem={RenderItem} numOfColumn={1} />
            <div className="flex flex-row justify-between items-center mr-12">
              <Button
                style={{
                  backgroundColor: "#D6E5F5",
                  borderColor: "#0066CC",
                  borderWidth: 1,
                  borderRadius: 10,
                  height: 40,
                }}
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
              <Button
                style={{
                  backgroundColor: "#98FFC1",
                  borderColor: "#00C850",
                  borderWidth: 1,
                  borderRadius: 10,
                  height: 40,
                  marginLeft: 6,
                }}
                onClick={() => {
                  navigate("/generate");
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
                  Go To Generate
                </span>
              </Button>
            </div>
            <AddQuestionModal
              isModalOpen={isModalOpen}
              handleCancel={handleCancel}
              handleOk={handleOk}
            />
          </div>
        ) : (
          <EmptyPage
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            handleOk={handleOk}
          />
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

const EmptyPage = ({ setIsModalOpen, isModalOpen, handleCancel, handleOk }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <img alt="background" src={DesignEmptyVector} />
      <span style={{ color: "#676767" }}>
        There is no question here but you can
      </span>
      <Button
        style={{
          backgroundColor: "#D6E5F5",
          borderColor: "#0066CC",
          borderWidth: 1,
          borderRadius: 10,
          height: 40,
          marginTop: 8,
          marginBottom: 8,
        }}
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
        or go to
        <b
          onClick={() => {
            navigate("/brainstorm");
          }}
        >
          Brain Storm
        </b>
        and generate some ideas with AI.
      </span>
      <AddQuestionModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </div>
  );
};
export default Design;
