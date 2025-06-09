import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Nav from '../components/Nav';
 
// Add a custom container class that's narrower than the default Bootstrap container
const customContainerStyle = {
//   maxWidth: '1130px',  // Reduced from default 1320px
  margin: '0 auto',
  padding: '0 15px',
  width: '90%'
};
 
// Add this style object at the top with your other styles
const stickyNavStyle = {
  position: 'sticky',
  top: '90px', // Height of the header
  backgroundColor: 'white',
  zIndex: 999,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease'
};
 
function ProjectDetails() {
    const [currentImage, setImage] = useState(''); // State to manage the image URL
 
    return (
        <div>
            {/* <!-- CONTENT START --> */}
            <div className="page-content">
                {/* <!-- INNER PAGE BANNER --> */}
              <div className="mt-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url('images/banner/5.jpg')", position: 'relative', height: '400px' }}>
    <div className="overlay-main bg-black opacity-07"></div>
    <div style={{ ...customContainerStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100%' }}>  {/* Center content */}
        <div className="mt-bnr-inr-entry">
            <div className="banner-title-outer">
                <div className="banner-title-name">
                    <h2 className="m-b0">SILVER OAK RESIDENCES</h2>
                    <h5 className='text-white'>Villas Project</h5>
                </div>
            </div>
            {/* <!-- BREADCRUMB ROW --> */}
            <div>
                <ul className="mt-breadcrumb breadcrumb-style-2">
                    <li><a href="Project">Commnunities</a></li>
                    <li>Project Detail</li>
                </ul>
            </div>
            {/* <!-- BREADCRUMB ROW END --> */}
        </div>
    </div>
</div>
                {/* <!-- INNER PAGE BANNER END --> */}
               
                {/* Update the Nav section with new sticky style */}
                <div style={stickyNavStyle}>
                    <Nav />
                </div>
 
                {/* <!-- SECTION CONTENT START --> */}
                <div id="details" className="section-full p-tb80 inner-page-padding">
                    <div style={customContainerStyle}>  {/* Replace className="container" with style={customContainerStyle} */}
                        <div className="project-detail-outer">
                            {/* images and details start */}
                            <div  className="m-b30">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                               
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="images/webimgs/top_view-min.jpg" className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="images/webimgs/villa_min.jpg" className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="images/webimgs/1-min.jpg" className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="images/webimgs/2-min.jpg" className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="images/webimgs/4-min.jpg" className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item ">
                                                    <img src="images/webimgs/interior-0-min.jpg" className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="images/webimgs/interior-1-min.jpg" className="d-block w-100" alt="..." />
                                                </div>
                                               
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="proj_detls border border-4 border-warning p-3">
                                            <div className="dims_dtls text-center border-bottom border-1 border-dark">
                                                <h4>Sq Ft. 3450 - 3890</h4>
                                                <h4>Sq. YDS. 211.54 - 238</h4>
                                            </div>
                                            <div className="proj_main_lst border-bottom border-1 border-dark">
                                                <div className="row p-2">
                                                    <div className="col-md-6 border-end border-1 border-dark">
                                                        <div className="list d-flex align-items-center justify-content-center mt-2 gap-2 ">
                                                            <img src="images/webimgs/house.png" alt="" width={30} />
                                                            <p className='mb-0'>Triplex Villas</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 ">
                                                        <div className="list d-flex align-items-center justify-content-center mt-2 gap-2 ">
                                                            <img src="images/webimgs/bed.png" alt="" width={30} />
                                                            <p className='mb-0'>3 Beds</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="proj_main_lst border-bottom border-1 border-dark">
                                                <div className="row p-2">
                                                    <div className="col-md-6 border-end border-1 border-dark">
                                                        <div className="list d-flex align-items-center justify-content-center mt-2 gap-2 ">
                                                        <img src="images/webimgs/home-theater.png" alt="" width={30} />
                                                            <p className='mb-0'>Entertainment Room</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 ">
                                                        <div className="list d-flex align-items-center justify-content-center mt-2 gap-2 ">
                                                            <img src="images/webimgs/parking.png" alt="" width={30} />
                                                            <p className='mb-0'>2 Parking</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                           
                                            <div className="proj_main_lst border-bottom border-1 border-dark">
                                                <div className="row p-2">
                                                    <div className="col-md-12">
                                                        <div className="list d-flex align-items-center justify-content-center mt-2 gap-2 ">
                                                            <img src="images/webimgs/price.png" alt="" width={30} />
                                                            <p className='mb-0'>Starting at ₹ 2 Crores</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* images and details end */}
                       {/* floor plan start */}
<div className="m-b30">
    <div className="floor_plan">
        <div className="section-head">
            <div className="mt-separator-outer separator-center">
                <div id="floor-plans" className="mt-separator">
                    <h2 className="text-uppercase sep-line-one ">
                        <span className="font-weight-300 site-text-primary">Floor</span> Plans
                    </h2>
                </div>
            </div>
        </div>  
        <div className="main_tab">
            <ul class="nav nav-pills mb-3 text-center flr_pln_fac" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="East-tab" data-bs-toggle="pill" data-bs-target="#east-facing" type="button" role="tab" aria-controls="pills-east" aria-selected="true">East Facing</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="West-tab" data-bs-toggle="pill" data-bs-target="#west-facing" type="button" role="tab" aria-controls="pills-west" aria-selected="false">West Facing</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="east-facing" role="tabpanel" aria-labelledby="east-facing-tab" tabindex="0">
                    <div class="d-flex align-items-start">
                        <div class="nav flex-column nav-pills flr_pln_typ me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button class="nav-link active" id="east-type-a-tab" data-bs-toggle="pill" data-bs-target="#east-type-a" type="button" role="tab" aria-controls="east-type-a" aria-selected="true">Type A</button>
                            <button class="nav-link" id="east-type-b-tab" data-bs-toggle="pill" data-bs-target="#east-type-b" type="button" role="tab" aria-controls="east-type-b" aria-selected="false">Type B</button>
                            <button class="nav-link" id="east-type-c-tab" data-bs-toggle="pill" data-bs-target="#east-type-c" type="button" role="tab" aria-controls="east-type-c" aria-selected="false">Type C</button>
                        </div>
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="east-type-a" role="tabpanel" aria-labelledby="east-type-a-tab" tabindex="0">
                                <img src="images/webimgs/east/typea-1.jpg" alt="ground" width={300} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/east/typea-1.jpg')} />
                                <img src="images/webimgs/east/typea-2.jpg" className='me-3' alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/east/typea-2.jpg')} />
                                <img src="images/webimgs/east/typea-3.jpg" alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/east/typea-3.jpg')} />
                            </div>
                            <div class="tab-pane fade" id="east-type-b" role="tabpanel" aria-labelledby="east-type-b-tab" tabindex="0">
                                <img src="images/webimgs/east/typeb-1.jpg" alt="ground" width={300} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/east/typeb-1.jpg')} />
                                <img src="images/webimgs/east/typeb-2.jpg" className='me-3' alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/east/typeb-2.jpg')} />
                                <img src="images/webimgs/east/typeb-3.jpg" alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/east/typeb-3.jpg')} />
                            </div>
                            <div class="tab-pane fade" id="east-type-c" role="tabpanel" aria-labelledby="east-type-c-tab" tabindex="0">
                                <img src="images/webimgs/east/typec-1.jpg" alt="ground" width={300} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/east/typec-1.jpg')} />
                                <img src="images/webimgs/east/typec-2.jpg" className='me-3' alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/east/typec-2.jpg')} />
                                <img src="images/webimgs/east/typec-3.jpg" alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/east/typec-3.jpg')} />
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className="tab-pane fade" id="west-facing" role="tabpanel" aria-labelledby="west-facing-tab" tabIndex="0">
    <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills flr_pln_typ me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="west-type-a-tab" data-bs-toggle="pill" data-bs-target="#west-type-a" type="button" role="tab" aria-controls="west-type-a" aria-selected="true">Type A</button>
            <button className="nav-link" id="west-type-b-tab" data-bs-toggle="pill" data-bs-target="#west-type-b" type="button" role="tab" aria-controls="west-type-b" aria-selected="false">Type B</button>
            <button className="nav-link" id="west-type-c-tab" data-bs-toggle="pill" data-bs-target="#west-type-c" type="button" role="tab" aria-controls="west-type-c" aria-selected="false">Type C</button>
            <button className="nav-link" id="west-type-d15-tab" data-bs-toggle="pill" data-bs-target="#west-type-d15" type="button" role="tab" aria-controls="west-type-d15" aria-selected="false">Type D</button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="west-type-a" role="tabpanel" aria-labelledby="west-type-a-tab" tabIndex="0">
                <img src="images/webimgs/west/typea-1.jpg" className='me-3' alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typea-1.jpg')} />
                <img src="images/webimgs/west/typea-2.jpg" className='me-3' alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typea-2.jpg')} />
                <img src="images/webimgs/west/typea-3.jpg" alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typea-3.jpg')} />
            </div>
            <div className="tab-pane fade" id="west-type-b" role="tabpanel" aria-labelledby="west-type-b-tab" tabIndex="0">
                <img src="images/webimgs/west/typeb-1.jpg" className='me-3' alt="ground" width={280} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typeb-1.jpg')} />
                <img src="images/webimgs/west/typeb-2.jpg" className='me-3' alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typeb-2.jpg')} />
                <img src="images/webimgs/west/typeb-3.jpg" alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typeb-3.jpg')} />
            </div>
            <div className="tab-pane fade" id="west-type-c" role="tabpanel" aria-labelledby="west-type-c-tab" tabIndex="0">
                <img src="images/webimgs/west/typec-1.jpg" className='me-3' alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typec-1.jpg')} />
                <img src="images/webimgs/west/typec-2.jpg" className='me-3' alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typec-2.jpg')} />
                <img src="images/webimgs/west/typec-3.jpg" alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typec-3.jpg')} />
            </div>
            <div className="tab-pane fade" id="west-type-d15" role="tabpanel" aria-labelledby="west-type-d15-tab" tabIndex="0">
                <img src="images/webimgs/west/typed15-1.jpg" className='me-3' alt="ground" width={270} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typed15-1.jpg')} />
                <img src="images/webimgs/west/typed15-2.jpg" className='me-3' alt="ground" width={250} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typed15-2.jpg')} />
                <img src="images/webimgs/west/typed15-3.jpg" alt="ground" width={250} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setImage('images/webimgs/west/typed15-3.jpg')} />
            </div>
        </div>
    </div>
