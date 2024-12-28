//import React from 'react'

import Mainpages from "./pages/Mainpages";
import Mealinfo from "./pages/Mainpages";
import {Route,Routes} from 'react-router-dom';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Mainpages/>}/>
      <Route path=":mealid" element={<Mealinfo/>}/>
    </Routes>
  
  )
}

export default App;
