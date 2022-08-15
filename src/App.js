import React from "react";
import Element from "./components/Element";
import Line from "./components/Line";
import Node from "./components/Node";

function App() {
  const [anime,isAnime] = React.useState(true);
  const [arr,setArr] = React.useState([1]);
  const hanleClick = ()=>{
    isAnime(false);
  }
  const pop = () =>{
    const newArr = [...arr,arr.length+1];
    setArr(newArr)
    isAnime(false);
  }
  return (
    <div className="md:flex h-screen justify-center items-center min-w-full">
      <Node/>
      {arr.map((arr) =>
        <>
          <Element value={arr}/>
        </>
      )}
    
      <button onClick={()=>pop()} className="p-4 border border-blue ">POP</button>
      <button onClick={()=>hanleClick()} className="p-4 border border-blue ">Press</button>
    </div>
  );
}

export default App;
