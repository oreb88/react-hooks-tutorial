import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import Info from "./Info";
import {useState} from "react";
import CounterOfReducer from "./CounterOfReducer";
import InfoOfReducer from "./InfoOfReducer";
import Average from "./Average";

function App() {

    const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      {/*<Counter/>*/}

        {/*<button onClick={()=>{*/}
        {/*    setVisible(!visible);*/}
        {/*}}>*/}
        {/*    {visible ? '숨기기' : '보이기'}*/}
        {/*</button>*/}
        {/*<hr/>*/}
        {/*{visible ? <Info/> : null}*/}

        {/*<CounterOfReducer/>*/}
        {/*<InfoOfReducer/>*/}
        <Average></Average>

    </div>
  );
}

export default App;
