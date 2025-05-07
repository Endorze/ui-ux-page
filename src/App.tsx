import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/landing";

function App() {


  return (
    <Routes>
      <Route>
        <Route path="/" element={<Landing />}/>
      </Route>
    </Routes>
  )
}

export default App
