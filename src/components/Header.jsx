import React, { useState } from 'react';

function Header() {
    // State to manage hover effect for each nav item
    const [hoveredItem, setHoveredItem] = useState(null);

    // Inline style for each navigation item
    const navLinkStyle = (isHovered) => ({
        textTransform: 'uppercase',
        fontSize: '16px',
        padding: '10px',
        transition: 'transform 0.3s ease-in-out', // Smooth transition for zoom
        transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Zoom-in effect on hover
        color: isHovered ? '#ecc731' : 'black', // Change color on hover (optional)
    });

    // Style to add space between "Home" and "About Us"
    const homeStyle = {
        ...navLinkStyle(hoveredItem === 'home'),
        marginLeft: '40px', // Adjust this value to move it further left or right
    };

    return (
        <div>{/*  <!-- HEADER START --> */}
            <header className="site-header header-style-1 mobile-sider-drawer-menu">
                <div className="sticky-header main-bar-wraper" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                    <div className="main-bar" style={{ backgroundColor: '#f1f1f1', paddingBottom: '10px' }}> {/* Reduced padding-bottom */}
                        <div className="container">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <a href="/">
                                        <img src="images/BLACK- LA-TIERRA INFRA.png" alt="" style={{ minWidth: '240px', height: '95px' }} />
                                    </a>
                                </div>
                            </div>

                            {/* MAIN Nav */}
                            <div className="header-nav navbar-collapse collapse" style={{ position: 'sticky', top: '60px', zIndex: 999 }}>
                                <ul className="nav navbar-nav" style={{ marginBottom: '-100px', paddingBottom: '0' }}>
                                    <li
                                        onMouseEnter={() => setHoveredItem('home')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <a href="/" style={homeStyle}>Home</a> {/* Apply custom home style */}
                                    </li>
                                    <li
                                        onMouseEnter={() => setHoveredItem('about')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <a href="/about" style={navLinkStyle(hoveredItem === 'about')}>About us</a>
                                    </li>
                                    <li
                                        onMouseEnter={() => setHoveredItem('project')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <a href="Project" style={navLinkStyle(hoveredItem === 'project')}>Communities</a>
                                    </li>
                                    <li
                                        onMouseEnter={() => setHoveredItem('studioz')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <a href='Studioz' style={navLinkStyle(hoveredItem === 'studioz')}>Design Studioz</a>
                                    </li>
                                    <li
                                        onMouseEnter={() => setHoveredItem('contact')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <a href="Contact" style={navLinkStyle(hoveredItem === 'contact')}>Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*  <!-- HEADER END --> */}
        </div>
    );
}

export default Header;
