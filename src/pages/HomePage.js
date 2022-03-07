import About from "../components/About";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import ProductListPage from "./ProductListPage";

function HomePage() {
  return (
    <div>
      <Hero />

      <section id="products">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <h2>Products</h2>
            <ProductListPage />
          </div>
        </div>
      </section>

      <About />

      <Faq />
    </div>
  );
}

export default HomePage;
