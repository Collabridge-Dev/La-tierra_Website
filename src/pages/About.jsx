import React from 'react'

function About() {
  return (
    <div>  
        {/*  <!-- CONTENT START --> */}
    <div class="page-content">
    
{/*         <!-- INNER PAGE BANNER --> */}
        <div class="mt-bnr-inr overlay-wraper bg-parallax bg-top-center"  data-stellar-background-ratio="0.5"  style={{backgroundImage:"url('/images/webimgs/111.jpg')"}}>
            <div class="overlay-main bg-black opacity-07"></div>
            <div class="container">
                <div class="mt-bnr-inr-entry">
                    <div class="banner-title-outer">
                        <div class="banner-title-name">
                            <h2 class="m-b0">Creating quality urban lifestyles, building stronger communities.</h2>
                        </div>
                    </div>
                 {/*    <!-- BREADCRUMB ROW -->     */}                        
                    
                        <div>
                            <ul class="mt-breadcrumb breadcrumb-style-2">
                                <li><a href="/">Home</a></li>
                                <li>About </li>
                            </ul>
                        </div>
                    
                  {/*   <!-- BREADCRUMB ROW END -->   */}                      
                </div>
            </div>
        </div>
  {/*       <!-- INNER PAGE BANNER END --> */}
         

        {/* <!-- ABOUT COMPANY SECTION START --> */}
<div className="section-full p-t80 p-b80 bg-white inner-page-padding section-space">
    <div className="container">
        {/* <!-- TITLE START --> */}
        <div className="section-head">
            <div className="mt-separator-outer separator-left">
                <div className="mt-separator">
                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 site-text-primary">About</span> Company</h2>
                </div>
            </div>
        </div>                   
        {/* <!-- TITLE END --> */}
        <div className="section-content ">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="m-about">
                        <div className="owl-carousel about-us-carousel">
                            {/* <!-- COLUMNS 1 --> */}
                            <div className="item">
                                <div className="ow-img">
                                    <a href="About"><img src="/images/webimgs/39.jpg" alt=""/></a>
                                </div>
                            </div>
                            {/* <!-- COLUMNS 2 --> */}
                            <div className="item">
                                <div className="ow-img">
                                    <a href="About"><img src="/images/webimgs/35.jpg" alt=""/></a>
                                </div>
                            </div>
                            {/* <!-- COLUMNS 3 --> */}
                            <div className="item">
                                <div className="owl-img">
                                    <a href="About"><img src="/images/webimgs/38.jpg" alt=""/></a>
                                </div>
                            </div>
                            {/* <!-- COLUMNS 4 --> */}
                            <div className="item">
                                <div className="ow-img">
                                    <a href="About"><img src="/images/webimgs/37.jpg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                        
                <div className="col-lg-7 col-md-12">
                    <div className="m-about-containt text-black">
                        <div className="m-about-years bg-moving" style={{backgroundImage: "url('images/background/line.png')"}}>
                            <span className="site-text-primary large-title">10</span>
                            <span className="large-title-info">Years of Experience</span>
                        </div>
                        <h3 className="font-weight-600">Improving quality of life with an integrated unified approach.</h3>
                        <p style={{ textAlign: "justify", whiteSpace: "pre-wrap" }}>At La-Tierra Infra, our mission and vision are deeply rooted in the belief that everyone deserves access to high-quality living. We are passionate about building homes that redefine the concept of affordable elegance, where comfort, style, and quality come together seamlessly.</p>
                        <div className="author-info p-t20">
                            {/* <div className="author-signature">
                                <img src="images/Signature%2bBlack.png" alt="Signature" width="150"/>
                            </div> */}
                            {/* <div className="author-name">
                                <h4 className="m-t0">Suresh Kapa</h4>
                                <p> Founder & CEO</p>
                                
                            </div> */}
                            <a href="Contact" className="site-button btn-effect m-b15"><span>Get in touch</span></a>                                        
                        </div>
                    </div>
                </div>                           
            </div>
        </div>
    </div>
</div>   
{/* <!-- ABOUT COMPANY SECTION END --> */}

        {/* 
        <!-- OUR SPECIALLIZATION START --> */}
        <div class="section-full specialization-wrap1 p-t80 p-b50 bg-white bg-repeat square_shape2 inner-page-padding"  style={{backgroundImage:"url('images/background/ptn-1.png')"}}>

            <div class="container">

   {/*              <!-- TITLE START --> */}
                <div class="section-head">
                    <div class="mt-separator-outer separator-left">
                        <div class="mt-separator">
                            <h2 class="text-uppercase sep-line-one "><span class="font-weight-300 site-text-primary">Our</span> Speciallization</h2>
                        </div>
                    </div>
                </div>                   
                {/* <!-- TITLE END -->  */}
 
        {/*         <!-- IMAGE CAROUSEL START --> */}
                <div class="section-content">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                
                                <div class="mt-icon-box-wraper m-b30">
                                    <div class="relative icon-count-2 bg-gray p-a30 p-tb50">
                                        <span class="icon-count-number">1</span>
                                        <div class="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                                            <span class="icon-cell"><img src="images/icon/crane-1.png" alt=""/></span>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="mt-tilte m-b25">Building <br/>Construction</h4>
                                            <p >We deliver high-quality construction services focused on safety, durability, and timely completion.</p>
                                           
                                        </div>
                                    </div>
                                </div>                            	
                                
                            </div>
                            
                            <div class="col-lg-3 col-md-6">
                                
                                <div class="mt-icon-box-wraper m-b30">
                                    <div class="relative icon-count-2 bg-gray p-a30 p-tb50">
                                        <span class="icon-count-number">2</span>
                                        <div class="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                                            <span class="icon-cell"><img src="images/icon/renovation.png" alt=""/></span>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="mt-tilte m-b25">Building <br/>Renovation</h4>
                                            <p>We transform outdated buildings into modern, functional spaces while preserving their charm.</p>
                                         
                                        </div>
                                    </div>
                                </div>                            	
                                
                            </div>

                            <div className="col-lg-3 col-md-6">
                                
                                <div className="mt-icon-box-wraper m-b30">
                                    <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                        <span className="icon-count-number">3</span>
                                        <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                                            <span className="icon-cell"><img src="images/icon/compass.png" alt=""/></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte m-b25">Architecture<br/>Design</h4>
                                            <p>Our innovative designs combine aesthetics and functionality, focusing on sustainability and space.</p>
                                           
                                        </div>
                                    </div>
                                </div>                            	
                                
                            </div>	

                            <div className="col-lg-3 col-md-6">
                                
                                <div className="mt-icon-box-wraper m-b30">
                                    <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                        <span className="icon-count-number">4</span>
                                        <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                                            <span className="icon-cell"><img src="images/icon/planning.png" alt=""/></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte m-b25">Interior <br/>Design</h4>
                                            <p>We create customized interior spaces that reflect your unique style and meet your specific needs.</p>
                                         
                                        </div>
                                    </div>
                                </div>                            	
                                
                            </div>											
                                                                                     
                        </div>
                </div>
            </div>
            
         </div>   
{/*         <!-- OUR SPECIALLIZATION END -->           */}   

{/*         <!-- OUR TEAM START --> */}        
        <div class="section-full our-team-4-wrap p-t80 p-b50 bg-white inner-page-padding">
            <div class="container">
            
{/*                 <!-- TITLE START --> */}                
                <div class="section-head">
                    <div class="mt-separator-outer separator-center">
                        <div class="mt-separator">
                            <h2 class="text-uppercase sep-line-one "><span class="font-weight-300 site-text-primary">Our</span> Team</h2>
                        </div>
                    </div>
                </div>                  
            
                    {/*  <!-- TITLE END -->     */}           
 
               {/*  <!-- IMAGE Team START --> */}
                <div class="section-content">
                    <div class="row d-flex justify-content-center">
                    
                        <div class="col-lg-4 col-md-6 m-b30">
                        
                            <div class="our-team-1 hover-animation-1">
                              <div class="profile-image scale-in-center"><img src="/images/webimgs/sureshnew.png" alt="" /></div>
                              <div class="figcaption">
                                <h4>Suresh Kapa </h4>
                                <h5>Ceo & Founder</h5>
                                {/* <div class="icons">
                                    <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
                                    <a href="https://twitter.com/"> <i class="fa fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/"> <i class="fa fa-instagram"></i></a>
                                    <a href="https://rss.com/"><i class="fa fa-rss"></i></a>
                                    <a href="https://www.youtube.com/"> <i class="fa fa-youtube"></i></a>
                                    <a href="https://in.linkedin.com/"> <i class="fa fa-linkedin"></i></a>  
                                </div> */}
                              </div>
                              
                        </div>
                        </div>                            
                        
                        <div class="col-lg-4 col-md-6 m-b30">
                            <div class="our-team-1 hover-animation-1">
                              <div class="profile-image scale-in-center"><img src="/images/webimgs/mahesh-kapa.png" alt="" /></div>
                              <div class="figcaption">
                                <h4>Mahesh Kapa </h4>
                                <h5>COO </h5>
                                {/* <div class="icons">
                                    <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
                                    <a href="https://twitter.com/"> <i class="fa fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/"> <i class="fa fa-instagram"></i></a>
                                    <a href="https://rss.com/"><i class="fa fa-rss"></i></a>
                                    <a href="https://www.youtube.com/"> <i class="fa fa-youtube"></i></a>
                                    <a href="https://in.linkedin.com/"> <i class="fa fa-linkedin"></i></a>  
                                </div> */}
                              </div>
                              
                        </div>                            	
                        </div>
                        
                        
                                                    
         
                    </div>
                </div>
            </div>
            
         </div>                  
{/*         <!-- OUR TEAM END --> */}
        
                  
        
    </div>
    {/* <!-- CONTENT END --> */}
    </div>
  )
}

export default About