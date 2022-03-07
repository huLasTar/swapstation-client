function Contact() {
  return (
    <section id="contact" className="bg-ps">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12">
            <h1 className="display-5 fw-bold lh-1 mb-3">Contact</h1>
            <p className="lead">If you have any questions, reach out to us!</p>
            <form id="contactForm">
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  className="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="d-grid gap-2 col-4 mx-auto">
                <button className="btn btn-success btn-lg mt-5" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
