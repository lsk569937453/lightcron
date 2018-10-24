import React from 'react';
import styles from './WeeksComponent.css';






import stylesSecond from './SecondsComponent.css';
import mainStyles from './Mainfram'
import { Layout, Radio, Input, InputNumber, Checkbox,Row,Col } from 'antd';
import {weekOption} from '../utils/constants'

import { connect } from 'dva';

const CheckboxGroup = Checkbox.Group;

const RadioGroup = Radio.Group;


class WeeksComponent extends React.Component  {

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
        <Radio style={radioStyle} value={1} className={stylesSecond.radioMargin}>每周允许的通配符</Radio>
        <Radio style={radioStyle} value={2} className={stylesSecond.radioMargin}>
        不指定
        </Radio>
        <Radio style={radioStyle} value={3} className={stylesSecond.radioMargin}>周期从星期
        &nbsp;
        <InputNumber min={1} max={10} defaultValue={3} className={mainStyles.InputNumber} />
          &nbsp;
           到
           &nbsp;
        <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
            
        </Radio>
        <Radio style={radioStyle} value={4} className={stylesSecond.radioMargin}>
          第&nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
          周的星期
          &nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
         

        </Radio>

           <Radio style={radioStyle} value={5} className={stylesSecond.radioMargin}>
          本周最后一个星期&nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          
         

        </Radio>
      
        <Radio style={radioStyle} value={6} className={stylesSecond.radioMargin}>
        指定
          <Layout>
            <Row>
            <Col span={3}></Col>
            <Col span={21}><CheckboxGroup options={weekOption} defaultValue={['00']} /></Col>
            </Row>
          
            
          </Layout>
        </Radio>


     
 


      </RadioGroup>
  );
  }
}

export default WeeksComponent;
