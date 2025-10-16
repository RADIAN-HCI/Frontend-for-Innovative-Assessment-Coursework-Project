import { List } from "antd";

const GeneralList = ({ data, RenderItem, numOfColumn }) => {
  const listData = Array.isArray(data) ? data : [];
  const isSingleColumn = !numOfColumn || numOfColumn <= 1;
  if (isSingleColumn) {
    // Use default List layout (no grid) to preserve full-width children sizing
    return <List dataSource={listData} renderItem={RenderItem} />;
  }

  // For multi-column layouts, use grid and wrap items to let antd compute widths
  const grid = { column: numOfColumn, gutter: numOfColumn === 2 ? 16 : 0 };
  return (
    <List
      grid={grid}
      dataSource={listData}
      renderItem={(item, idx) => <List.Item>{RenderItem(item, idx)}</List.Item>}
    />
  );
};

export default GeneralList;
