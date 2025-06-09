import React from 'react';

function Contact() {
  return (
    <div>
      {/* CONTENT START */}
      <div className="page-content">
        
        {/* INNER PAGE BANNER */}
        <div className="mt-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url('images/Webimgs/64.jpg')" }}>
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="mt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="m-b0">Putting a plan to action, to assure your satisfaction!</h2>
                </div>
              </div>
              <div>
                <ul className="mt-breadcrumb breadcrumb-style-2">
                  <li><a href="/">Home</a></li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION CONTENT START */}
        <div className="section-full p-tb80 inner-page-padding">
          <div className="container">
            <div className="section-content">
              {/* CONTACT FORM */}
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <form className="contact-form cons-contact-form" method="post" action="#">
                    <div className="contact-one m-b30">
                      <div className="section-head">
                        <div className="mt-separator-outer separator-left">
                          <div className="mt-separator">
                            <h2 className="text-uppercase sep-line-one ">
                              <span className="font-weight-300 site-text-primary">Get</span> In touch
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="contact-one-inner">
                        <div className="form-group">
                          <input name="username" type="text" required className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                          <input name="email" type="text" className="form-control" required placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <textarea name="message" rows="4" className="form-control" required placeholder="Message"></textarea>
                        </div>
                        <div className="text-right">
                          <button name="submit" type="submit" value="Submit" className="site-button btn-effect">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="col-lg-4 col-md-12">
                  <div className="contact-info m-b30">
                    <div className="section-head">
                      <div className="mt-separator-outer separator-left">
                        <div className="mt-separator">
                          <h2 className="text-uppercase sep-line-one">
                            <span className="font-weight-300 site-text-primary">Contact</span> Info
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="contact-one-inner-right site-bg-dark text-white">
                      <div className="mt-icon-box-wraper left p-b40">
                        <div className="icon-xs"><i className="fa fa-phone"></i></div>
                        <div className="icon-content">
                          <p>(+91) 994 994 0333</p>
                        </div>
                      </div>

                      <div className="mt-icon-box-wraper left p-b40">
                        <div className="icon-xs"><i className="fa fa-envelope"></i></div>
                        <div className="icon-content">
                          <p>info@la-tierrainfra.com</p>
                        </div>
                      </div>

                      <div className="mt-icon-box-wraper left">
                        <div className="icon-xs"><i className="fa fa-map-marker"></i></div>
                        <div className="icon-content">
                          <p>#309, 3rd Floor, B Block, Asian Sun City, Kondapur,Hyderabad - 500084</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map iframe (without API key) */}
            <div className="gmap-outline">
              <div className="google-map" style={{ width: '100%' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.0110177707516!2d78.36179750554913!3d17.458659391922055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ba498848bb%3A0x303970602aeb124c!2sAsian%20Sun%20City!5e0!3m2!1sen!2sin!4v1726227658392!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}
                  title="Google Map"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* CONTENT END */}
    </div>
  );
}

export default Contact;
