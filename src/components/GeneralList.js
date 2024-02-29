import { List } from "antd";

const GeneralList = ({ data, RenderItem, numOfColumn }) => {
  return (
    <ul>
      <List
        grid={{
          column: numOfColumn,
          gutter: numOfColumn === 2 ? 16 : 0,
        }}
        dataSource={data}
        renderItem={RenderItem}
      />
    </ul>
  );
};

export default GeneralList;
