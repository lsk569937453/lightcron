let concatUtils = {
  concatCron(state) {
    const footSeconds=state.footSeconds.value;
    const result=footSeconds+' '+state.footMinutes.value;
    result=result+' '+state.footHours.value;
    result=result+' '+state.footDays.value;
    result=result+' '+state.footMonths.value;
    result=result+' '+state.footWeeks.value;
    result=result+' '+state.footYears.value;
    return result;

  }
}
export default {
  namespace: 'footModel',
  state: {
    footSeconds: {
      index: 0, value: 'default'
    },
    footMinutes:{
      index:0,value:'default'
    },
    footHours:{
      index:0,value:'default'
    },
    footDays:{
      index:0,value:'default'
    },
    footMonths:{
      index:0,value:'default'
    },
    footMonths:{
      index:0,value:'default'
    },
    footWeeks:{
      index:0,value:'default'
    },
    footYears:{
      index:0,value:'default'
    },
    defaultV:'*'
  },
  effects: {},
  subscriptions: {},
  reducers: {
    setSecond(state, action) { //这里的state是当前总的state，这里的action包含了上面传递的参数和type
      const index = action.payload.index;
      const value = action.payload.value;

      const footSeconds = {
        index: index,
        value: value
      }
      const defaultV=concatUtils.concatCron(state);



      return { ...state, footSeconds: footSeconds ,defaultV:defaultV};
    }

  }



};
