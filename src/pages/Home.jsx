// import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
    const [filter, setFilter] = useState('*');
    
    // Sample project data
  const projectData = [
  { imageSrc: "images/webimgs/RERA NO.png", title: "SILVER OAK RESIDENCES", location: "Tukkaguda", category: "cat-1", link: "/ProjectDetails" },
  { imageSrc: "images/webimgs/up_coming.jpg", title: "Villas", location: "Adibatla", category: "cat-2", link: "/Upcoming" },
  { imageSrc: "images/webimgs/up_coming.jpg", title: "High-Rise Residential", location: "Manchirevula", category: "cat-2", link: "/Upcoming" },
];

  
    // Filter handler
    const handleFilterChange = (category) => {
      setFilter(category);
    };
  
    // Filtering logic
    const filteredProjects = filter === '*' ? projectData : projectData.filter(project => project.category === filter);
  
    // Image container style
    const imageContainerStyle = {
      width: "100%",
      height: "450px",
      position: "relative",
      overflow: "hidden",
    };
  
    // Image style
    const imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    };
  
    // Figcaption style (text overlay)
    const figcaptionStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        zIndex: 2, // Ensure figcaption appears above the image
        fontSize: "24px", // Adjust this value to make the text larger or smaller
        fontWeight: "bold", // Optional: Makes the text bold
      };
  
    // Slider settings
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    // Data for slides
    const slidesData = [
      {
        image: "images/Webimgs/1-min.jpg",
        /* title: "Construction",
        description: "Engineering your dreams with us.", */
      },
      {
        image: "images/Webimgs/1-min1.jpg",
        /* title: "Architecture",
        description: "Life is Architecture.", */
      },
      /* {
        image: "images/Webimgs/1-min1.jpg",
      }, */
    ];
  return (
    <div> 
         {/* <!-- CONTENT START --> */}
    <div className="page-content">
    


             
     {/*  <!-- OUR SPECIALLIZATION START --> */}
     <div className="section-full mobile-page-padding our-speci_wrap bg-white p-t80 p-b30 bg-repeat square_shape1" 
     style={{ 
       backgroundImage: "url('images/background/bg-5.png')", 
       marginTop: '-33px' // Adjust this value as needed to move the section up
     }}>
  <div className="slider-container">
    <Slider {...sliderSettings}>
      {slidesData.map((slide, index) => (
        <div key={index} style={imageContainerStyle}>
          {/* Image for the slide */}
          <div className="image-container" style={{ position: 'relative' }}>
            <img src={slide.image} alt={slide.title} style={imageStyle} />
            {/* Text for the slide */}
            <div className="image-text" style={figcaptionStyle}>
              <h4>{slide.title}</h4>
              <p>{slide.description}</p>
              <a href="Projectdetail">
                <i className="link-plus site-bg-primary"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

{/*  <!-- OUR SPECIALLIZATION END -->  */}

        {/* <!-- ABOUT COMPANY START --> */}
        <div className="section-full  mobile-page-padding p-t80 p-b30 site-bg-dark bg-repeat square_shape2 bg-moving" style={{backgroundImage:"url('images/background/bg-6.png')"}}>
            <div className="container">
            {/*     <!-- TITLE START --> */}"
                <div className="section-head">
                    <div className="mt-separator-outer separator-center">
                        <div className="mt-separator">
                            <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 site-text-primary">About</span> Company</h2>
                        </div>
                    </div>
                </div>                   
              {/*   <!-- TITLE END -->  */}

                    <div className="section-content">
                        <div className="row">
                            <div className="col-lg-9 col-md-12">
                                   <div className="owl-carousel about-home owl-btn-vertical-center">
                                   {/*  <!-- COLUMNS 1 -->  */}
                                    <div className="item ">
                                        <div className="mt-img-effect zoom-slow">
                                            <a href="About"><img src="images/Webimgs/12.jpg" alt=""/></a>
                                       </div>
                                    </div>
                                  {/*   <!-- COLUMNS 2 -->  */}
                                    <div className="item ">
                                        <div className="mt-img-effect zoom-slow">
                                            <a href="About"><img src="images/Webimgs/7.jpg" alt=""/></a>
                                       </div>
                                    </div>
                                  {/*   <!-- COLUMNS 3 -->  */}
                                    <div className="item ">
                                        <div className="mt-img-effect zoom-slow">
                                            <a href="About"><img src="images/Webimgs/6.jpg" alt=""/></a>
                                       </div>
                                    </div>
                              {/*       <!-- COLUMNS 4 -->  */}
                                    <div className="item ">
                                        <div className="mt-img-effect zoom-slow">
                                            <a href="About"><img src="images/Webimgs/8.jpg" alt=""/></a>
                                       </div>
                                    </div>
                                   {/*  <!-- COLUMNS 5 -->  */}
                                    <div className="item ">
                                        <div className="mt-img-effect zoom-slow">
                                            <a href="About"><img src="images/Webimgs/9.jpg" alt=""/></a>
                                       </div>
                                    </div>                                                                                                                                                                
                               </div>
                               </div>
                            
                            <div className="col-lg-3 col-md-12">
                                <div className="about-home-right bg-white p-a30">
                                    <h3 className="m-t0"><span className="font-weight-100">Committed</span> to superior quality and  results.</h3>
                                    <p><strong>At the core of our ethos is a commitment to delivering premium quality within reach. We understand that true value lies in meticulous craftsmanship, attention to detail, and uncompromising standards of excellence. From design to construction, every aspect of our homes is crafted with utmost care and precision.</strong></p>
                                    <p>As we continue our journey, we remain dedicated to building not just homes, but living experiences that provide outstanding value without breaking the bank. </p>
                                    <div className="text-right">
                                        <a href="About" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
                                    </div>                                                    
                                </div>
                            </div>
                        </div>
                   </div>
             </div>
             <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                <strong>About</strong>
            </div>                
        </div>   
      {/*   <!-- ABOUT COMPANY END --> */}
        
      {/* <!-- OUR VALUE START --> */}
<div className="section-full mobile-page-padding p-t80 p-b50 bg-white our-valu-wrap" style={{ marginTop: '20px' }}>
    <div className="container">
        <div className="section-content">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    {/* <!-- TITLE START --> */}
                    <div className="section-head">
                        <div className="mt-separator-outer separator-left">
                            <div className="mt-separator">
                                <h2 className="text-uppercase sep-line-one">
                                    <span className="font-weight-300 site-text-primary">Our</span> Value
                                </h2>
                            </div>
                            <p>
                                We prioritize honesty, quality, and customer satisfaction, fostering a culture of creativity, collaboration, and continuous improvement to create living experiences that elevate the soul.
                            </p>
                        </div>
                    </div>
                    {/* <!-- TITLE END --> */}
                    <div className="author-info p-t20">
                        {/* <div className="author-signature">
                            <img src="images/Signature%2bBlack.png" alt="Signature" width="150" />
                        </div> */}
                        <div className="author">
                            <h4 className="m-t0">Suresh Kapa</h4>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                    
                </div>

                

                <div className="col-lg-5 col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginLeft:'120px',marginTop:'40px' }}>
                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper" style={{ backgroundImage: "url('images/video-bg.jpg')",height:'400px',width:'800px' }}>
                        <div className="overlay-main bg-black opacity-07"></div>
                        <div className="video-section-inner">
                            <div className="video-section-content">
                                <div className="video-section-left">
                                    <a href="https://player.vimeo.com/video/34741214?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" className="mfp-video play-now">
                                        <i className="icon fa fa-play"></i>
                                        <span className="ripple"></span>
                                    </a>
                                </div>
                                <div className="video-section-right">
                                    <a href="https://player.vimeo.com/video/34741214?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" className="mfp-video font-weight-600 text-uppercase">
                                        Video Presentation
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- OUR VALUE END --> */}
    
        
      {/*   <!-- OUR MISSION START --> */}
        <div className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" style={{backgroundImage:"url('images/left-men.png') url('images/background/bg-4.png')"}}>
            <div className="section-content">
                <div className="container">
                  {/*   <!-- TITLE START --> */}
                    <div className="section-head" style={{ marginTop: "10px" }}> 
                        <div className="mt-separator-outer separator-center">
                            <div className="mt-separator">
                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 site-text-primary">Mission</span> & Vision </h2>
                            </div>
                        </div>
                    </div>                  
                {/*     <!-- TITLE END --> */}
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{backgroundImage:"url('images/background/bg-site.png')", height:'462px'}}>
                                <h3 className="m-t0"> Mission</h3>
                                <p>At La-Tierra Infra, we’re dedicated to redefining luxury living by creating homes that blend comfort, elegance, and quality seamlessly. With meticulous craftsmanship and a commitment to excellence, we strive to make luxury living accessible to all, enriching lives and communities in the process.</p>
                                <ul className="list-angle-right anchor-line">
                                    {/* <li><a href="Project">Construction Management</a></li>
                                    <li><a href="Project">Pre Construction Services</a></li>
                                    <li><a href="Project">Contract Administration</a></li> */}
                                    {/* <li><a href="Project">Implementation</a></li>
                                    <li><a href="Project">Leed consultation</a></li> */}
                                </ul>
                                {/* <div className="text-right">
                                    <a href="About" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
                                </div> */}
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-mid bg-no-repeat bg-cover m-b30" style={{backgroundImage:"url('images/Webimgs/10.jpg')"}}></div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{backgroundImage:"url('images/background/bg-site.png')", height:'462px'}}>
                                <h3 className="m-t0"> Vision</h3>
                                <p>Our vision is to lead the industry in reshaping luxury living, setting new standards for affordability, innovation, and excellence. Through our dedication to quality and visionary design, we aim to inspire awe with every project, making luxury living attainable for everyone.</p>
                                <ul className="list-angle-right anchor-line">
                                    {/* <li><a href="Project">Construction Management</a></li>
                                    <li><a href="Project">Pre Construction Services</a></li>
                                    <li><a href="Project">Contract Administration</a></li> */}
                                    {/* <li><a href="Project">Implementation</a></li>
                                    <li><a href="Project">Leed consultation</a></li> */}
                                </ul>
                                {/* <div className="text-right">
                                    <a href="About" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
                                </div> */}
                            </div>
                        </div>                      
                        
                    </div>
                </div>
            </div>
            <div className="title-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
    <strong>Mission</strong>
  </div>  
  <div className="hilite-title text-right p-l50 text-uppercase text-pop-up-top" style={{ marginRight: "50px" }}>
    <strong>Vision</strong>
  </div>
</div>

                              
        </div>   
       {/*  <!-- OUR MISSION  END --> */}
       {/*  <!-- Our Portfolio Section Start --> */}
       <div className="portfolio-section mobile-page-padding custom-portfolio-wrap p-b50 new-shape-class">
  <div className="portfolio-content">
    <div className="portfolio-title-area p-t80 new-bg-class bg-moving" style={{ backgroundImage: "url('images/background/bg-6.png')" }}>
      <div className="container">
        {/* Title Section */}
        <div className="section-head" style={{ marginTop: "20px" }}>
          <div className="mt-separator-outer separator-center">
            <div className="mt-separator">
              <h2 className="text-uppercase sep-line-one">
                <span className="font-weight-300 site-text-primary">Our </span>Portfolio
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio Card Container */}
    <div className="portfolio-card-container">
      <div className="container">
        <div className="row">
          {/* Portfolio Card 1 */}
          <div className="col-lg-4 col-md-6 custom-card" style={{ marginBottom: "20px", paddingBottom: "30px" }}>
            <div className="portfolio-card-wrap" style={{ border: "1px solid #ccc", borderRadius: "12px", overflow: "hidden", height: "auto" }}>
              <div className="portfolio-card-body" style={{ padding: "0", backgroundColor: "#f7f7f7", height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Image Section with Hover Effect */}
                <div
                  className="image-container"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px"
                  }}
                  onMouseEnter={(e) => e.currentTarget.querySelector('.image-hover-overlay').style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.querySelector('.image-hover-overlay').style.opacity = 0}
                >
                  <img
                    src="images/gallery/villas.png.png"
                    alt="Building Construction"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  {/* Hover Effect */}
                  <div
                    className="image-hover-overlay"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      opacity: "0",
                      transition: "opacity 0.3s ease",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "bold",
                      padding: "10px",
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px"
                    }}
                  >
                    Villas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Card 2 (with hover effect) */}
          <div className="col-lg-4 col-md-6 custom-card" style={{ marginBottom: "20px", paddingBottom: "30px" }}>
            <div className="portfolio-card-wrap" style={{ border: "1px solid #ccc", borderRadius: "12px", overflow: "hidden", height: "auto" }}>
              <div className="portfolio-card-body" style={{ padding: "0", backgroundColor: "#f7f7f7", height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Image Section with Hover Effect */}
                <div
                  className="image-container"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px"
                  }}
                  onMouseEnter={(e) => e.currentTarget.querySelector('.image-hover-overlay').style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.querySelector('.image-hover-overlay').style.opacity = 0}
                >
                  <img
                    src="images/gallery/commercial.png.png"
                    alt="Building Construction"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  {/* Hover Effect */}
                  <div
                    className="image-hover-overlay"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      opacity: "0",
                      transition: "opacity 0.3s ease",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "bold",
                      padding: "10px",
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px"
                    }}
                  >
                    Building Construction
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Card 3 */}
          <div className="col-lg-4 col-md-6 custom-card" style={{ marginBottom: "20px", paddingBottom: "30px" }}>
            <div className="portfolio-card-wrap" style={{ border: "1px solid #ccc", borderRadius: "12px", overflow: "hidden", height: "auto" }}>
              <div className="portfolio-card-body" style={{ padding: "0", backgroundColor: "#f7f7f7", height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Image Section with Hover Effect */}
                <div
                  className="image-container"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px"
                  }}
                  onMouseEnter={(e) => e.currentTarget.querySelector('.image-hover-overlay').style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.querySelector('.image-hover-overlay').style.opacity = 0}
                >
                  <img
                    src="images/gallery/highrise.png.png"
                    alt="Building Construction"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  {/* Hover Effect */}
                  <div
                    className="image-hover-overlay"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      opacity: "0",
                      transition: "opacity 0.3s ease",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "bold",
                      padding: "10px",
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px"
                    }}
                  >
                    High-Rise Buildings
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Card 4 */}
          <div className="col-lg-4 col-md-6 custom-card" style={{ marginBottom: "20px", paddingBottom: "80px", marginLeft: "190px" }}>
  <div className="portfolio-card-wrap" style={{ border: "1px solid #ccc", borderRadius: "12px", overflow: "hidden", height: "auto" }}>
    <div className="portfolio-card-body" style={{ padding: "0", backgroundColor: "#f7f7f7", height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Image Section with Hover Effect */}
      <div
        className="image-container"
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          overflow: "hidden",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px"
        }}
        onMouseEnter={(e) => e.currentTarget.querySelector('.image-hover-overlay').style.opacity = 1}
        onMouseLeave={(e) => e.currentTarget.querySelector('.image-hover-overlay').style.opacity = 0}
      >
        <img
          src="images/gallery/farmhouse.png.png"
          alt="Building Construction"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Hover Effect */}
        <div
          className="image-hover-overlay"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            opacity: "0",
            transition: "opacity 0.3s ease",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            padding: "10px",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px"
          }}
        >
          Farm Houses
        </div>
      </div>
    </div>
  </div>
