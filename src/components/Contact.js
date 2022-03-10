function Contact() {
  return (
    <section id="contact" className="text-white">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold lh-1 mb-3">
              Connect <span className="text-success">With Us</span>
            </h2>
            <p className="lead">
              If you have any questions, don't hesitate to send a message!
            </p>
            <form id="contactForm">
              <div className="mb-3">
                <label className="form-label my-1" htmlFor="name">
                  Name
                </label>
                <input className="form-control" id="name" type="text" />
              </div>

              <div className="mb-3">
                <label className="form-label my-1" htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  className="form-control"
                  id="emailAddress"
                  type="email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label my-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                ></textarea>
              </div>

              <div className="d-grid gap-2 col-4 mx-auto">
                <button
                  className="btn btn-success text-primary fw-bold btn-lg mt-5"
                  type="submit"
                >
                  Send
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
