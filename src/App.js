import { BrowserRouter as Router , Route ,Routes } from "react-router-dom";
import Home from "./components/Home";
import Graphs from "./components/Graphs";



function App() {
  return (
    <div>
      <Router>
        <Routes>
       
          <Route path="/"  element={<Home/>}/>
          <Route path="/graphs"  element={<Graphs/>}/>
         
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
