import *as ConcactUtils from "../utils/ConcactUtils"


let concatUtils = {
  
  concatCron(state) {
    const footSeconds=ConcactUtils.getSeconds(state.footSeconds);
    let result=footSeconds+' '+state.footMinutes.value;
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
      index1: 0, 
      index2:{start:1,end:2},
      index3:{start:3,loop:3},
      index4:[0],index:0

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
      state.footSeconds.index=index;

      
      const defaultV=concatUtils.concatCron(state);



      return { ...state,defaultV:defaultV};
    },
    setSecondsIndex2Start(state,action)
    {
      state.footSeconds.index2.start=action.value;
      const defaultV=concatUtils.concatCron(state);
      return {...state,defaultV:defaultV};
    },
    setSecondsIndex2End(state,action)
    {
      state.footSeconds.index2.end=action.value;
      const defaultV=concatUtils.concatCron(state);
      return {...state,defaultV:defaultV};
    },
    setSecondsIndex3Start(state,action)
    {
      state.footSeconds.index3.start=action.value;
      const defaultV=concatUtils.concatCron(state);
      return {...state,defaultV:defaultV};
    },
    setSecondsIndex3Loop(state,action)
    {
      state.footSeconds.index3.loop=action.value;
      const defaultV=concatUtils.concatCron(state);
      return {...state,defaultV:defaultV};
    },
    setSecondsChangeIndex4(state,action)
    {
      state.footSeconds.index4=action.value;
      const defaultV=concatUtils.concatCron(state);
      return {...state,defaultV:defaultV};
    }
  }



};
