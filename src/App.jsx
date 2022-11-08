import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { IngredientsShowPage } from "./IngredientsShowPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { IngredientsNew } from "./IngredientsNew";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/ingredients" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/ingredients/new" element={<IngredientsNew />} />
            <Route path="/ingredients/:id" element={<IngredientsShowPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
