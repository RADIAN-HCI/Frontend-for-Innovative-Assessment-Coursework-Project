import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";

const NoAttachmentComponent = () => {
  return (
    <Button type="dashed" icon={<CloseOutlined />} disabled>
      No Attachment
    </Button>
  );
};

export default NoAttachmentComponent;
