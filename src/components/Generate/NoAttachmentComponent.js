import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";

const NoAttachmentComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
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
      {width >= 930 ? <span>No File</span> : null}
    </Button>
  );
};

export default NoAttachmentComponent;
