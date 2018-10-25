import React from 'react';
import styles from './SecondsComponent.css';
import mainStyles from './Mainfram'

import {sixty,plainOptions0,plainOptions1,plainOptions2,plainOptions3,plainOptions4,plainOptions5} from '../utils/constants'


import { Layout, Radio, Input, InputNumber, Checkbox,Row,Col } from 'antd';

import { connect } from 'dva';

const CheckboxGroup = Checkbox.Group;

const RadioGroup = Radio.Group;

class SecondsComponent extends React.Component {
  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
    this.props.dispatch(
    {
      type: 'footModel/setSecond',

      payload: {
        index:e.target.value,
        value: e.target.value
      }
    })
  }

   secondIndex2StartOnChange=(value)=> {
    this.props.dispatch({
      type:'footModel/setSecondsIndex2Start', 
      value:value
    })
  }
  secondIndex2EndOnChange=(value)=> {
    this.props.dispatch({
      type:'footModel/setSecondsIndex2End', 
      value:value
    })
  }
  secondIndex3StartOnChange=(value)=> {
    this.props.dispatch({
      type:'footModel/setSecondsIndex3Start', 
      value:value
    })
  }
  secondIndex3LoopOnChange=(value)=> {
    this.props.dispatch({
      type:'footModel/setSecondsIndex3Loop', 
      value:value
    })
  }
  secondIndex4OnChange=(value)=> {
    console.log(value)

    this.props.dispatch({
      type:'footModel/setSecondsChangeIndex4', 
      value:value
    })
  }


  render() {

    var items = [];
    for (var i = 0; i < sixty.length; i++) {
      const value=sixty[i];
        items.push(
           <Col span={3} key={value}><Checkbox value={value} key={value} className={styles.radioMargin} >
          {value}</Checkbox>
          </Col>);            //这里父组件Examines，嵌套了子组件<OnTask/>
    }
    
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
  
  const {footSeconds}=this.props;

    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className={styles.radioMargin}>每秒允许的通配符</Radio>
        <Radio style={radioStyle} value={2} className={styles.radioMargin}>周期从
        &nbsp;
        <InputNumber min={0} max={59} defaultValue={footSeconds.index2.start} className={mainStyles.InputNumber} onChange={this.secondIndex2StartOnChange}/>
          &nbsp;
           到
           &nbsp;
        <InputNumber min={0} max={59} defaultValue={footSeconds.index2.end}  onChange={this.secondIndex2EndOnChange}/>
          &nbsp;
            秒
        </Radio>
        <Radio style={radioStyle} value={3} className={styles.radioMargin}>
          从&nbsp;
          <InputNumber min={0} max={59} defaultValue={footSeconds.index3.start} onChange={this.secondIndex3StartOnChange}/>
          &nbsp;
          秒开始，每
          &nbsp;
          <InputNumber min={0} max={59} defaultValue={footSeconds.index3.loop} onChange={this.secondIndex3LoopOnChange}/>
          &nbsp;
          秒执行一次

        </Radio>
        <Radio style={radioStyle} value={4} className={styles.radioMargin}>
        指定
          <Layout>
            
            <Row>
            <Col span={1}></Col>
            <Col span={15}>
            <Checkbox.Group style={{ width: '100%' }} onChange={this.secondIndex4OnChange}>
              <Row>

                {items}
               
              </Row>
            </Checkbox.Group>
            </Col>
            <Col span={8}></Col>
            </Row>
          </Layout>
        </Radio>


      </RadioGroup>
    );
  }
}

function mapStateToProps(state) {
  const { footSeconds} = state.footModel;


  return {
    footSeconds
  };
}
export default connect(mapStateToProps)(SecondsComponent)

