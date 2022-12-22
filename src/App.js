import React, {useState} from "react";
import MainPage from "./components/mainPage";
import {Loader} from './components/Loader'

function App() {
  const [load, setLoad] = useState(false);
  
  setTimeout(()=>{
    setLoad(true)
  },  1000);

  if (load === false){
    return <Loader/>
  }


  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}
export default App;
