import {Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Index } from "./pages/home"
import { AdminRoutes } from "./pages/(log-in)/admin/adminRoute"
function App() {

  return (
    <Router>
      <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/admin/*" element={<AdminRoutes/>}></Route>
        
      </Routes>
      </div>
    </Router>
  )
}

export default App