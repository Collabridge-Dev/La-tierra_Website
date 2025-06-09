import React from 'react'

function Footer() {
  return (
    <div> {/*  <!-- FOOTER START --> */}
    <footer className="site-footer footer-large footer-dark footer-wide">
        {/* <!-- FOOTER BLOCKES START --> */}            
      {/*   <!-- FOOTER BLOCKES START -->   */}
        <div className="footer-top overlay-wraper">
            <div className="overlay-main"></div>
            <div className="container">
                <div className="row">
                   {/*  <!-- ABOUT COMPANY --> */}
                    <div className="col-lg-6 col-md-6 col-sm-6">  
                        <div className="widget widget_about">
                           {/*  <!--<h4 className="widget-title">About Company</h4>--> */}
                            <div className="logo-footer clearfix p-b15">
                                <a href="/"><img src="images/WHITE - LA-TIERRA INFRA - 50.png" alt="" style={{minWidth:'280px', height:'180px'}}/></a>
                            </div>
                            <p className="max-w400">Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>                                 
                            <ul className="social-icons mt-social-links">
                                {/* Add target="_blank" to open links in a new tab */}
                                 <li><a href="https://www.instagram.com/la_tierra_infra?igsh=bHBvcXY3dXVuNWE2" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"></a></li>
                                <li><a href="https://www.facebook.com/" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"></a></li>
                                <li><a href="https://twitter.com/" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a></li>
                                <li><a href="https://in.linkedin.com/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a></li>
                            </ul>                                     
                        </div>
                    </div> 

                    {/*   <!-- USEFUL LINKS --> */}
                    <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                        <div className="widget widget_services inline-links">
                            <h4 className="widget-title">Useful links</h4>
                            <ul>
                                <li><a href="About" target="_blank" rel="noopener noreferrer">About</a></li>
                                <li><a href="Project" target="_blank" rel="noopener noreferrer">Projects</a></li>
                                <li><a href="Contact" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                            </ul>
                        </div>                           
                    </div>
                    
                  {/*   <!-- RESENT POST --> */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="widget widget_address_outer">
                            <h4 className="widget-title">Contact Us</h4>
                            <ul className="widget_address">
                                <li>#309, B-block, Asian Sun City, Kondapur, HYD</li>
                                <li>info@la-tierrainfra.com</li>
                                <li>(+91) 994 994 0333</li>
                            </ul>
                        </div>                                              	
                    </div>                          
                    
                  


                </div>
            </div>  
        </div>
        {/* <!-- FOOTER COPYRIGHT --> */}
        <div className="footer-bottom overlay-wraper">
            <div className="overlay-main"></div>
            <div className="container">
                <div className="row">
                    <div className="mt-footer-bot-center">
                        <span className="copyrights-text">© 2025 La-tierra Infra</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   {/*  <!-- FOOTER END --> */}
    </div>
  )
}

export default Footer
