import { Button, Image } from "antd";
import FlatList from "flatlist-react";
import React from "react";
import BookIcon from "../images/BookIcon.svg";
import ProfileIcon from "../images/ProfileIcon.svg";
import CalendarIcon from "../images/CalendarIcon.svg";

const AssignmentFlatList = ({ data }) => {
  return (
    <ul>
      <FlatList
        list={data}
        renderItem={renderPerson}
        renderWhenEmpty={() => <div>List is empty!</div>}
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
            }}
          >
            <Image src={BookIcon} width={15} />
            <span>Course</span>
            <span>Fundamentals of Programming</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Image src={ProfileIcon} width={15} />
            <span>Owner</span>
            <span>Prof. Mohammad Amin Fazli</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Image src={CalendarIcon} width={15} />
            <span>Deadline</span>
            <span>26 Jan 23:59</span>
          </div>
        </div>
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
            Brain Storm
          </Button>
          <Button
            className="w-1/3 rounded-xl"
            style={{
              backgroundColor: "#DDCDFF",
              color: "#7330FF",
              width: "30%",
            }}
          >
            Design
          </Button>
          <Button
            className="w-1/3 rounded-xl bg-blue-600"
            style={{
              color: "#D32EFF",
              backgroundColor: "#F4C6FF",
              width: "30%",
            }}
          >
            Generate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentFlatList;
