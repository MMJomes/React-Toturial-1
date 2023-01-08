import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Shared/Layout";
import AddFruit from "./pages/AddFruit";
import AllFruits from "./pages/AllFruits";
import UpdateFruit from "./pages/UpdateFruit";

function App() {
  return <Layout>
    <Routes>
      <Route path="/" element={<AllFruits></AllFruits>}></Route>
      <Route path="/add-fruits" element={<AddFruit></AddFruit>}></Route>
      <Route path="/update-fruit/:id" element={<UpdateFruit />}></Route>

    </Routes>
  </Layout> 
}

export default App;