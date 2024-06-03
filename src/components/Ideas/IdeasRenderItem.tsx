/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../index.css";
import { CheckOutlined } from "@ant-design/icons";
import IdeasInfoComponent from "./IdeasInfoComponent.tsx";
import InnovationIcon from "../../images/InnovationIcon.svg";
import DifficultyIcon from "../../images/DifficultyIcon.svg";
import { Button } from "antd";

import { Typography } from "antd";
import AddQuestionModal from "./AddQuestionModal.tsx";
import { useNavigate } from "react-router-dom";
const { Paragraph } = Typography;

const IdeasRenderItem = ({ item, idx, selected, setSelected }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const [state, setState] = useState({
    expand: false,
    counter: 0,
  });

  const typoExpand = () => {
    setState({
      expand: true,
      counter: !state.expand ? state.counter + 0 : state.counter + 1,
    });
  };

  const typoClose = () => {
    setState({
      expand: false,
      counter: !state.expand ? state.counter + 0 : state.counter + 1,
    });
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/design");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      key={idx}
      style={{
        backgroundColor: "#F5F5F5",
        width: "90%",
        padding: "1%",
        borderColor: selected.includes(idx) ? "#0066CC" : "#F5F5F5",
        borderWidth: 3,
        borderRadius: 10,
        margin: "2%",
      }}
      className="rounded-l flex flex-row justify-between"
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
        <div className="flex flex-row items-center">
          <span style={{ fontWeight: "bolder", fontSize: 40 }}>
            {item.title}
          </span>
          {selected.includes(idx) ? <SelectedComponent /> : null}
        </div>
        <div className="flex flex-row justify-between">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
            }}
            key={state.counter}
          >
            <Paragraph
              ellipsis={{
                rows: 4,
                expandable: true,
                onExpand: typoExpand,
              }}
            >
              {item.details}
            </Paragraph>
            {state.expand && (
              <a onClick={typoClose} style={{ marginTop: 0, color: "blue" }}>
                Collapse
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between pb-2"></div>
      </div>

      <div
        style={{ width: "35%" }}
        className="flex flex-col justify-around m-1 p-1 gap-x-1 gap-y-1"
      >
        <IdeasInfoComponent
          color="#00e15A"
          score={item.innovation}
          subtitle="Innovation"
          imgSrc={InnovationIcon}
        />
        <IdeasInfoComponent
          color="#EA0054"
          score={item.difficulty}
          subtitle="Difficulty"
          imgSrc={DifficultyIcon}
        />
        <Button
          style={{
            backgroundColor: "#D6E5F5",
            color: "#0066CC",
            height: "auto",
          }}
          onClick={() => {
            setSelected([...selected, idx]);
            setIsModalOpen(true);
          }}
        >
          <span style={{ fontWeight: "bolder" }} className="BtnStyle">
            + Add to Design Questions
          </span>
        </Button>

        <AddQuestionModal
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          handleOk={handleOk}
          title={item.title}
          text={item.details}
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
        borderRadius: 5,
        height: "40%",
      }}
      className="flex flex-row p-1 ml-1 items-center"
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

export default IdeasRenderItem;
