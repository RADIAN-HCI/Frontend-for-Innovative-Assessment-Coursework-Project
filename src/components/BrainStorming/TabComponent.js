import React, { useState } from "react";
import { Radio, Tabs } from "antd";
const TabComponent = () => {
  const [size, setSize] = useState("small");
  const onChange = (e) => {
    setSize(e.target.value);
  };

//   const [mode, setMode] = useState("top");

  return (
    <div>
      {/* <Radio.Group
        value={size}
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
        mode="left"
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group> */}
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        tabPosition="left"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Card Tab ${id}`,
            key: id,
            children: (
                <div>
                  {console.log(`children ${id}`)}
                  <span>-----------------{id}</span>
                </div>
              ),
          };
        })}
      />
    </div>
  );
};
export default TabComponent;
