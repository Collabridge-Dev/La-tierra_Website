import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
function Project() {
  const [activeFilter, setActiveFilter] = useState('*');
  // Define latitude, longitude, and zoom level
  const latitude = 17.143307; // Thumaloor latitude
  const longitude = 78.463918; // Thumaloor longitude
  const zoomLevel = 13; // Set your preferred zoom level

  React.useEffect(() => {
    const map = L.map('map').setView([latitude, longitude], zoomLevel); // Set the latitude, longitude, and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);
    // Custom icon for the markers
    const customIcon = L.icon({
      iconUrl: "\\images\\mapp.png", // Use local path to the marker icon
      iconSize: [25, 35], // Size of the icon
      iconAnchor: [12, 41], // Anchor point of the icon
      popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    });

    // Add a marker for the neighborhood
    L.marker([latitude, longitude], { icon: customIcon }).addTo(map).bindPopup('Silver Oak Residences,Triplex Villas 2,600 to 3,500 Sq. Ft').openPopup();




    /* const addMarkers = async () => {
      // Example: Fetch nearby schools
      const schoolsResponse = await fetch(`https://api.example.com/nearby/schools?lat=${latitude}&lng=${longitude}`);
      const schoolsData = await schoolsResponse.json();

      schoolsData.forEach(school => {
        L.marker([school.lat, school.lng]).addTo(map).bindPopup(school.name);
      });

      // Example: Fetch nearby airports
      const airportsResponse = await fetch(`https://api.example.com/nearby/airports?lat=${latitude}&lng=${longitude}`);
      const airportsData = await airportsResponse.json();

      airportsData.forEach(airport => {
        L.marker([airport.lat, airport.lng]).addTo(map).bindPopup(airport.name);
      });

      // Example: Fetch nearby housing communities
      const communitiesResponse = await fetch(`https://api.example.com/nearby/communities?lat=${latitude}&lng=${longitude}`);
      const communitiesData = await communitiesResponse.json();

      communitiesData.forEach(community => {
        L.marker([community.lat, community.lng]).addTo(map).bindPopup(community.name);
      });
    };
 */
    /* addMarkers(); */

    // Cleanup function to remove the map instance
    return () => {
      map.remove();
    };
  }, [latitude, longitude, zoomLevel]); // The effect will run only once due to empty dependencies



  // Handler to update the active filter state
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const projects = [
    { id: 1, category: 'cat-1', image: '/images/webimgs/RERA NO.png', title: 'SILVER OAK RESIDENCES', description: "Serenity Villas is an exclusive residential development designed to offer a blend of luxury and comfort.", detailPage: '/ProjectDetails' },
    { id: 2, category: 'cat-2', image: '/images/webimgs/up_coming.jpg', title: 'Villas', description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.", detailPage: '/Upcoming' },
    { id: 3, category: 'cat-2', image: '/images/webimgs/up_coming.jpg', title: 'High-Rise Residential', description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.", detailPage: '/projectdetail1' },
  ];

  // Inline styles
  const linkStyle = {
    position: 'relative',
    transition: 'color 0.3s ease, transform 0.3s ease',
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: '#ff6a00',
    fontWeight: 'bold',
  };

  const hoverStyle = {
    transform: 'scale(1.1)',
  };

  const projectHoverStyle = {
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease',
    // height:'350px',
  };

  return (
    <div>
      {/* CONTENT START */}
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div className="mt-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url('/images/webimgs/41.jpg')" }}>
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="mt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="m-b0">Always dedicated and devoted</h2>
                </div>
              </div>
              <div>
                <ul className="mt-breadcrumb breadcrumb-style-2">
                  <li><a href="/">Home</a></li>
                  <li>Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        {/*  Neighbourhood start */}
       <div className="m-b31">
  <div className="neighbourhood">
    <div className="section-head">
      <div className="mt-separator-outer separator-center">
        <div className="mt-separator mt-4">  {/* 👈 added mt-6 here */}
          <h2 className="text-uppercase sep-line-one">
            <span className="font-weight-300 site-text-primary">neighbour</span> hood
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div id="map" style={{ height: '400px', width: '100%',marginTop:'-30px' }}></div>
</div>

       
        {/*   Neighbourhood end */}


        {/* SECTION CONTENT START */}
        <div className="section-full p-tb80 inner-page-padding">
          <div className="container">
            {/* PAGINATION START */}
            <div className="filter-wrap p-b30 text-center">
              <ul className="filter-navigation inline-navigation masonry-filter link-style text-uppercase">
                <li className={activeFilter === '*' ? 'active' : ''} onClick={() => handleFilterClick('*')}>
                  <a
                    href="javascript:void(0);"
                    style={activeFilter === '*' ? activeLinkStyle : linkStyle}
                    onMouseOver={(e) => e.target.style.transform = hoverStyle.transform}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    All
                  </a>
                </li>
                <li className={activeFilter === 'cat-1' ? 'active' : ''} onClick={() => handleFilterClick('cat-1')}>
                  <a
                    href="javascript:void(0);"
                    style={activeFilter === 'cat-1' ? activeLinkStyle : linkStyle}
                    onMouseOver={(e) => e.target.style.transform = hoverStyle.transform}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    On-Going
                  </a>
                </li>
                <li className={activeFilter === 'cat-2' ? 'active' : ''} onClick={() => handleFilterClick('cat-2')}>
                  <a
                    href="javascript:void(0);"
                    style={activeFilter === 'cat-2' ? activeLinkStyle : linkStyle}
                    onMouseOver={(e) => e.target.style.transform = hoverStyle.transform}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Up-Coming
                  </a>
                </li>
              </ul>
            </div>
            {/* PAGINATION END */}

            {/* GALLERY CONTENT START */}
            <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
              {projects.map((project) => (
                <div key={project.id} className={`masonry-item ${project.category} col-lg-4 col-md-6 m-b30 ${activeFilter === '*' || activeFilter === project.category ? '' : 'd-none'}`}>
                  <div className="image-effect-two hover-shadow" style={projectHoverStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <img src={project.image} alt="" />
                    <div className="figcaption">
                      <h4 className="mt-tilte">{project.title}</h4>
                      <p>{project.description}</p>
                      <a href={project.detailPage} className="read-more site-button btn-effect">Read More</a>
                      <a className="mfp-link" href={project.image}>
                        <i className="fa fa-arrows-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* GALLERY CONTENT END */}

            {/* <div className="m-t50 text-center">
              <a href="project-detail.html" className="site-button btn-effect">Load More</a>
            </div> */}
          </div>
        </div>
        {/* SECTION CONTENT END */}
      </div>
    </div>
  );
}

export default Project;
