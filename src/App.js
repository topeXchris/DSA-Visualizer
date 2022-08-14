import React from "react";
import Element from "./components/Element";
import Line from "./components/Line";
import Node from "./components/Node";

function App() {
  const [anime,isAnime] = React.useState(false);
  const hanleClick = ()=>{
    isAnime(!anime);
  }
  return (
    <div className="md:flex h-screen justify-center items-center min-w-full">
      <Node/>
      <Line animate={anime}/>
      <Node/>
      <Line animate={anime}/>
      <Node/>
      <Element/>
      <button onClick={()=>hanleClick()} className="p-4 border border-blue ">Press</button>
    </div>
  );
}

export default App;
