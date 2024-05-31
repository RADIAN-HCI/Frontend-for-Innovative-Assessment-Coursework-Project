/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../index.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const BrainStormingRenderItem = ({ item, idx }) => {
  const navigate = useNavigate();

  const allAssignments = JSON.parse(localStorage.getItem("assignments")!);

  return (
    <div
      key={idx}
      style={{
        backgroundColor: "#F5F5F5",
        width: "90%",
        marginRight: "5%",
        marginLeft: "5%",
      }}
      className="flex flex-row justify-between rounded-lg p-2 border-4 mb-2"
    >
      <div
        style={{ width: "90%" }}
        className="bg-slate-400 rounded-lg p-2 flex flex-col mr-2 ml-2"
      >
        <span>
          <b>Created At: </b>
          {new Date(item.created_at).toLocaleDateString()}
        </span>
        <span>
          <b>Prompt: </b>
          {item.prompt}
        </span>
        <span>
          <b>Related Assignment: </b>
          {
            allAssignments.find((x) => {
              if (x.id === item.assignment) {
                return x;
              }
              return 0;
            }).title
          }
        </span>
      </div>

      <div
        style={{ width: "30%" }}
        className="flex flex-col gap-x-1 gap-y-1 justify-around"
      >
        <Button
          style={{ backgroundColor: "#D6E5F5", color: "#0066CC" }}
          onClick={() => {
            navigate("/ideas", { state: { brainstormId: item.id } });
          }}
        >
          <span style={{ fontWeight: "bolder" }}>
            Go to Correspondent Ideas
          </span>
        </Button>
      </div>
    </div>
  );
};

export default BrainStormingRenderItem;
