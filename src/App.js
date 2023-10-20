import logo from './logo.svg';

import './App.css';
import Ecologist from './myEcologist';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

function App() {
  return (
   <HashRouter>
    <div>
      <Routes>
        <Route path="/" element={<Ecologist/>}></Route>
      </Routes>
    </div>
   </HashRouter>
  );
}

export default App;
