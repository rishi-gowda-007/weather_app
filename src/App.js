import Nav from "./Components/nav";
import Herosection from "./Components/herosection";
import Search_bar from "./Components/search_bar";
import Weather_result from "./Components/Weather_result";
import Hamburger from "./Components/Hamburger";
import React,{ useState } from "react";
function App() {
  const [Result,setResult] = useState();
  const [ham,setHam] = useState(false);
  return (
    <div className="App">
      <Nav ham={ham} setHam={setHam}></Nav>
      <Herosection></Herosection>
      <Search_bar setResult={setResult}/>
      <Weather_result result={Result} />
      <Hamburger ham={ham} setHam={setHam}></Hamburger>
    </div>
  );
}

export default App;
