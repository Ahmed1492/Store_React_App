import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { SingleProuct } from "./component/singleProduct/SingleProuct";
import { NavBar } from "./component/navBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<SingleProuct />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
