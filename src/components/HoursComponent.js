import React from 'react';
import styles from './HoursComponent.css';



import stylesSecond from './SecondsComponent.css';
import mainStyles from './Mainfram'
import { Layout, Radio, Input, InputNumber, Checkbox,Row,Col } from 'antd';
import {amOptions,pmOptions,plainOptions2,plainOptions3,plainOptions4,plainOptions5} from '../utils/constants'

import { connect } from 'dva';

const CheckboxGroup = Checkbox.Group;

const RadioGroup = Radio.Group;


class HoursComponent extends React.Component  {

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
        <Radio style={radioStyle} value={1} className={stylesSecond.radioMargin}>每分钟允许的通配符</Radio>
        <Radio style={radioStyle} value={2} className={stylesSecond.radioMargin}>周期从
        &nbsp;
        <InputNumber min={1} max={10} defaultValue={3} className={mainStyles.InputNumber} />
          &nbsp;
           到
           &nbsp;
        <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
            小时
        </Radio>
        <Radio style={radioStyle} value={3} className={stylesSecond.radioMargin}>
          从&nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
          小时开始，每
          &nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
          小时执行一次

        </Radio>
        <Radio style={radioStyle} value={4} className={stylesSecond.radioMargin}>
        指定
          <Layout>
            <Row>
            <Col span={3}><p className={styles.textAligin}>am:</p></Col>
            <Col span={21}><CheckboxGroup options={amOptions} defaultValue={['00']} /></Col>
            </Row>
            <Row>
            <Col span={3}><p className={styles.textAligin}>pm:</p></Col>
            <Col span={21}><CheckboxGroup options={pmOptions} defaultValue={['00']} /></Col>
            </Row>
            
          </Layout>
        </Radio>


      </RadioGroup>
  );
  }
}


export default HoursComponent;
