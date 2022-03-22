import * as React from "react"

import Sidebar from "../components/Sidebar"

const columns = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100vw",
  height: "100vh",
}

const sidebar = {
  flex: "20%",
  backgroundColor: "lightskyblue",
}

const content = {
  flex: "80%",
}

const App = () => {
  return (
    <div style={columns}>
     <div style={sidebar}>
       <Sidebar />
     </div>
     <div style={content}>
       Column 2
    </div>
  </div>
  )
}

export default App
