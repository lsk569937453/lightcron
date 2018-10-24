import React from 'react';
import styles from './MonthsComponent.css';






import stylesSecond from './SecondsComponent.css';
import mainStyles from './Mainfram'
import { Layout, Radio, Input, InputNumber, Checkbox,Row,Col } from 'antd';
import {monthOption} from '../utils/constants'

import { connect } from 'dva';

const CheckboxGroup = Checkbox.Group;

const RadioGroup = Radio.Group;


class MonthsComponent extends React.Component  {

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
        <Radio style={radioStyle} value={1} className={stylesSecond.radioMargin}>每月允许的通配符</Radio>
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
            月
        </Radio>
        <Radio style={radioStyle} value={3} className={stylesSecond.radioMargin}>
          从&nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
          日开始，每
          &nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
          月执行一次

        </Radio>
      
        <Radio style={radioStyle} value={6} className={stylesSecond.radioMargin}>
        指定
          <Layout>
            <Row>
            <Col span={3}></Col>
            <Col span={21}><CheckboxGroup options={monthOption} defaultValue={['00']} /></Col>
            </Row>
          
            
          </Layout>
        </Radio>


     
 


      </RadioGroup>
  );
  }
}

export default MonthsComponent;
