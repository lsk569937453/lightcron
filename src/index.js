import dva from 'dva';
import './index.css';



// 1. Initialize
const app = dva({
    initialState: { 
    footModel:{ footSeconds: {
        index:0,value:'st'

    }}
 
  }
}
  
);

app.model(require("./models/footModel").default);

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
