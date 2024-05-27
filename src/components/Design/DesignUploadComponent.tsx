import "primereact/resources/themes/lara-light-indigo/theme.css";
import { FileUpload } from "primereact/fileupload";
import React from "react";

function DesignUploadComponent({ setFileName }) {
  const onChangeHandler = ({ files }) => {
    const [file] = files;
    setFileName(file);
  };

  return (
    <div className="card flex-col justify-content-center">
      <FileUpload
        customUpload={true}
        mode="basic"
        auto={true}
        uploadHandler={onChangeHandler}
        name="uploader"
        chooseLabel="Select a File"
      />
    </div>
  );
}

export default DesignUploadComponent;
