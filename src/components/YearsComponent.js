import React from 'react';
import styles from './YearsComponent.css';




import stylesSecond from './SecondsComponent.css';
import mainStyles from './Mainfram'
import { Layout, Radio, Input, InputNumber, Checkbox, Row, Col } from 'antd';
import { weekOption } from '../utils/constants'

import { connect } from 'dva';

const CheckboxGroup = Checkbox.Group;

const RadioGroup = Radio.Group;


class YearsComponent extends React.Component {

  state = {
    value: 1,
  }


  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className={stylesSecond.radioMargin}>每年允许的通配符</Radio>

        <Radio style={radioStyle} value={2} className={stylesSecond.radioMargin}>
        不指定
      

        </Radio>
        <Radio style={radioStyle} value={3} className={[stylesSecond.radioMargin,styles.raddioBottom]} >周期从
        &nbsp;
        <InputNumber min={1} max={10} defaultValue={2018} className={mainStyles.InputNumber} />
          &nbsp;
           到
           &nbsp;
        <InputNumber min={1} max={10} defaultValue={2020} />
          &nbsp;

        </Radio>
      






      </RadioGroup>
    );
  }
}


export default YearsComponent;