</div>


          {/* Portfolio Card 5 */}
          <div className="col-lg-4 col-md-6 custom-card" style={{ marginBottom: "20px", paddingBottom: "30px" }}>
            <div className="portfolio-card-wrap" style={{ border: "1px solid #ccc", borderRadius: "12px", overflow: "hidden", height: "auto" }}>
              <div className="portfolio-card-body" style={{ padding: "0", backgroundColor: "#f7f7f7", height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Image Section with Hover Effect */}
                <div
                  className="image-container"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px"
                  }}
                  onMouseEnter={(e) => e.currentTarget.querySelector('.image-hover-overlay').style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.querySelector('.image-hover-overlay').style.opacity = 0}
                >
                  <img
                    src="images/gallery/layout.png.png"
                    alt="Building Construction"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  {/* Hover Effect */}
                  <div
                    className="image-hover-overlay"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      opacity: "0",
                      transition: "opacity 0.3s ease",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "bold",
                      padding: "10px",
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px"
                    }}
                  >
                    Layout Plotting
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

  {/* Highlight Title */}
  <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
    <strong>Portfolio</strong>
  </div>
</div>

{/*  <!-- Our Portfolio Section End --> */}

        
       {/*  <!-- OUR SERVICES START --> */}
        {/* <div className="section-full mobile-page-padding our-service-wrap  p-b50  square_shape2">
            <div className="section-content">
                <div className="Service-half-top p-t80  site-bg-dark bg-moving" style={{backgroundImage:"url('images/background/bg-6.png')"}}>
                    <div className="container">
                        <div className="section-head text-white"> 
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 site-text-primary">Our</span> Services</h2>
                                </div>
                            </div>
                            <h3>Content about services we place them below</h3>
                        </div>                  
                  
                    </div>
                </div>
                <div className="services-half-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                
                                <div className="mt-icon-box-wraper m-b30">
                                    <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                        <span className="icon-count-number">1</span>
                                        <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                                            <span className="icon-cell"><img src="images/icon/crane-1.png" alt=""/></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte m-b25">Building <br/>Construction</h4>
                                            <a href="Project" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
                                        </div>
                                    </div>
                                </div>                            	
                                
                            </div>
                            
                            
                            <div className="col-lg-3 col-md-6">
                                
                                <div className="mt-icon-box-wraper m-b30">
                                    <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                        <span className="icon-count-number">2</span>
                                        <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                                            <span className="icon-cell"><img src="images/icon/renovation.png" alt=""/></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte m-b25">Building <br/>Renovation</h4>
                                            <a href="Project" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
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
                                            <a href="Project" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
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
                                            <a href="Project" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
                                        </div>
                                    </div>
                                </div>                            	
                                
                            </div>                                             
                        </div>
                    </div>
                </div>
            </div>
            <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                <strong>Services</strong>
            </div>                    
        </div>  */}  
       {/*  <!-- OUR SERVICES  END --> */}

       {/*  Get in touch start */}
       <div className="section-full site-bg-dark ">
            <div className="section-content">
                <div className="container get-in-touch-form">
                    
                    <div className="row">

                        <div className="col-lg-6 col-md-6">
                            <div className="contact-home1-left contact-home1-left-v2 site-bg-dark p-a30 m-b30 p-t50">
                                <h3 className="text-white m-t0"><span className="font-weight-100">Get In</span> Touch</h3>
                                <form className="cons-contact-form2 form-transparent" method="post" action="https://theme7x.com/shapen/form-handler2.php">
                                    
                                    <div className="input input-animate">
                                        <label for="name">Name</label>
                                        <input type="text" name="username"  id="name" required/>
                                        <span className="spin"></span>
                                    </div>
                                    
                                    <div className="input input-animate">
                                        <label for="email">Email</label>
                                        <input type="email" name="email"   id="email" required/>
                                        <span className="spin"></span>
                                    </div> 
                                    
                                    <div className="input input-animate">
                                        <label for="Phone">Phone</label>
                                        <input type="text" name="phone"  id="Phone" required/>
                                        <span className="spin"></span>
                                    </div>   
                                    
                                    <div className="input input-animate">
                                        <label for="message">Textarea</label>
                                        <textarea name="message"  id="message" required></textarea>
                                        <span className="spin"></span>
                                    </div>
                                    
                                    <div className="text-left p-t10">
                                        <button type="submit" className="site-button btn-effect ">
                                            Submit Now
                                        </button>
                                    </div>    
                                </form>
                            </div>
                        </div> 
                        
                    
                        <div className="get-in-touch-form-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div className="get-in-touch-info arrow-animation" style={{ flex: 1 }}>
        <div className="mt-icon-box-wraper p-a20 left bg-white hover-shadow">
            <div className="icon-md m-b20 scale-in-center">
                <span className="icon-cell text-secondry">
                    <img src="images/icon/icon-img-01.png" alt=""/>
                </span>
            </div>
            <div className="icon-content">
                <h4 className="mt-tilte m-b0">Great Experience for Building Construction & Renovation</h4>
            </div>
        </div>
    </div>
    
    <div className="get-in-touch-form-section-img" style={{ flex: 1, textAlign: 'right' }}>
  <img src="/images/s-pic-2.jpg" alt="" style={{ width: '700px', height: '500px',marginLeft:'60px',marginBottom:'0px' }} />
