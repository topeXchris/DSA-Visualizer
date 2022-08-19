import React from "react";
import Element from "./components/Element";
import Line from "./components/Line";
import Node from "./components/Node";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainPages from "./pages/MainPages";

function App() {
  const [arr,setArr] = React.useState([1]);

  const pop = () =>{
    const newArr = [...arr,arr.length+1];
    setArr(newArr)
  }
  return (
    <div>
      <Header/>
      <div className="md:flex justify-center m-8">
        <MainPages/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
