import React from 'react';
import styles from './MinutesComponent.css';

import stylesSecond from './SecondsComponent.css';
import mainStyles from './Mainfram'
import { Layout, Radio, Input, InputNumber, Checkbox,Row,Col } from 'antd';
import {plainOptions0,plainOptions1,plainOptions2,plainOptions3,plainOptions4,plainOptions5} from '../utils/constants'

import { connect } from 'dva';

const CheckboxGroup = Checkbox.Group;

const RadioGroup = Radio.Group;


class MinutesComponent extends React.Component  {

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

    const { mapStateToProps} = this.props;

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
            分钟
        </Radio>
        <Radio style={radioStyle} value={3} className={stylesSecond.radioMargin}>
          从&nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
          分钟开始，每
          &nbsp;
          <InputNumber min={1} max={10} defaultValue={3} />
          &nbsp;
          分钟执行一次

        </Radio>
        <Radio style={radioStyle} value={4} className={stylesSecond.radioMargin}>
        指定
          <Layout>
            <Row>
            <Col span={3}></Col>
            <Col span={21}><CheckboxGroup options={plainOptions0} defaultValue={['00']} /></Col>
            </Row>
            <Row>
            <Col span={3}></Col>
            <Col span={21}><CheckboxGroup options={plainOptions1} defaultValue={['00']} /></Col>
            </Row>
            <Row>
            <Col span={3}></Col>
            <Col span={21}><CheckboxGroup options={plainOptions2} defaultValue={['00']} /></Col>
            </Row>
            <Row>
            <Col span={3}></Col>
            <Col span={21}><CheckboxGroup options={plainOptions3} defaultValue={['00']} /></Col>
            </Row>
            <Row>
            <Col span={3}></Col>
            <Col span={21}><CheckboxGroup options={plainOptions4} defaultValue={['00']} /></Col>
            </Row>
            <Row>
            <Col span={3}></Col>
            <Col span={21}><CheckboxGroup options={plainOptions5} defaultValue={['00']} /></Col>
            </Row>
          </Layout>
        </Radio>


      </RadioGroup>
  );
  }
}

function mapStateToProps(state) {
  const { footMinutes} = state.footModel;


  return {
    footMinutes

  };
}


export default connect(mapStateToProps)(MinutesComponent)
