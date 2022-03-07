function About() {
    return (
      <section id="about" className="bg-light">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">About us</h1>
              <p className="lead">Swap, sell and buy games with players all across the county!</p>
              <p className="lead">Swap free, just pay shipping to swap a game you are no longer playing in exchange for another player's game that you want. Once a swap offer is accepted, both players just ship out their game. It's that easy!</p>
              <p className="lead">Just create your Listing to swap or sell, and let the offers roll in!</p>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps-now-may-featured-image-block-02-en-17may21?$native--t$" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;