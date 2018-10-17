import React from 'react';
import styles from './Mainfram.css';



import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


function Mainfram() {
  return (
    <div>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="seconds" key="1">Content of Tab Pane 1</TabPane>
      <TabPane tab="minute" key="2">Content of Tab Pane 2</TabPane>
      <TabPane tab="hour" key="3">Content of Tab Pane 3</TabPane>
      <TabPane tab="day" key="4">Content of Tab Pane 1</TabPane>
      <TabPane tab="month" key="5">Content of Tab Pane 2</TabPane>
      <TabPane tab="week" key="6">Content of Tab Pane 3</TabPane>
      <TabPane tab="year" key="7">Content of Tab Pane 1</TabPane>
    </Tabs>

    
     </div>




  );
}

export default Mainfram;
