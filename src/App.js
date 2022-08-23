import React from "react";
import Navigation from "./routes/Navigation";

function App() {
  const [arr,setArr] = React.useState([1]);

  const pop = () =>{
    const newArr = [...arr,arr.length+1];
    setArr(newArr)
  }
  return (
    <div>
      <Navigation/>
    </div>
  );
}

export default App;
