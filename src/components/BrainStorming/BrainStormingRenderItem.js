/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../index.css";
import { CheckOutlined, DeleteFilled } from "@ant-design/icons";
import BrainStormingInfoComponent from "./BrainStormingInfoComponent";
import InnovationIcon from "../../images/InnovationIcon.svg";
import DifficultyIcon from "../../images/DifficultyIcon.svg";
import { Button } from "antd";

import { Typography } from "antd";
const { Paragraph } = Typography;

const BrainStormingRenderItem = ({ item, idx, selected, setSelected }) => {
  const [isRemoved, setIsRemoved] = useState(true);

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
        borderColor: selected.includes(idx) ? "#0066CC" : "#F5F5F5",
        borderWidth: 3,
        borderRadius: 10,
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
          }}
        >
          <span style={{ fontWeight: "bolder", fontSize: 40 }}>
            {item.title}
          </span>
          {selected.includes(idx) ? <SelectedComponent /> : null}
        </div>
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
          width: "30%",
          justifyContent: "space-around",
          columnGap: 2,
          rowGap: 2,
        }}
      >
        <BrainStormingInfoComponent
          color="#00e15A"
          score={item.innovation}
          subtitle="Innovation"
          imgSrc={InnovationIcon}
        />
        <BrainStormingInfoComponent
          color="#EA0054"
          score={item.difficulty}
          subtitle="Difficulty"
          imgSrc={DifficultyIcon}
        />
        {isRemoved ? (
          <Button
            style={{ backgroundColor: "#D6E5F5", color: "#0066CC" }}
            onClick={() => {
              setSelected([...selected, idx]);
              setIsRemoved(false);
            }}
          >
            <span style={{ fontWeight: "bolder" }}>+ Add for Design</span>
          </Button>
        ) : (
          <Button
            style={{ backgroundColor: "#FFF2F4", color: "#E72424" }}
            icon={<DeleteFilled />}
            onClick={() => {
              setSelected(selected.filter((a) => a !== idx));
              setIsRemoved(true);
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Remove</span>
          </Button>
        )}
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

export default BrainStormingRenderItem;
