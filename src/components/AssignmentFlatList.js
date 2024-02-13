import { Button } from "antd";
import FlatList from "flatlist-react";
import React from "react";

const AssignmentFlatList = ({ data }) => {
  return (
    <ul>
      <FlatList
        list={data}
        renderItem={renderPerson}
        renderWhenEmpty={() => <div>List is empty!</div>}
        // sortBy={["firstName", { key: "lastName", descending: true }]}
        // groupBy={(person) => (person.info.age > 18 ? "Over 18" : "Under 18")}
        display={{
          grid: true,
        }}
        gridGap="28%"
        style={{ marginBottom: "2%" }}
      />
    </ul>
  );
};

const renderPerson = (person, idx) => {
  return (
    <div
      key={idx}
      style={{
        backgroundColor: "#F5F5F5",
        width: "100%",
        padding: "1%",
        // marginRight: "10%",
        // marginLeft: "10%",
      }}
      className="rounded-l"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "2%",
          marginRight: "2%",
        }}
      >
        <span style={{ fontWeight: "bolder", fontSize: 40 }}>FOP Project</span>
        <span style={{ fontWeight: "bolder", fontSize: 40 }}>FOP Project</span>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            className="rounded-xl bg-blue-600"
            style={{
              color: "#0066CC",
              backgroundColor: "#D6E5F5",
              width: "30%",
            }}
          >
            Login
          </Button>
          <Button
            className="w-1/3 rounded-xl"
            style={{
              backgroundColor: "#DDCDFF",
              color: "#7330FF",
              width: "30%",
            }}
          >
            Login
          </Button>
          <Button
            className="w-1/3 rounded-xl bg-blue-600"
            style={{
              color: "#D32EFF",
              backgroundColor: "#F4C6FF",
              width: "30%",
            }}
          >
            Login
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default AssignmentFlatList;
