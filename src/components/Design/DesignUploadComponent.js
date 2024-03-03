import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import React, { useState } from "react";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const DesignUploadComponent = () => {
  const [loading, setLoading] = useState(false);
  //   const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    console.log(info.file);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        // setImageUrl("https://localhost:8000");
      });
    }
  };
  return (
    <Upload
      name="file"
      // listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="/api/upload"
      beforeUpload={beforeUpload}
      onChange={handleChange}
      style={{ justifyCenter: "center" }}
    >
      <Button type="dashed" style={{ height: "50%" }}>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <br />
        <span
          style={{
            color: "#676767",
            fontWeight: "bolder",
            fontSize: 20,
            marginTop: 8,
          }}
        >
          Upload
        </span>
        <br />
        <span style={{ color: "#676767", fontWeight: "bolder", fontSize: 20 }}>
          Attachment
        </span>

        <br />
        <span style={{ color: "#676767", fontSize: 14 }}>Drag and drop or</span>
        <br />
        <span style={{ color: "#676767", fontSize: 14 }}>click to choose</span>
      </Button>
    </Upload>
  );
};
export default DesignUploadComponent;
