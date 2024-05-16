import React from "react";
import "../index.css";
// import { useLocation } from "react-router-dom";
import EditIcon from "../images/EditIcon.svg";
import PlusIcon from "../images/PlusIcon.svg";
import TrashIcon from "../images/TrashIcon.svg";
import CheckIcon from "../images/CheckIcon.svg";
import IconButton from "./IconButton.tsx";

const ButtonsSideBySide = ({ isEditMode, setIsEditMode, add, setAdd, onClickEdit, ideaText }) => {
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
            onClickEdit(ideaText);
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

      {add ? (
        <IconButton
          icon={PlusIcon}
          buttonText="Add"
          backgroundColor="#D6E5F5"
          mainColor="#0066CC"
          onClick={() => {
            setAdd(false);
          }}
        />
      ) : (
        <IconButton
          icon={TrashIcon}
          buttonText="Remove"
          backgroundColor="#FFF2F4"
          mainColor="#E72424"
          onClick={() => {
            setAdd(true);
          }}
        />
      )}
    </div>
  );
};

export default ButtonsSideBySide;