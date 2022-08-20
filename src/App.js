import React from "react";
import Element from "./components/Element";
import Line from "./components/Line";
import Node from "./components/Node";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainPages from "./pages/MainPages";
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
