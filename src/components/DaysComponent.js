import React from 'react';
import styles from './DaysComponent.css';




import stylesSecond from './SecondsComponent.css';
import mainStyles from './Mainfram'
import { Layout, Radio, Input, InputNumber, Checkbox,Row,Col } from 'antd';
import {dateOption0,dateOption1} from '../utils/constants'

import { connect } from 'dva';

const CheckboxGroup = Checkbox.Group;

const RadioGroup = Radio.Group;


class DaysComponent extends React.Component  {

  state = {
    value: 1,
  }


  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render(){

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
    <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className={stylesSecond.radioMargin}>每日允许的通配符</Radio>
        <Radio style={radioStyle} value={2} className={stylesSecond.radioMargin}>
        不指定
        </Radio>
        <Radio style={radioStyle} value={2} className={stylesSecond.radioMargin}>周期从
        &nbsp;
        <InputNumber min={1} max={10} defaultValue={3} className={mainStyles.InputNumber} />
          &nbsp;
           到
           &nbsp;
        <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
            日
        </Radio>
        <Radio style={radioStyle} value={3} className={stylesSecond.radioMargin}>
          从&nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
          日开始，每
          &nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
          天执行一次

        </Radio>
        <Radio style={radioStyle} value={4} className={stylesSecond.radioMargin}>
          每月&nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
          号最近的工作日

        </Radio>
        <Radio style={radioStyle} value={5} className={stylesSecond.radioMargin}>
          本月最后一天

        </Radio>
        <Radio style={radioStyle} value={6} className={stylesSecond.radioMargin}>
        指定
          <Layout>
            <Row>
            <Col span={3}></Col>
            <Col span={21}><CheckboxGroup options={dateOption0} defaultValue={['00']} /></Col>
            </Row>
            <Row>
            <Col span={3}></Col>
            <Col span={21}><CheckboxGroup options={dateOption1} defaultValue={['00']} /></Col>
            </Row>
            
          </Layout>
        </Radio>


     
 


      </RadioGroup>
  );
  }
}


export default DaysComponent;
