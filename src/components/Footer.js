import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="color pt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-12 col-lg-3">
              <div className="footer-logo pt-2">
                <a href="#">
                  <img className="footer-image" src="img/3.png" />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-12 col-lg-3 pt-3">
              <div className="opening-hr">
                <h4 className="footer-text">Opening Hours</h4>
                <ul className="footer-list">
                  <li className="footer-list-1">
                    Monday to Friday 9:00am - 4:00pm
                  </li>
                  <li className="footer-list-1"> Saturday 8:00am - 2:00pm</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-12 col-lg-3 pt-3">
              <div className="opening-hr-2">
                <h5 className="footer-text-1">Social Media Links</h5>
                <ul>
                  <li className="foot">
                    <a
                      className="foot"
                      href="https://www.instagram.com/veev_hub/"
                    >
                      <i class="bi bi-instagram"></i> Instagram
                    </a>
                  </li>
                  <li className="foot">
                    <a className="foot" href="https://wa.link/zfpo07">
                      <i class="bi bi-whatsapp"></i> WhatsApp
                    </a>
                  </li>
                  <li className="foot">
                    <a className="foot" href="mailto:veevhub01@gmail.com">
                      <i class="bi bi-envelope-fill"></i> Email-Address:
                      Veehub@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-12 col-lg-3">
              <div class="contact-2">
                <h5 class="footer-text-1">Contact Us</h5>
                <ul>
                  <li className="foot">
                    <a href="tel:09097741017" className="foot">
                      <i class="bi bi-telephone-fill"></i> Telephone No:
                      09097741017
                    </a>
                  </li>
                  <li className="foot">
                    <a href="/" className="foot">
                      <i className="bi bi-geo-alt-fill"></i> Location: Block 2,
                      Kwara drive, <br />
                      War college, Gwarimpa, Abuja.{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-white">All Rights Reserved @VeevHub</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
