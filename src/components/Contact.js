import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="contact-bg pt-3" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-white section-header text-center pb-2">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 p-0 pt-4 pb-4 ps-5">
              <form
                action="https://formspree.io/f/mbjvlley"
                method="POST"
                class="bg-transparent p-4.m-auto"
              >
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <input
                        type="text"
                        name="full name"
                        class="form-control"
                        required
                        placeholder="Your Full Name...."
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        required
                        placeholder="Your Email Here...."
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <textarea
                        rows="5"
                        name="message"
                        required
                        class="form-control"
                        placeholder="Your Feedback here"
                      ></textarea>
                    </div>
                  </div>

                  <button class="btn-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
