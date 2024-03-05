import { Modal } from "antd";
import React from "react";

const AddQuestionModal = ({isModalOpen, showModal, handleOk, handleCancel}) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};
export default AddQuestionModal;