</div>
 
            </div>
        </div>
    </div>
</div>
{/* Modal for Image Popup */}
<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <img src={currentImage} alt="Popup" className="img-fluid" />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
{/* floor plan end */}
 
                            <div className="m-b30">
                                <div id="sitemap"className="site_map">
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-center">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 site-text-primary">Site</span> Map </h2>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="site_map_cont text-center">
                                        <img src="images/webimgs/site-map.jpg" alt="site map" width={600} />
                                    </div>
                                </div>
                            </div>
                                           
                           
                         
                        </div>
                    </div>
                </div>
 
                <div id="amenities" className="amenities">
                    <div style={customContainerStyle}>  {/* Add container style here */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one">
                                        <span className="font-weight-300 site-text-primary">ameni</span>ties
                                    </h2>
                                </div>
                            </div>
                        </div>  
 
                        {/* Slider Settings with Faster Automatic Sliding and Reduced Space */}
                        <Slider
        dots={true}
        infinite={true}
        speed={300}  // Reduced the speed for faster sliding
        slidesToShow={3}  // Shows 3 slides at a time
        slidesToScroll={1} // Scrolls one slide at a time
        autoplay={true}  // Enable automatic sliding
        autoplaySpeed={2000}  // Slide every 2 seconds (faster sliding speed)
        centerMode={true}  // Centers the current slide
        responsive={[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,  // Centers the current slide for responsiveness
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,  // Centers the current slide for responsiveness
                },
            },
        ]}
    >
        {/* Add margin-left to the first card */}
        <div className="amenity" style={{ padding: '3px', marginLeft: '100px', marginRight: 'auto' }}>
            <div className="amenity-image">
                <img src="images/webimgs/clbhouse.jpg" alt="15000 sqft Clubhouse" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#333', marginTop: '5px' }}>15000 sqft Clubhouse</p>
        </div>
        <div className="amenity" style={{ padding: '3px' }}>
            <div className="amenity-image">
                <img src="images/webimgs/gym.jpg" alt="Gym" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#333', marginTop: '5px' }}>Gym</p>
        </div>
        <div className="amenity" style={{ padding: '3px' }}>
            <div className="amenity-image">
                <img src="images/webimgs/yoga.jpg" alt="Outdoor Yoga Space" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#333', marginTop: '5px' }}>Outdoor Yoga Space</p>
        </div>
        <div className="amenity" style={{ padding: '3px' }}>
            <div className="amenity-image">
                <img src="images/webimgs/hall.jpg" alt="Banquet Hall" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#333', marginTop: '5px' }}>Banquet Hall</p>
        </div>
        <div className="amenity" style={{ padding: '3px' }}>
            <div className="amenity-image">
                <img src="images/webimgs/swimming.jpg" alt="Swimming Pool" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#333', marginTop: '5px' }}>Swimming Pool</p>
        </div>
        <div className="amenity" style={{ padding: '3px' }}>
            <div className="amenity-image">
                <img src="images/webimgs/badminton2.jpg" alt="Badminton" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#333', marginTop: '5px' }}>Outdoor Badminton Court</p>
        </div>
        <div className="amenity" style={{ padding: '3px' }}>
            <div className="amenity-image">
                <img src="images/webimgs/basketball.jpg" alt="Basketball Court" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#333', marginTop: '5px' }}>Outdoor Basketball Court</p>
        </div>
        <div className="amenity" style={{ padding: '3px' }}>
            <div className="amenity-image">
                <img src="images/webimgs/parks.jpg" alt="Green Parks" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#333', marginTop: '5px' }}>Green Parks</p>
        </div>
        <div className="amenity" style={{ padding: '3px' }}>
            <div className="amenity-image">
                <img src="images/webimgs/theatre.jpg" alt="Entertainment Room" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#333', marginTop: '5px' }}>Exclusive Entertainment Room</p>
        </div>
        <div className="amenity" style={{ padding: '3px' }}>
            <div className="amenity-image">
                <img src="images/webimgs/playarea.jpg" alt="Kids Play Area" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#333', marginTop: '5px' }}>Kids Play Area</p>
        </div>
    </Slider>
                    </div>
         </div>
        </div>
    </div>
    );
}
 
export default ProjectDetails;
 
 
 