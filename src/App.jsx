// react-router components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from 'react'
import Home from './Components/Modules/Home/Home'
import NotFound from './Components/Modules/404/Notfound'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App