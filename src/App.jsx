import React from "react";
import './App.css'
import Jsxinfo from "./Components/Jsxinfo";
import Com from "./Components/Com";
import Props from "./Components/Props";
import Events from "./Components/Events";
import Conditionals from "./Components/Conditionals";
import List from "./Components/List";
import Forms from "./Components/Forms";
import Routing from "./Components/Routing";
import Home from "./Css Styling/Home";
import HomeSASS from "./SASS Styling/HomeSASS";
import Hooks from "./Hooks/Hooks";
import UseState from "./Hooks/UseState";
import UseState2 from "./Hooks/UseState2";
import UseState3 from "./Hooks/UseState3";
import UseEffect from "./Hooks/UseEffect";
import UseEffect2 from "./Hooks/UseEffect2";
import Forms2 from "./Components/Forms2";
import Memo from "./Components/Memo";
import UseContext from "./Hooks/UseContext";
import UseEffect3 from "./Hooks/UseEffect3";
import UseEffect4Example from "./Hooks/UseEffect4Example";
import FetchAPI from "./API/FetchAPI";
import FetchAPI2 from "./API/FetchAPI2";
import FetchAPI3 from "./API/FetchAPI3";
import UseMemo from "./Hooks/UseMemo";
import UseRef from "./Hooks/UseRef";
import UseReducer from "./Hooks/UseReducer";
import UseReducer2 from "./Hooks/UseReducer2";
import UseCallback from "./Hooks/UseCallback";
import Axios from "./API/Axios";
import AxiosPost from "./API/AxiosPost";
import AxiosPut from "./API/AxiosPut";
import AxiosDelete from "./API/AxiosDelete";
import HomeRedux from "./REDUX/HomeRedux";
import { useSelector } from "react-redux";
import SpreadOperator from "./More Topics/SpreadOperator";
import Destructuring from "./More Topics/Destructuring";
import LifeCycleMethods from "./LifeCycle Methods/LifeCycleMethods";
import CodeSplitting from "./Debounce/CodeSplitting";
import Debounce from "./Debounce/Debounce";
import ToggleSwitch from "./REDUX/ExampleTwo/ToggleSwitch";


function App() {
  //useSelector is used to access value from the state
  const c=useSelector(state=>state.custom.c)
  const {switchValue}=useSelector(state=>state.switchExample)
  return (
    <>
      {/* <h1>Inside App.jsx</h1> */}
        
      {/*used to explain JSX */}
      {/* <Jsxinfo/> */}

      {/*used to explain components */}
      {/* <Com/>  */}

      {/*used to explain props */}
      {/* <Props/>  */}


      {/*used to explain Events */}
      {/* <Events />    */}

      {/*used to explain conditionals on components*/}
      {/* <Conditionals/> */}

      {/*use to explain Map() and key | looping on list */}
      {/* <List/> */}

      {/*used to explain forms in react */}
      {/* <Forms/> */}
      {/* <Forms2/> */}

      {/*used to explain routing: explained in notebook and on pdf*/}
      {/* <Routing/> */}

      {/*this component is inside Css Styling*/}
      {/* <Home/> */}

      {/*this component is inside SASS Styling*/}
      {/* <HomeSASS/>  */}

      {/*used to explain memo */}
      {/* <Memo/> */}

      {/* used to explain API calls using fetch and axios */}
      {/* <FetchAPI/> */}
      {/* <FetchAPI2/> */}
      {/* <FetchAPI3/> */}

      {/* <Axios /> */}
      {/* <AxiosPost/> */}
      {/* <AxiosPut/> */}
       {/* <AxiosDelete/>  */}

      {/*used to explain hooks */}
      {/* hooks basic intro here and also data binding */}
      {/* <Hooks/>  */}
    
      {/* <UseState/> */}
      {/* <UseState2/> */}
      {/* <UseState3/> */}

      {/* <UseEffect/> */}
      {/* <UseEffect2/> */}
      {/* <UseEffect3/> */}
      {/* <UseEffect4Example/> */}

      {/* <UseMemo /> */}
      {/* <UseRef/> */}

      {/* <UseContext/> */}

      {/* <UseReducer/> */}
      {/* <UseReducer2/> */}

      {/* <UseCallback/> */}


      {/*these are in REDUX folder */}
      {/* <h1>inside App.jsx, c= {c}</h1> */}
      {/* <HomeRedux/> */}
      {/*another basic redux example */}
      {/* <h2>Value of Switch in App.jsx={switchValue?"ON":"OFF"}</h2> */}
      {/* <ToggleSwitch/> */}
      
      {/*these are in More Topics folder */}
       {/* <SpreadOperator/>  */}
      <Destructuring/>


      {/*React Lifecycle Methods */}
      {/* <LifeCycleMethods/> */}

      {/*used to explain debounce,code splitting and other things */}
      {/* <CodeSplitting/> */}
      {/* <Debounce/> */}

    </>
  );
}
export default App;
