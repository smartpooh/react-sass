import React, { useState } from "react";
import './App.scss'
import Dashboard from 'containers/Dashboard'
import SideBar from 'components/Sidebar'
import { isMobile, browserName } from "react-device-detect";

const App = () => {

  // create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(isMobile);



  return (
    <div className="root" data-test="root">
      <SideBar menuCollapse={menuCollapse} setMenuCollapse={setMenuCollapse} />
      <Dashboard menuCollapse={menuCollapse} />
    </div>
  )
}

export default App
