import React from 'react';
import styles from './Mainfram.css';
import Seconds from './SecondsComponent'
import Minutes from './MinutesComponent'
import Hour from './HoursComponent'
import Day from './DaysComponent'
import Month from './MonthsComponent'
import Week from './WeeksComponent'
import Year from './YearsComponent'



import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


function Mainfram() {
  return (
    <div className={styles.tabPane}>
      <Tabs defaultActiveKey="1" onChange={callback} type="card">
        <TabPane tab="seconds" key="1" ><Seconds /></TabPane>
        <TabPane tab="minute" key="2"><Minutes /></TabPane>
        <TabPane tab="hour" key="3"><Hour /></TabPane>
        <TabPane tab="day" key="4"><Day /></TabPane>
        <TabPane tab="month" key="5"><Month /></TabPane>
        <TabPane tab="week" key="6"><Week /></TabPane>
        <TabPane tab="year" key="7"><Year /></TabPane>
      </Tabs>
    </div>




  );
}

export default Mainfram;
