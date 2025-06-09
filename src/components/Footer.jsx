import React from 'react';

function Footer() {
  return (
    <>
      <style>{`
        .address-link:hover {
          color: #F5BF23 !important;
        }
      `}</style>
      <div>
        {/* FOOTER START */}
        <footer className="site-footer footer-large footer-dark footer-wide">
          {/* FOOTER BLOCKS START */}
          <div className="footer-top overlay-wraper" style={{ paddingTop: '20px' }}>
            <div className="overlay-main"></div>
            <div className="container">
              <div className="row" style={{ alignItems: 'center' }}>
                {/* ABOUT COMPANY */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="widget widget_about">
                    <div className="logo-footer clearfix p-b15">
                      <a href="/">
                        <img
                          src="images/WHITE - LA-TIERRA INFRA - 50.png"
                          alt=""
                          style={{ minWidth: '280px', height: '180px' }}
                        />
                      </a>
                    </div>
                    <p className="max-w400">
Crafting exceptional spaces with passion, precision, and purpose — La-Tierra Infra, where your dream home begins.
                    </p>
                    <ul className="social-icons mt-social-links">
                      <li>
                        <a
                          href="https://www.instagram.com/la_tierra_infra?igsh=bHBvcXY3dXVuNWE2"
                          className="fa fa-instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="fa fa-facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/la-tierra-infra"
                          className="fa fa-linkedin"
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* USEFUL LINKS */}
                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                  <div className="widget widget_services inline-links">
                    <h4 className="widget-title">Useful links</h4>
                    <ul>
                      <li>
                        <a href="About" target="_blank" rel="noopener noreferrer">About</a>
                      </li>
                      <li>
                        <a href="Project" target="_blank" rel="noopener noreferrer">Projects</a>
                      </li>
                      <li>
                        <a href="Contact" target="_blank" rel="noopener noreferrer">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CONTACT US */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget widget_address_outer">
                    <h4 className="widget-title">Contact Us</h4>
                    <ul className="widget_address">
                      <li>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=%23309,+B-block,+Asian+Sun+City,+Kondapur,+HYD"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="address-link"
                          style={{ color: "#999999" }}
                        >
                          #309, B-block, Asian Sun City, Kondapur, HYD
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:info@la-tierrainfra.com"
                          className="address-link"
                          style={{ color: "#999999" }}
                        >
                          info@la-tierrainfra.com
                        </a>
                      </li>
                      <li>
                        <a
                          href="tel:+919949940333"
                          className="address-link"
                          style={{ color: "#999999" }}
                        >
                          (+91) 994 994 0333
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FOOTER COPYRIGHT */}
         <div className="footer-bottom overlay-wraper">
  <div className="overlay-main"></div>
  <div className="container">
    <div className="row">
      <div className="mt-footer-bot-center" style={{ marginTop: '8px' }}>
        <span className="copyrights-text">
          © 2025 La-tierra Infra
        </span>
      </div>
    </div>
  </div>
</div>
        </footer>
        {/* FOOTER END */}
      </div>
    </>
  );
}

export default Footer;