import About from "../components/About";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import ProductListPage from "./ProductListPage";

function HomePage() {
  return (
    <div>
      <Hero />

      <ProductListPage />

      <About />

      <Faq />
    </div>
  );
}

export default HomePage;
