import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";

const NoAttachmentComponent = () => {
  return (
    <Button
      type="dashed"
      disabled
      style={{
        height: "40%",
        width: "100%",
        alignItems: "center",
      }}
    >
      <CloseOutlined />
      <br />
      <span>No File</span>
    </Button>
  );
};

export default NoAttachmentComponent;
