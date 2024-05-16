/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../index.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const BrainStormingRenderItem = ({ item, idx, selected }) => {
  const navigate = useNavigate();

  const allAssignments = JSON.parse(localStorage.getItem("assignments"));

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
      {/* <div
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
              {item.prompt}
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
      </div> */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "2%",
          marginRight: "2%",
          marginBottom: "5%",
          width: "90%",
          backgroundColor: "red",
          height: 40,
        }}
      >
        <span>
          Created At: {new Date(item.created_at).toLocaleDateString()}
        </span>
        <span>{item.prompt}</span>
        <span>
          Related Assignment:{" "}
          {
            allAssignments.find((x) => {
              if (x.id === item.assignment) {
                console.log("alksdjaslkjdaslk");
                return x;
              }
            }).title
          }
        </span>
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
