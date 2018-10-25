import React from 'react';
import styles from './FooterComponent.css';
import * as Utils from '../utils/ConcactUtils'

import { Layout, List } from 'antd';
import { connect } from 'dva';


import { Row, Col, Divider, Input } from 'antd';

class FooterComponent extends React.Component {
 

  load=(e)=>{
    return this.state.seconds+this.state.minutes+this.state.hour+this.state.day+this.state.month+this.state.week+this.state.year

  }

  onchange=(e)=>{
    console.log(e)
  }
  render() {
    //  const defaultV=this.state.seconds+' '+
    //                 this.state.minutes+' '+
    //                 this.state.hour+' '+
    //                this.state.day+' '+
    // //                this.state.month+' '+
    // //                this.state.week+' '+
    // //                this.state.year;
 

    return (
      
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
          <Col span={3}><Input size="small"   value={Utils.getSeconds(this.props.footSeconds)} onChange={this.onchange}/></Col>
          <Col span={3}><Input size="small" defaultValue={this.props.footSeconds.value}/></Col>
          <Col span={3}><Input size="small" defaultValue={this.props.footSeconds.value}/></Col>
          <Col span={3}><Input size="small" defaultValue={this.props.footSeconds.value}/></Col>
          <Col span={3}><Input size="small" defaultValue={this.props.footSeconds.value}/></Col>
          <Col span={3}><Input size="small" defaultValue={this.props.footSeconds.value}/></Col>
          <Col span={3}><Input size="small" defaultValue={this.props.footSeconds.value}/></Col>
        </Row>
        <Row>
          <Col span={3}><p className={styles.pText}>cron表达式：</p></Col>
          <Col span={18}><Input size="small" value={this.props.defaultV} disabled={true} onChange={this.onchange}/></Col>
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
    );
  }
}

function mapStateToProps(state) {
  let { footSeconds,defaultV} = state.footModel;


  return {
    footSeconds:footSeconds,
    defaultV:defaultV

  };
}


export default connect(mapStateToProps)(FooterComponent);

