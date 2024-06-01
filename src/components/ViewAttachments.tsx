import React from "react";
import api from "./api.ts";
import { Button } from "antd";
const ViewAttachments = (props) => {
  var fileDownload = require("js-file-download");

  const downloadEachAttachment = async (index, name) => {
    const fileName = name.split("/");
    console.log("File name is: ", fileName[fileName.length - 1]);
    api
      .get(`api/images/${fileName[fileName.length - 1]}`, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, `${fileName[fileName.length - 1]}`);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderAttachments = (attachment, idx) => {
    return (
      <li
        style={{ width: "80%", display: "flex", flexDirection: "column" }}
        key={idx}
      >
        <div
          className="rounded overflow-hidden shadow-lg px-3 py-3 bg-zinc-300 flex w-fit"
          style={{
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span className="font-semibold mb-1">Attachment</span>

          {/* <Button
            className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold mb-2"
            onClick={() => {
              deleteEachAttachment(idx);
            }}
          >
            Delete
          </Button> */}

          <Button
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white bg-black"
            onClick={() => {
              downloadEachAttachment(idx, attachment);
            }}
          >
            Download
          </Button>
        </div>
      </li>
    );
  };

  return <>{renderAttachments(props.attachment, props.id)}</>;
};

export default ViewAttachments;