</div>

</div>
             
                        
                    </div>
                </div>
            </div>
                  
        </div>   
        {/*  Get in touch  END */}
                    
      
        
       {/*  <!-- OUR PROJECT START --> */}
       <div className="section-full mobile-page-padding our-project-wrap p-t80 p-b30 square_shape2">
      <div className="container">
        {/* TITLE START */}
        <div className="section-head">
          <div className="mt-separator-outer separator-left">
            <div className="mt-separator">
              <h2 className="text-uppercase sep-line-one">
                <span className="font-weight-300 site-text-primary">Our</span> Project
              </h2>
            </div>
          </div>
        </div>
        {/* TITLE END */}
 
        <div className="section-content">
          <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
            {/* Filter Navigation */}
            <div className="stamp masonry-item col-lg-3 col-md-6 m-b30">
              <div className="bg-gray p-a30">
                <div className="filter-wrap">
                  <ul className="filter-navigation masonry-filter text-uppercase">
                    <li className={filter === '*' ? 'active' : ''}>
                      <a href="#!" onClick={() => handleFilterChange('*')} data-hover="All">All</a>
                    </li>
                    <li className={filter === 'cat-1' ? 'active' : ''}>
                      <a href="#!" onClick={() => handleFilterChange('cat-1')} data-hover="Ongoing">Ongoing</a>
                    </li>
                    <li className={filter === 'cat-2' ? 'active' : ''}>
                      <a href="#!" onClick={() => handleFilterChange('cat-2')} data-hover="Upcoming">Upcoming</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
 
            {/* Project Items */}
            {filteredProjects.map((project, index) => (
              <div key={index} className={`masonry-item ${project.category} col-lg-3 col-md-6 m-b30`}>
                <div className="mt-box image-hover-block">
                  <div className="mt-thum-bx">
                    <img src={project.imageSrc} alt={project.title} />
                  </div>
                  <div className="mt-info p-t20 text-white">
                    <h4 className="mt-title m-b10 m-t0">{project.title}</h4>
                    <p className="m-b0">{project.location}</p>
                  </div>
                  {/* Dynamic Link based on project */}
                  <Link to={project.link} className="project-link"></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
        <strong>Projects</strong>
      </div>
        </div> 
       {/*  <!-- OUR PROJECT END --> */}
    
        {/*   <!-- CALL US SECTION START --> */}
        <div className="section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center" style={{backgroundImage:"url('images/Webimgs/4.jpg')"}}>
            <div className="overlay-main site-bg-primary opacity-07"></div>
            <div className="container">

                    <div className="section-content">
                        <div className="call-us-section text-center">
                            <h4 className="m-b15">Let's work together</h4>
                            <h2 className="call-us-number m-b15 m-b0">(+91) 994 994 0333</h2>
                            <h4 className="call-us-address m-t0 m-b20">#309, B-block, Asian Sun City, Kondapur, HYD</h4>
                            <a href="Contact" className="site-button-secondry btn-effect site-bg-dark">Contact Us</a>
                        </div>
                    </div>
                
            </div>
        </div>   
        {/* <!-- CALL US SECTION END --> */}
        
        {/* <!-- TESTIMONIALS SECTION START --> */}
        <div className="section-full mobile-page-padding p-t80 p-b50 square_shape2 bg-cover" style={{backgroundImage:"url('images/background/bg6.jpg')"}}>
            <div className="container">
                <div className="section-content">
                    
                   {/*  <!-- TITLE START --> */}
                    <div className="section-head">
                        <div className="mt-separator-outer separator-center">
                            <div className="mt-separator">
                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 site-text-primary">Client</span> Testimonials</h2>
                            </div>
                        </div>
                    </div>                   
                  {/*   <!-- TITLE END -->  */}
                    
                      {/*   <!-- TESTIMONIAL START -->    */}
                     <div className="owl-carousel testimonial-home">
                        <div className="item">
                            <div className="testimonial-2 m-a30 hover-animation-1">
                                <div className=" block-shadow bg-white p-a30">
                                    <div className="testimonial-detail clearfix">
                                        <div className="testimonial-pic radius shadow scale-in-center"><img src="images/client.jpg" width="100" height="100" alt=""/></div>
                                        <h4 className="testimonial-name m-b5">Mr. Manoj -</h4>
                                        <span className="testimonial-position"> (TX, USA)</span>
                                    </div>                                    
                                    <div className="testimonial-text">
                                        <span className="fa fa-quote-right"></span>
                                        <p> La-Tierra Construction exceeded our expectations, delivering a villa that perfectly matched our vision of luxury living.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-2 m-a30  hover-animation-1">
                                <div className=" block-shadow bg-white p-a30">
                                    <div className="testimonial-detail clearfix">
                                        <div className="testimonial-pic radius shadow scale-in-center"><img src="images/client.jpg" width="100" height="100" alt=""/></div>
                                        <h4 className="testimonial-name m-b5">Dr. Ramesh A  -</h4>
                                        <span className="testimonial-position">(USA)</span>
                                    </div>                                    
                                    <div className="testimonial-text">
                                        <span className="fa fa-quote-right"></span>
                                        <p>Their professionalism and attention to detail made the villa purchasing process effortless and rewarding.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-2 m-a30 hover-animation-1">
                                <div className=" block-shadow bg-white p-a30">
                                    <div className="testimonial-detail clearfix">
                                        <div className="testimonial-pic radius shadow scale-in-center"><img src="images/client.jpg" width="100" height="100" alt=""/></div>
                                        <h4 className="testimonial-name m-b5">Mr. Manoj -</h4>
                                        <span className="testimonial-position"> (TX, USA)</span>
                                    </div>                                    
                                    <div className="testimonial-text">
                                        <span className="fa fa-quote-right"></span>
                                        <p> La-Tierra Construction exceeded our expectations, delivering a villa that perfectly matched our vision of luxury living.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-2 m-a30  hover-animation-1">
                                <div className=" block-shadow bg-white p-a30">
                                    <div className="testimonial-detail clearfix">
                                        <div className="testimonial-pic radius shadow scale-in-center"><img src="images/client.jpg" width="100" height="100" alt=""/></div>
                                        <h4 className="testimonial-name m-b5">Dr. Ramesh A  -</h4>
                                        <span className="testimonial-position">(USA)</span>
                                    </div>                                    
                                    <div className="testimonial-text">
                                        <span className="fa fa-quote-right"></span>
                                        <p>Their professionalism and attention to detail made the villa purchasing process effortless and rewarding.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                                                                                                      
                    </div>
                    
                </div>
            </div>  
            <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                <strong>Clients</strong>
            </div> 
        </div> 
    {/*     <!-- TESTIMONIALS SECTION END -->       */} 

        {/* <!-- CLIENT LOGO SECTION START --> */}
            <div class="section-full p-t10 bg-white ">
                <div class="container">
                    {/*   <!-- TITLE START --> */}
                    <div className="section-head"> 
                        <div className="mt-separator-outer separator-center">
                            <div className="mt-separator">
                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 site-text-primary">Our</span> Partners </h2>
                            </div>
                        </div>
                    </div>                  
                    {/*     <!-- TITLE END --> */}
                    <div class="section-content">
                    
                        {/* <!-- TESTIMONIAL 4 START ON BACKGROUND -->    */}
                        <div class="section-content">
                             <div class="section-content p-tb10 owl-btn-vertical-center">
                                <div class="owl-carousel home-client-carousel-2">
                                
                                    <div class="item">
                                        <div class="ow-client-logo">
                                            <div class="client-logo client-logo-media">
                                            <a href="about"><img src="images/webimgs/BLACK - LA-TIERRA DESIGN STUDIO.png" alt="design studioz" /></a></div>
                                        </div>
                                    </div>
                                    
                                    <div class="item">
                                        <div class="ow-client-logo">
                                            <div class="client-logo client-logo-media">
                                            <a href="about-1.html"><img src="images/webimgs/Collabridge logo R 1.png" alt="collabridge" style={{minWidth:'180px'}}/></a></div>
                                        </div>
                                    </div>
                                    
                                    <div class="item">
                                        <div class="ow-client-logo">
                                            <div class="client-logo client-logo-media">
                                            <a href="about-1.html"><img src="images/webimgs/kapa-logo.png" alt=""/></a></div>
                                        </div>
                                    </div>
                                    
                                    {/* <div class="item">
                                        <div class="ow-client-logo">
                                            <div class="client-logo client-logo-media">
                                            <a href="about-1.html"><img src="images/client-logo/w4.png" alt=""/></a></div>
                                        </div>
                                    </div>
                                    
                                    <div class="item">
                                        <div class="ow-client-logo">
                                            <div class="client-logo client-logo-media">
                                            <a href="about-1.html"><img src="images/client-logo/w5.png" alt=""/></a></div>
                                        </div>
                                    </div>
                                    
                                    <div class="item">
                                        <div class="ow-client-logo">
                                            <div class="client-logo client-logo-media">
                                            <a href="about-1.html"><img src="images/client-logo/w6.png" alt=""/></a></div>
                                        </div>
                                    </div> */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- CLIENT LOGO  SECTION End -->*/}
    </div>
   {/*  <!-- CONTENT END --> */}
    </div>
  )
}

export default Home