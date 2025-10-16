import { List } from "antd";

const GeneralList = ({ data, RenderItem, numOfColumn }) => {
  const listData = Array.isArray(data) ? data : [];
  return (
    <List
      grid={{
        column: numOfColumn,
        gutter: numOfColumn === 2 ? 16 : 0,
      }}
      dataSource={listData}
      renderItem={(item, idx) => <List.Item style={{ width: "100%" }}>{RenderItem(item, idx)}</List.Item>}
    />
  );
};

export default GeneralList;
