import { List } from "antd";

const GeneralList = ({ data, RenderItem, numOfColumn }) => {
  return (
      <List
        grid={{
          column: numOfColumn,
          gutter: numOfColumn === 2 ? 16 : 0,
        }}
        dataSource={Array.isArray(data) ? data : []}
        renderItem={RenderItem}
      />
  );
};

export default GeneralList;
