// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import { Button, message, Upload } from "antd";
// import React, { useState } from "react";
// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => callback(reader.result));
//   reader.readAsDataURL(img);
// };
// const beforeUpload = (file) => {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// };

// const GenerateUploadComponent = () => {
//   const [loading, setLoading] = useState(false);
//   //   const [imageUrl, setImageUrl] = useState();
//   const handleChange = (info) => {
//     console.log(info.file);
//     if (info.file.status === "uploading") {
//       setLoading(true);
//       return;
//     }
//     if (info.file.status === "done") {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj, (url) => {
//         setLoading(false);
//         // setImageUrl("https://localhost:8000");
//       });
//     }
//   };
//   return (
//     <Upload
//       name="avatar"
//       // listType="picture-card"
//       // className="avatar-uploader"
//       showUploadList={false}
//       action="/api/upload"
//       beforeUpload={beforeUpload}
//       onChange={handleChange}
//       style={{ justifyCenter: "center" }}
//     >
//       <Button
//         type="dashed"
//         style={{ height: "50%" }}
//         icon={loading ? <LoadingOutlined /> : <PlusOutlined />}
//       >
//         <span
//           style={{
//             color: "#676767",
//             fontWeight: "bolder",
//             fontSize: 20,
//           }}
//         >
//           Attachment
//         </span>
//       </Button>
//     </Upload>
//   );
// };
// export default GenerateUploadComponent;

import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import React, { useState } from "react";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const GenerateUploadComponent = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    // {
    //   uid: "-1",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        maxCount={1}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
export default GenerateUploadComponent;
