import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<ProductListPage />} />

        <Route
          path="/products/create"
          element={
            <IsPrivate>
              <AddProductPage />
            </IsPrivate>
          }
        />

        <Route path="/products/:id" element={<ProductDetailsPage />} />

        <Route
          path="/products/edit/:id"
          element={
            <IsPrivate>
              <EditProductPage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
