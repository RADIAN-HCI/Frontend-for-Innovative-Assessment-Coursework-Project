import { List } from "antd";

const GeneralList = ({ data, RenderItem }) => {
  return (
    <ul>
      <List
        grid={{
          column: 2,
          gutter: 16,
        }}
        dataSource={data}
        renderItem={RenderItem}
      />
    </ul>
  );
};

export default GeneralList;
