import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Mainfram from '../components/Mainfram'

import { Layout,List } from 'antd';


import { Row, Col, Divider, Input } from 'antd';

function IndexPage() {
  return (
    <div className={styles.mainFram}>
      <div className={styles.mainBody}>
        <Layout>
          <Row>
            <Col span={24}><Mainfram /></Col>
          </Row>
        </Layout>
        <Layout>
          <Divider orientation="left">表达式</Divider>
          <Row>
            <Col span={3}></Col>
            <Col span={3}><p className={styles.pText}>seconds</p></Col>
            <Col span={3}><p className={styles.pText}>minutes</p></Col>
            <Col span={3}><p className={styles.pText}>hour</p></Col>
            <Col span={3}><p className={styles.pText}>day</p></Col>
            <Col span={3}><p className={styles.pText}>month</p></Col>
            <Col span={3}><p className={styles.pText}>week</p></Col>
            <Col span={3}><p className={styles.pText}>year</p></Col>
          </Row>
          <Row>
            <Col span={3}><p className={styles.pText}>表达式字段：</p></Col>
            <Col span={3}><Input size="small" /></Col>
            <Col span={3}><Input size="small" /></Col>
            <Col span={3}><Input size="small" /></Col>
            <Col span={3}><Input size="small" /></Col>
            <Col span={3}><Input size="small" /></Col>
            <Col span={3}><Input size="small" /></Col>
            <Col span={3}><Input size="small" /></Col>
          </Row>
          <Row>
            <Col span={3}><p className={styles.pText}>cron表达式：</p></Col>
            <Col span={18}><Input size="small" /></Col>
            <Col span={3}><Input size="small" /></Col>
          </Row>
          <Row>
            <p>最近五次的运行时间：</p>
            <List
              size="small"
      
              bordered
              
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </Row>
        </Layout>
      </div>
    </div>


  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
