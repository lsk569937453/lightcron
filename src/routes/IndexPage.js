import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Mainfram from '../components/Mainfram'
import FooterComponent from '../components/FooterComponent'

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
        <FooterComponent/>
        
      </div>
    </div>


  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
