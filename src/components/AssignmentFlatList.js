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
        gridGap="32%"
      />
    </ul>
  );
};

const renderPerson = (person, idx) => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        width: "100%",
        marginRight: "10%",
        marginLeft: "10%",
      }}
    >
      <li key={idx}>
        <b>{person.title}</b>
      </li>
    </div>
  );
};

export default AssignmentFlatList;
