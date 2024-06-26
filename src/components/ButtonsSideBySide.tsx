import React from "react";
import "../index.css";
import EditIcon from "../images/EditIcon.svg";
import PlusIcon from "../images/PlusIcon.svg";
import TrashIcon from "../images/TrashIcon.svg";
import CheckIcon from "../images/CheckIcon.svg";
import IconButton from "./IconButton.tsx";

const ButtonsSideBySide = ({ isEditMode, setIsEditMode, selected, setSelected, onClickEdit, objectData }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {isEditMode ? (
        <IconButton
          icon={CheckIcon}
          buttonText="Done"
          backgroundColor="#F4C6FF"
          mainColor="#D32EFF"
          onClick={() => {
            setIsEditMode(false);
            onClickEdit(objectData);
          }}
        />
      ) : (
        <IconButton
          icon={EditIcon}
          buttonText="Edit"
          backgroundColor="#F4C6FF"
          mainColor="#D32EFF"
          onClick={() => {
            setIsEditMode(true);
          }}
        />
      )}

      {!selected ? (
        <IconButton
          icon={PlusIcon}
          buttonText="Add"
          backgroundColor="#D6E5F5"
          mainColor="#0066CC"
          onClick={setSelected}
        />
      ) : (
        <IconButton
          icon={TrashIcon}
          buttonText="Remove"
          backgroundColor="#FFF2F4"
          mainColor="#E72424"
          onClick={setSelected}
        />
      )}
    </div>
  );
};

export default ButtonsSideBySide;
