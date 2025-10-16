import { List } from "antd";

const GeneralList = ({ data, RenderItem, numOfColumn }) => {
  const grid =
    numOfColumn && numOfColumn > 1
      ? { column: numOfColumn, gutter: numOfColumn === 2 ? 16 : 0 }
      : undefined;
  return (
    <List
      grid={grid}
      dataSource={Array.isArray(data) ? data : []}
      renderItem={(item, idx) => <List.Item>{RenderItem(item, idx)}</List.Item>}
    />
  );
};

export default GeneralList;
