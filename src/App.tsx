import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Layout from "./containers/layout/layout";

function App() {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />}/>
      </Route>
    </Routes>
  )
}

export default App
